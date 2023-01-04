import * as Location from "expo-location"
import { Point } from "react-native-google-places-autocomplete"
import Config from "../config"
import { LocationType } from "../screens/OnboardingScreen/SignupLocation"
import { api } from "../services/api"

export const getCurrentLocation = async (alert?: () => void): Promise<LocationType> => {
  const { status: permission } = await Location.requestForegroundPermissionsAsync()

  if (permission !== 'granted') {
    alert()
  }

  const { coords } = await Location.getCurrentPositionAsync()

  if (coords) {
    const { latitude, longitude } = coords
    const response = await Location.reverseGeocodeAsync({
      latitude,
      longitude
    })

    const item = response[0]

    const address = `${item.street}, ${item.postalCode}, ${item.city}`

    return { title: item.name, subtitle: address, location: {lat: latitude, lng: longitude}}
  }

  return null
}

export const getNearbyPlaces = async ({ lng, lat }: Point, radius: number): Promise<LocationType[]> => {
  const places: LocationType[] = []
  const res = await api.getPlaces(`
    https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=${Config.GOOGLE_API_TOKEN}`,
    "results"
  )

  if (res.kind === "ok") {
    for (const googlePlace of res.places) {
      places.push({ location: googlePlace.geometry.location, title: googlePlace.name, subtitle: googlePlace.vicinity })
    }
  }

  return places
}

export const getPlaces = async (search: string): Promise<LocationType[]> => {
  const places: LocationType[] = []
  const res = await api.getPlaces(`
    https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry&key=${Config.GOOGLE_API_TOKEN}`,
    "candidates"
  ) 

  if (res.kind === "ok") {
    for (const googlePlace of res.places) {
      places.push({ location: googlePlace.geometry.location, title: googlePlace.name, subtitle: googlePlace.formatted_address })
    }
  }

  return places
}
