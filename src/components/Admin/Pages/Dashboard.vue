<template >
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
         <form @submit.prevent="addProduct">
         <v-card>

        <v-toolbar dark class="info">
          <v-btn icon @click.native="dialog = false" dark>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>Products</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark  flat type="submit">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>*means required field</v-subheader>
              <v-card-text>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                      <v-text-field
                        name="title"
                        label="Product Title*"
                        id="name"
                        v-model="newProduct.name"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                      <v-text-field
                        name="description"
                        label="Description*"
                        id="productDescription"
                        v-model="newProduct.description"
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                   <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                      <v-text-field
                        name="price"
                        type="number"
                        label="Price*"
                        id="productPrice"
                        v-model="newProduct.price"
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
      </form>
            </v-dialog>
      </v-fab-transition>

        <h6>List of all Products</h6>
        <v-spacer></v-spacer>
        <v-text-field
          append-icon="search"
          label="Search"
          single-line
          hide-details
          v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table
          :headers="headers"
          :items="products"
          :search="search"
          v-bind:pagination.sync="pagination"
          :total-items="totalItems"
          class="elevation-1"
          >
            <template slot="items" scope="{ item }">
                <td>{{ item.name }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
                <td>
                  <v-btn fab dark small v-on:click="removeProduct(item)" class="red lighten-2">
                    <v-icon dark>remove</v-icon>
                  </v-btn>
                  <v-btn fab dark small class="teal lighten-2">
                    <v-icon dark>edit</v-icon>
                  </v-btn>
                </td>
            </template>
      <template slot="pageText" scope="{ pageStart, pageStop }">
        From {{ pageStart }} to {{ pageStop }}
      </template>
        </v-data-table>
   </v-card>
</template>



<script type="text/javascript">
  import * as firebase from 'firebase'
// import toastr from 'toastr'
  let config = {
   apiKey: 'AIzaSyAYfOatn8iACSAHw0yIc3dF4-3X9qJGSng',
      authDomain: 'webpro-d380d.firebaseapp.com',
      databaseURL: 'https://webpro-d380d.firebaseio.com',
      projectId: 'webpro-d380d',
      storageBucket: 'webpro-d380d.appspot.com',
      messagingSenderId: '631879884830'
  }

  let app = firebase.initializeApp(config);
  let db = app.database();
  let productRef = db.ref('products');
  export default {
    firebase:{
      products:productRef
    },
    data () {
      return {
        search: '',
        totalItems: 0,
        items: [],
        loading: true,
        pagination: {},
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        headers: [
          {
            text: 'Name',
            align: 'left',
            value: 'name',
           sortable: false
          },
          { text: 'Description',align: 'left',value: 'description' },
          { text: 'Price',align: 'left',value: 'price' }        ,
          { text: 'Actions',align: 'left',value: 'icon' }
        ],
            newProduct: {
            name: '',
            description: '',
            price: ''
        }
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
            resolve({
              items,
              total
            })
          }, 1000)
        })
      },
      addProduct: function () {
        productRef.push(this.newProduct);
        this.newProduct.name = '';
        this.newProduct.description = '';
        this.newProduct.price = '';
        // toastr.success('Product add successfully')
      },
      removeProduct: function (product) {
        productRef.child(product['.key']).remove()
        //  toastr.success('Product removeProduct successfully')
      }
    }
  }

</script>
