/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { CompositeScreenProps } from "@react-navigation/native"
import React from "react"
import { TextStyle, ViewStyle } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Icon, Text } from "../components"
import { ISSNowScreen, HomeScreen } from "../screens"
import { colors, spacing, typography } from "../theme"
import { AppStackParamList, AppStackScreenProps } from "./AppNavigator"

export type TabParamList = {
  Home: undefined
  SkyView: undefined
  ISSNow: undefined
  Resources: undefined
  Account: undefined
}

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>

const Tab = createBottomTabNavigator<TabParamList>()

export function TabNavigator() {
  const { bottom } = useSafeAreaInsets()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.palette.neutral100,
        tabBarStyle: [$tabBar, { height: bottom + 70 }],
        tabBarLabelStyle: $tabBarLabel,
        tabBarItemStyle: $tabBarItem,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.homeTab" style={{ color: focused ? color : "transparent" }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="SkyView"
        component={ISSNowScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.skyViewTab" style={{ color: focused ? color : "transparent" }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="globe" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="ISSNow"
        component={ISSNowScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.issNowTab" style={{ color: focused ? color : "transparent" }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="tv" color={ color } size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={ISSNowScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.resourcesTab" style={{ color: focused ? color : "transparent" }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="book" color={ color } size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={ISSNowScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text tx="tabNavigator.accountTab" style={{ color: focused ? color : "transparent" }} />
          ),
          tabBarIcon: ({ color, size }) => (
            <Icon icon="user" color={ color } size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const $tabBar: ViewStyle = {
  backgroundColor: colors.backgroundDark,
  borderTopColor: colors.transparent,
}

const $tabBarItem: ViewStyle = {
  paddingTop: spacing.small,
}

const $tabBarLabel: TextStyle = {
  fontSize: 12,
  fontFamily: typography.primary.medium,
  lineHeight: 16,
  flex: 1,
}