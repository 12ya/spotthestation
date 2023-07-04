/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { api } from "../../services/api"
import { getCurrentLocation, getNearbyPlaces, getPlaces } from "../geolocation"
import * as Location from "expo-location"

describe("getNearbyPlaces", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("returns an array of nearby places", async () => {
    const lng = 123.45
    const lat = 67.89
    const radius = 1000

    const mockResponse: any = {
      kind: "ok",
      places: [
        {
          geometry: {
            location: {
              lat: 67.89123,
              lng: 123.45678,
            },
          },
          name: "Place 1",
          vicinity: "Address 1",
        },
        {
          geometry: {
            location: {
              lat: 67.89123,
              lng: 123.45678,
            },
          },
          name: "Place 2",
          vicinity: "Address 2",
        },
      ],
    }

    ;(api.getPlaces as any).mockResolvedValue(mockResponse)

    const expectedPlaces = [
      {
        location: {
          lat: 67.89123,
          lng: 123.45678,
        },
        title: "Place 1",
        subtitle: "Address 1",
        alert: true,
      },
      {
        location: {
          lat: 67.89123,
          lng: 123.45678,
        },
        title: "Place 2",
        subtitle: "Address 2",
        alert: true,
      },
    ]

    const places = await getNearbyPlaces({ lng, lat }, radius)

    expect(api.getPlaces).toHaveBeenCalledWith(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=google`,
      "results",
    )
    expect(places).toEqual(expectedPlaces)
  })

  it('returns an empty array when API response is not "ok"', async () => {
    const lng = 123.45
    const lat = 67.89
    const radius = 1000

    const mockResponse = {
      kind: "error",
      message: "Something went wrong",
    }
    ;(api.getPlaces as any).mockResolvedValue(mockResponse)

    const places = await getNearbyPlaces({ lng, lat }, radius)

    expect(api.getPlaces).toHaveBeenCalledWith(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&key=google`,
      "results",
    )
    expect(places).toEqual([])
  })
})

describe("getPlaces", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("returns an array of places", async () => {
    const search = "New York"

    const mockResponse: any = {
      kind: "ok",
      places: [
        {
          geometry: {
            location: {
              lat: 40.712776,
              lng: -74.005974,
            },
          },
          name: "New York",
          formatted_address: "New York, NY, USA",
        },
      ],
    }

    ;(api.getPlaces as any).mockResolvedValue(mockResponse)

    const expectedPlaces = [
      {
        location: {
          lat: 40.712776,
          lng: -74.005974,
        },
        title: "New York",
        subtitle: "New York, NY, USA",
        alert: true,
        sightings: [],
      },
    ]

    const places = await getPlaces(search)

    expect(api.getPlaces).toHaveBeenCalledWith(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search.replaceAll(
        " ",
        "%20",
      )}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry&key=google`,
      "candidates",
    )
    expect(places).toEqual(expectedPlaces)
  })

  it('returns an empty array when API response is not "ok"', async () => {
    const search = "Invalid Place"

    const mockResponse: any = {
      kind: "error",
      message: "Place not found",
    }

    ;(api.getPlaces as any).mockResolvedValue(mockResponse)

    const places = await getPlaces(search)

    expect(api.getPlaces).toHaveBeenCalledWith(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search.replaceAll(
        " ",
        "%20",
      )}&inputtype=textquery&fields=formatted_address%2Cname%2Cgeometry&key=google`,
      "candidates",
    )
    expect(places).toEqual([])
  })
})

describe("getCurrentLocation", () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it("returns the current location", async () => {
    const permission = "granted"

    ;(Location as any).requestForegroundPermissionsAsync.mockResolvedValue({ status: permission })

    const coords = {
      latitude: 40.712776,
      longitude: -74.005974,
    }

    ;(Location as any).getCurrentPositionAsync.mockResolvedValue({ coords })

    const reverseGeocodeResponse = [
      {
        name: "New York",
        streetNumber: "123",
        street: "Main Street",
        city: "New York City",
        region: "New York",
        postalCode: "12345",
        country: "USA",
      },
    ]

    ;(Location as any).reverseGeocodeAsync.mockResolvedValue(reverseGeocodeResponse)

    const expectedLocation = {
      title: "New York",
      subtitle: "123 Main Street, New York City, New York 12345, USA",
      location: { lat: 40.712776, lng: -74.005974 },
      alert: false,
    }

    const location = await getCurrentLocation()

    expect((Location as any).requestForegroundPermissionsAsync).toHaveBeenCalled()
    expect((Location as any).getCurrentPositionAsync).toHaveBeenCalled()
    expect((Location as any).reverseGeocodeAsync).toHaveBeenCalledWith({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
    expect(location).toEqual(expectedLocation)
  })

  it("returns null when permission is not granted", async () => {
    const permission = "denied"

    ;(Location as any).requestForegroundPermissionsAsync.mockResolvedValue({ status: permission })

    const location = await getCurrentLocation()

    expect((Location as any).requestForegroundPermissionsAsync).toHaveBeenCalled()
    expect((Location as any).getCurrentPositionAsync).not.toHaveBeenCalled()
    expect((Location as any).reverseGeocodeAsync).not.toHaveBeenCalled()
    expect(location).toBeNull()
  })
})