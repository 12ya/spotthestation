import { useEffect, useState } from "react"
import { OrbitPoint } from "../services/api"

export function useISSPosition(issData: OrbitPoint[]) {
  const [currentPosition, setCurrentPosition] = useState<OrbitPoint>(null)

  useEffect(() => {
    if (!issData) {
      setCurrentPosition(null)
      return undefined
    }

    const interpolate = (t: number, p1: number, p2: number) => (p2 - p1) * t + p1
    const interpolateLongitude = (t: number, p1: number, p2: number) => {
      if (p1 > 90 && p1 <= 180 && p2 >= -180 && p2 < -90) {
        const res = interpolate(t, p1, p2 + 360)
        return res > 180 ? res - 360 : res
      }

      if (p2 > 90 && p2 <= 180 && p1 >= -180 && p1 < -90) {
        const res = interpolate(t, p1 + 360, p2)
        return res > 180 ? res - 360 : res
      }

      return interpolate(t, p1, p2)
    }

    const interpolateAzimuth = (t: number, p1: number, p2: number) => {
      if (p1 > 270 && p1 <= 360 && p2 >= 0 && p2 < 90) {
        const res = interpolate(t, p1 - 360, p2)
        return res < 0 ? 360 + res : res
      }

      if (p2 > 270 && p2 <= 360 && p1 >= 0 && p1 < 90) {
        const res = interpolate(t, p1, p2 - 360)
        return res < 0 ? 360 + res : res
      }

      return interpolate(t, p1, p2)
    }

    let currentIdx = 0
    const update = () => {
      if (!issData.length) return
      for (; currentIdx < issData.length; ++currentIdx) {
        if (new Date().valueOf() < new Date(issData[currentIdx].date).valueOf()) break
      }

      if (currentIdx < 1 || currentIdx >= issData.length) return

      const pt1 = issData[currentIdx - 1]
      const pt2 = issData[currentIdx]
      const t =
        (Date.now() - new Date(pt1.date).valueOf()) /
        (new Date(pt2.date).valueOf() - new Date(pt1.date).valueOf())

      setCurrentPosition({
        altitude: interpolate(t, pt1.altitude, pt2.altitude),
        latitude: interpolate(t, pt1.latitude, pt2.latitude),
        longitude: interpolateLongitude(t, pt1.longitude, pt2.longitude),
        elevation: interpolate(t, pt1.elevation, pt2.elevation),
        azimuth: interpolateAzimuth(t, pt1.azimuth, pt2.azimuth),
        date: new Date().toDateString(),
      })
    }
    update()

    const timeout = setInterval(update, 1000)
    return () => {
      clearInterval(timeout)
    }
  }, [issData])

  return currentPosition
}
