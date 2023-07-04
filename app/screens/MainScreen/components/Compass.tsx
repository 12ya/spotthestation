/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from "react"
import { View, Text, Image, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon } from "../../../components"
import { colors, scale } from "../../../theme"
import { normalizeHeading, isInHeadingRange, headingOffset } from "../../../utils/geometry"
import watchHeading from "../../../utils/heading"

const compassLine = require("../../../../assets/icons/compass-line.png")

const LINE_LENGTH = 260
const LETTER_OFFSET = 10

type CompassProps = {
  issPosition: number
  isFullScreen: boolean
}

export const Compass = ({ issPosition, isFullScreen }: CompassProps) => {
  const topInset = useSafeAreaInsets().top
  const [heading, setHeading] = useState<number>(null)

  const left = normalizeHeading(heading - 45)
  const right = normalizeHeading(heading + 45)

  const letterPositions = [
    { letter: "N", offset: 0 },
    { letter: "E", offset: 90 },
    { letter: "S", offset: 180 },
    { letter: "W", offset: 270 },
  ].filter((letter) => isInHeadingRange(left, right, letter.offset))

  useEffect(() => {
    const unsub = watchHeading(setHeading)
    return () => unsub()
  }, [])

  const issVisible = isInHeadingRange(left, right, issPosition)

  return (
    <View style={[$container, { marginTop: isFullScreen ? topInset + scale(24) : 0 }]}>
      <Image source={compassLine} style={$line} />
      {issVisible && (
        <Icon
          icon="iss"
          size={36}
          containerStyle={[
            $issIcon,
            { marginLeft: (headingOffset(left, issPosition) / 90) * LINE_LENGTH },
          ]}
        />
      )}
      <View style={$lettersContainer}>
        {letterPositions.map(({ letter, offset }) => {
          const letterPosition = (headingOffset(left, offset) / 90) * LINE_LENGTH
          return (
            <View key={letter} style={[$letterContainer, { marginLeft: letterPosition }]}>
              <Text key={letter} style={$letter}>
                {letter}
              </Text>
              <View style={$verticalLine} />
            </View>
          )
        })}
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  height: scale(20),
  width: LINE_LENGTH,
}

const $issIcon: ViewStyle = {
  bottom: -scale(16),
  position: "absolute",
}

const $letter: TextStyle = {
  color: colors.palette.neutral100,
  marginBottom: scale(5),
  textAlign: "left",
}

const $letterContainer: ViewStyle = {
  alignItems: "center",
  marginBottom: scale(2),
}

const $lettersContainer: ViewStyle = {
  bottom: -scale(10),
  flexDirection: "row",
  height: "auto",
  left: 0,
  marginTop: -LETTER_OFFSET,
}

const $line: ImageStyle = {
  bottom: 0,
  left: 0,
  position: "absolute",
  width: LINE_LENGTH,
}

const $verticalLine: ViewStyle = {
  borderColor: colors.palette.neutral100,
  borderWidth: scale(1),
  height: scale(6),
  width: scale(1),
}
