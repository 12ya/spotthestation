/* eslint-disable react-native/no-inline-styles */
import React from "react"
import { ViewStyle, View, TextStyle, Pressable, PressableProps } from "react-native"
import { Text, Icon, IconTypes, Toggle } from "../../../components"
import { TxKeyPath } from "../../../i18n"
import { typography, colors, fontSizes, lineHeights, scale } from "../../../theme"

export interface ListItemProps {
  selected?: boolean
  withSwitch?: boolean
  title: string
  subtitle: string
  icon: IconTypes
  secondIcon?: { icon: IconTypes, color: string}
  ctaTx?: TxKeyPath
  onToggle?: () => void
  onPress?: PressableProps["onPress"]
  onCtaPress?: () => void
}

export function ListItem({ title, ctaTx, subtitle, selected = false, withSwitch = false, icon, secondIcon, onPress, onToggle, onCtaPress }: ListItemProps) {
  return (
    <Pressable 
      accessible
      accessibilityLabel="pressable list item"
      accessibilityHint="pressable list item"
      accessibilityRole="button"
      style={$container} 
      onPress={onPress}
    >
      <View>
        <Icon icon={icon} size={24} color={colors.palette.neutral450} />
        {secondIcon && <Icon icon={secondIcon.icon} size={24} color={secondIcon.color} />}
      </View>
      <View style={$bodyContainer}>
        <View 
          accessible
          accessibilityLabel="list item body"
          accessibilityHint="list item body"
          accessibilityRole="text"
          style={$titleContainer}
        >
          <Text text={title} style={$titleText} ellipsizeMode='tail' numberOfLines={1} />
          <Text text={subtitle} style={$subtitleText} ellipsizeMode='tail' numberOfLines={1} />
          {Boolean(ctaTx) && <Pressable
            onPress={onCtaPress}
            style={{ marginTop: scale(10) }}
          >
            <Text tx={ctaTx} style={[$tip, { color: colors.palette.buttonBlue }]} />
          </Pressable>}
        </View>
          {withSwitch ? (<Toggle
              accessible
              accessibilityLabel="switch button"
              accessibilityHint="toggle location alerts"
              variant="switch" 
              value={selected}
              onValueChange={onToggle}
            />) : (<Icon icon="check" size={24} color={selected ? colors.palette.green : colors.palette.neutral550} />)
          }
      </View>
    </Pressable>
  )
}

const $container: ViewStyle = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  paddingTop: scale(16),
}

const $bodyContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  borderColor: colors.palette.neutral550,
  borderBottomWidth: scale(1),
  paddingBottom: scale(16),
  alignItems: "flex-start",
  marginLeft: scale(10),
}

const $titleContainer: ViewStyle = {
  flexDirection: "column",
  flex: 1
}

const $titleText: TextStyle = {
  width: "95%",
  fontFamily: typography.primary?.normal,
  fontSize: fontSizes[18],
  lineHeight: lineHeights[22],
  color: colors.palette.neutral100
}

const $subtitleText: TextStyle = {
  ...$titleText,
  fontSize: fontSizes[16],
  lineHeight: lineHeights[19],
  color: colors.palette.neutral100,
  paddingTop: scale(5)
}

const $tip: TextStyle = {
  color: colors.palette.neutral450,
  fontSize: fontSizes[18],
  fontFamily: typography.primary.light,
  lineHeight: lineHeights[22],
}
