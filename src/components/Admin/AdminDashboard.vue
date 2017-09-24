

<template>
  <v-app id="example-2" toolbar>
 <v-navigation-drawer class="fixedscroll" enable-resize-watcher persistent fixed light :mini-variant.sync="mini" v-model="drawer" floating temporary overflow>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAvfAAAAJDk2MTBiNGQyLTUzMjgtNGU4Ny04NjNhLTQ1NjNhNjVjYzU1ZQ.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Arnold Zurbito</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
            <v-divider></v-divider>
             <template v-for="item in menuItems">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile v-else v-bind:key="item.title" :to="item.link" download>
                  <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"> {{ item.link }}</v-list-tile-title>
                <!-- <v-list-tile-sub-title v-html="link.subtitle"></v-list-tile-sub-title> -->
              </v-list-tile-content>
            </v-list-tile>
          </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="blue darken-2" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>ITECHTRON</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <template>
        <v-card>

    <v-card-title>
      <v-fab-transition>
        <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-btn
          slot="activator"
          class="info"
          dark
          absolute
          top
          right
          fab
          v-show="!hidden"
        >
          <v-icon>add</v-icon>
        </v-btn>
         <v-card>
        <v-toolbar dark class="info">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Products</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>*means required field</v-subheader>
    <v-card-text>
      <v-container fluid>
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="input-1"
              label="Name*"
              id="name"
            ></v-text-field>
          </v-flex>
        </v-layout>
                <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-text-field
              name="input-1"
              label="Email*"
              id=""
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>


        </v-list>
        <v-divider></v-divider>
        <v-list three-line subheader>
          <v-subheader>General</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Sound</v-list-tile-title>
              <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Auto-add widgets</v-list-tile-title>
              <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
            </v-dialog>
      </v-fab-transition>


      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="search"
        label="Search"
        single-line
        hide-details
        v-model="search"
      ></v-text-field>
    </v-card-title>
  <div>
    <v-data-table
      v-bind:headers="headers"
      v-bind:items="items"
      v-bind:search="search"
      v-bind:pagination.sync="pagination"
      :total-items="totalItems"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="headerCell" scope="props">
   <!--      <span v-tooltip:bottom="{ 'html': props.header.text }">
          {{ props.header.text }}
        </span> -->
      </template>
      <template slot="items" scope="props">
      <tr v-for="meetup in meetups">
      <td>{{ meetup.title }}</td>
        <td  class="text-xs-right">{{ meetup.description }}</td>
        </tr>
<!--         <td>{{ props.item.name }}</td>
        <td  class="text-xs-right">{{ props.item.calories }}</td>
        <td  class="text-xs-right">{{ props.item.fat }}</td>
        <td  class="text-xs-right">{{ props.item.carbs }}</td>
        <td  class="text-xs-right">{{ props.item.protein }}</td>
        <td  class="text-xs-right">{{ props.item.sodium }}</td> -->
      </template>
    </v-data-table>
  </div>
  </v-card>
</template>
      </v-container>
    </main>
  </v-app>
</template>
<script>

import * as firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyAYfOatn8iACSAHw0yIc3dF4-3X9qJGSng',
  authDomain: 'webpro-d380d.firebaseapp.com',
  databaseURL: 'https://webpro-d380d.firebaseio.com',
  projectId: 'webpro-d380d',
  storageBucket: 'webpro-d380d.appspot.com',
  messagingSenderId: '631879884830'
}
let app = firebase.initializeApp(config)
let db = app.database()
let meetupsRef = db.ref('meetups')

export default {
  name: 'app',
  firebase: {
    meetups: meetupsRef
  },
  data () {
    return {
        drawer: true,
        search: '',
        totalItems: 0,
        items: [],
        loading: true,
        pagination: {},
        menuItems: [
          { header: 'Admin' },
          { title: 'Dashboard', icon: 'dashboard', link: '/admin/dashboard' },
          { title: 'Inbox', icon: 'question_answer', link: '/admin/inbox' },
          { title: 'User', icon: 'question_answer', link: '/admin/user' }
        ],
        mini: false,
        right: null}
  }
}

</script>
<style type="text/css">
  .fixedscroll{position: fixed;}
</style>