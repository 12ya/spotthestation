/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { flow } from 'mobx-state-tree'
import Snackbar from 'react-native-snackbar'
import { api } from '../services/api'
import notifications from '../utils/notifications'

const RootStoreActions = (self) => ({
	getISSSightings: flow(function* getISSSightings(params) {
		try {
			const {
			  data, ok,
			} = yield api.getISSSightings(params)

      if (ok) {
        self.sightings = data
        notifications.cancelAllLocalNotifications()
        data.forEach(element => notifications.scheduleNotification(new Date(element.date)))
      } else {
        Snackbar.show({
          text: data as string,
          duration: Snackbar.LENGTH_LONG,
          action: {
            text: 'Dismiss',
            textColor: 'red',
            onPress: () => {
              Snackbar.dismiss()
            },
          },
        })
      }
		} catch (e) {
			console.error(e)
		}
	}),
})

export default RootStoreActions
