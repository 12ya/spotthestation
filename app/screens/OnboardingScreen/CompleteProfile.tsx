import { useNavigation } from "@react-navigation/native"
import React, { useCallback, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { fontSizes, lineHeights, scale, typography } from "../../theme"
import { colors } from "../../theme/colors"
import { useSafeAreaInsetsStyle } from "../../utils/useSafeAreaInsetsStyle"
import { IconLinkButton } from "./components/IconLinkButton"
import { LocationType, SignupLocation } from "./SignupLocation"
import { SignupNotificationSettings } from "./SignupNotificationSettings"
import * as storage from "../../utils/storage"
import Snackbar from "react-native-snackbar"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
import analytics from "@react-native-firebase/analytics"
import { translate } from "../../i18n"

export const CompleteProfile = observer(function CompleteProfile() {
  const navigation = useNavigation()
  const { setCurrentLocation, setInitLoading } = useStores()

  const $topInset = useSafeAreaInsetsStyle(["top", "bottom"], "padding")

  const [step, setStep] = useState(1)
  const [notifications, setNotifications] = useState(false)
  const [location, setLocation] = useState({
    title: "",
    subtitle: "",
    location: {
      lat: null,
      lng: null,
    },
  })

  const handleBack = useCallback(() => {
    if (step === 1) navigation.goBack()
    else setStep(step - 1)
  }, [step])

  const handleNext = useCallback(() => setStep(step + 1), [step])

  const handleDone = () => {
    analytics()
      .logTutorialComplete()
      .catch(() => null)
    storage
      .save("isSettingsCompleted", true)
      .then(() => navigation.navigate("Main" as never))
      .catch((err) =>
        Snackbar.show({
          text: err as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: translate("snackBar.dismiss"),
            textColor: "red",
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        }),
      )
  }

  const handleLocationChange = async (location: LocationType) => {
    setLocation(location)
    setInitLoading(true)
    setCurrentLocation(location).catch((e) => console.log(e))
    await storage.save("currentLocation", location)
  }

  const handleNotificationsChange = async (notifications: boolean) => {
    setNotifications(notifications)
    await storage.save("upcoming", notifications)
  }

  const renderBody = useCallback(() => {
    switch (step) {
      case 2:
        return (
          <SignupLocation
            value={location}
            onValueChange={handleLocationChange}
            onAction={handleDone}
          />
        )
      default:
        return (
          <SignupNotificationSettings
            value={notifications}
            onValueChange={handleNotificationsChange}
            onAction={handleNext}
          />
        )
    }
  }, [step, notifications, location])

  return (
    <Screen
      preset="scroll"
      contentContainerStyle={$container}
      style={[$topInset, { backgroundColor: colors.palette.neutral900 }]}
      statusBarStyle="light"
    >
      <IconLinkButton
        icon="back"
        accessible
        accessibilityLabel="Back button"
        accessibilityHint="Navigates to the previous screen"
        onPress={handleBack}
        buttonStyle={$back}
      />
      <View style={$contentContainer}>
        <Text
          accessible
          accessibilityLabel="Step counter"
          accessibilityHint="Display current step"
          accessibilityRole="text"
          text={`${step} of 2`}
          style={$step}
        />
        {renderBody()}
      </View>
    </Screen>
  )
})

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.palette.neutral900,
  paddingTop: scale(24),
}

const $contentContainer: ViewStyle = {
  flex: 1,
  paddingHorizontal: scale(36),
  paddingBottom: scale(52),
}

const $back: ViewStyle = {
  marginLeft: scale(18),
}

const $step: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.normal,
  lineHeight: lineHeights[22],
  paddingBottom: scale(18),
  paddingTop: scale(36),
}
