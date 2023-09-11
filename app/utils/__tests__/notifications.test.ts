/* eslint-disable @typescript-eslint/unbound-method */
import AsyncStorage from "@react-native-async-storage/async-storage"
import notifications from "../../utils/notifications"
import { LocationType } from "../../screens/OnboardingScreen/SignupLocation"
import PushNotificationIOS from "@react-native-community/push-notification-ios"

it("call getCurrentTimeZome with selectedLocation", async () => {
  await AsyncStorage.setItem("muteFrom", "12-12-2012 11:11:11")
  await AsyncStorage.setItem("muteUntil", "12-12-2012 13:13:13")
  await AsyncStorage.setItem("upcoming", JSON.stringify(true))
  await AsyncStorage.setItem("privacy", JSON.stringify(true))
  await AsyncStorage.setItem("notifyBefore", JSON.stringify(15))

  jest.useFakeTimers("modern").setSystemTime(new Date("12-12-2012 10:10:10"))

  await notifications.setNotifications([
    {
      title: "Test",
      sightings: [
        {
          notify: true,
          date: "12-12-2012 12:12:12",
        },
      ],
    },
  ] as LocationType[])

  expect(PushNotificationIOS.removeAllPendingNotificationRequests).toBeCalledTimes(1)
  expect(PushNotificationIOS.addNotificationRequest).toBeCalledTimes(2)
})
