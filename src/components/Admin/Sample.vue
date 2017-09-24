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
             <template v-for="link in links">

            <v-subheader v-if="link.header" v-text="link.header"></v-subheader>
            <v-divider v-else-if="link.divider" v-bind:inset="link.inset"></v-divider>
            <v-list-tile v-else v-bind:key="link.title" @click="" download>
                  <v-list-tile-action>
                  <v-icon>{{ link.icon }}</v-icon>
                  </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-html="link.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="link.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
      <!-- <template v-for="item in items">
         <v-subheader v-if='{{ item.header }}' v-text="item.header"></v-subheader>
         <v-divider></v-divider>
        <v-list-tile :key="item.title" @click="">
          <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </template> -->
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
        <span v-tooltip:bottom="{ 'html': props.header.text }">
          {{ props.header.text }}
        </span>
      </template>
      <template slot="items" scope="props">
        <td>{{ props.item.name }}</td>
        <td  class="text-xs-right">{{ props.item.calories }}</td>
        <td  class="text-xs-right">{{ props.item.fat }}</td>
        <td  class="text-xs-right">{{ props.item.carbs }}</td>
        <td  class="text-xs-right">{{ props.item.protein }}</td>
        <td  class="text-xs-right">{{ props.item.sodium }}</td>
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
  export default {
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        drawer: true,
        links: [
          { header: 'Admin' },
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        search: '',
        totalItems: 0,
        item: [],
        loading: true,
        pagination: {},
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Sodium (mg)', value: 'sodium' }
        ],
        mini: false,
        right: null
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.items = data.items
              this.totalItems = data.total
            })
        },
        deep: true
      }
    },
    mounted () {
      this.getDataFromApi()
        .then(data => {
          this.items = data.items
          this.totalItems = data.total
        })
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination

          let items = this.getDesserts()
          const total = items.length

          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 1000)
        })
      },
      getDesserts () {
        return [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            sodium: 129
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            sodium: 337
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            sodium: 413
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            sodium: 327
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            sodium: 50
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            sodium: 38
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            sodium: 562
          }
        ]
      }
    }
  }
</script>
<style type="text/css">
  .fixedscroll{position: fixed;}
</style>