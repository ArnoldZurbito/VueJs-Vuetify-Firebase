<template>
  <v-app id="example-2" toolbar footer>
 <v-navigation-drawer v-model clipped enable-resize-watcher  class="fixedscroll"  absolute persistent light :mini-variant.sync="mini" v-model="drawer" overflow>
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
            <v-list-tile v-ripple="{ class: 'blue--text' }" v-else v-bind:key="item.title" :to="item.link" download>
                  <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"> {{ item.link }}</v-list-tile-title>
                <!-- <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title> -->
              </v-list-tile-content>
            </v-list-tile>
          </template>
      </v-list>

    </v-navigation-drawer>
 <v-toolbar class="blue darken-2" dark card fixed>
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
  ITECHTRON
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-menu
        transition="slide-y-transition"
        bottom nudge-bottom open-on-click full-width>
            <v-btn icon slot="activator" dark>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile  v-for="item in items" :key="item.title" @click="">
                      <v-icon small class="blue--text text--darken-2" right dark> {{item.icon}}</v-icon>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
        <main>
         <v-container fluid class="pa-0">
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
          </v-container>
        </main>

  <v-footer class="indigo lighten-3">
      <span class="white--text">© 2017 - All Rights Reserved</span>
    </v-footer>
  </v-app>
</template>
<script>


export default {
  data () {
    return {
        drawer: true,
        search: '',
        totalItems: 0,
        loading: true,
        pagination: {},
        menuItems: [
          { header: 'Admin' },
          { title: 'Dashboard', router: true, icon: 'dashboard', link: '/admin/dashboard' },
          { title: 'Inbox', router: true, icon: 'question_answer', link: '/admin/inbox' },
          { title: 'User', router: true, icon: 'question_answer', link: '/admin/user' }
        ],
        items: [
          { title: 'Settings', icon: 'settings' },
          { title: 'Profile',  icon:'face' },
          { title: 'Logout',   icon:'exit_to_app' }
        ],
        mini: false,
        right: null}
  }
}


</script>
<style type="text/css">
   .fixedscroll{position: fixed;}
</style>
