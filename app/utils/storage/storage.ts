import AsyncStorage from "@react-native-async-storage/async-storage"

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */

export enum KEYS {
  SOMETHING = "something",
  LOCALE = "locale",
  PREV_SYSTEM_LOCALE = "prevSystemLocale",
  UPCOMING = "upcoming",
  IS_SETTINGS_COMPLETED = "isSettingsCompleted",
  COACH_COMPLETED = "coachCompleted",
  SIGHTINGS_COACH_VISIBLE = "sightingsCoachVisible",
  MUTE_FROM = "muteFrom",
  MUTE_UNTIL = "muteUntil",
  NOTIFY_BEFORE = "notifyBefore",
  I_IS_VISIBLE = "iisVisible",
  IN_APP = "inApp",
  PRIVACY = "privacy",
  AR_COACH_COMPLETED = "arCoachCompleted",
  IS_PRIVACY_AGREE = "isPrivacyAgree",
  USER_ID = "userId",
  USER_CURRENT_LOCATION = "userCurrentLocation",
  ROOT_STATE_STORAGE_KEY = "root-v1",
}

export async function loadString(key: KEYS): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key)
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: KEYS, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: KEYS): Promise<any | null> {
  try {
    const almostThere = await AsyncStorage.getItem(key)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(almostThere)
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: KEYS, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: KEYS): Promise<void> {
  try {
    await AsyncStorage.removeItem(key)
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear()
  } catch {}
}
