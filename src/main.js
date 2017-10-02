import Vue from 'vue'
import Vuetify from 'vuetify'
// import VueFire from 'vuefire'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog.vue'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog.vue'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog.vue'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog.vue'
// Vue.use(VueFire)
Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  root: '/',
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAYfOatn8iACSAHw0yIc3dF4-3X9qJGSng',
      authDomain: 'webpro-d380d.firebaseapp.com',
      databaseURL: 'https://webpro-d380d.firebaseio.com',
      projectId: 'webpro-d380d',
      storageBucket: 'webpro-d380d.appspot.com',
      messagingSenderId: '631879884830'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
        this.$store.dispatch('fetchUserData')
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})
