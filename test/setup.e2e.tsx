jest.mock('react-native-dotenv', () => ({
  API_URL: 'https://backend.spotthestation.org',
}))

jest.mock('react-native-snackbar', () => ({
  show: () => ({}),
  dismiss: () => ({}),
  LENGTH_LONG: 'long',
}))

jest.mock('react-native-geolocation-service', () => ({
  requestAuthorization: jest.fn(),
  getCurrentPosition: jest.fn(),
}))

jest.mock("@react-native-async-storage/async-storage", () => ({}))

jest.mock("@notifee/react-native", () => ({
  createChannel: jest.fn(),
  requestPermission: jest.fn(),
  cancelTriggerNotifications: jest.fn(),
  createTriggerNotification: jest.fn(),
  TriggerType: { TIMESTAMP: 0 },
}))

jest.mock("@react-native-firebase/analytics", () => ({}))
