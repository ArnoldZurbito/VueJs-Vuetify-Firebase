<template>
    <main>
      <section>
              <v-parallax class="webpage" height="600" >
                <v-layout
                  column
                  align-center
                  justify-center>
                  <img src="../assets/vuetify.png" alt="Vuetify.js">
                  <h1 class="white--text mb-2 display-3 text-xs-center">Need an Automated or Online System?</h1>
                  <div class="headline mb-3 text-xs-center">Powered by Itectron</div>
                  <v-btn
                    class="blue lighten-2 mt-5"
                    dark
                    large
                   router to="/home"
                  >
                    Get Started
                  </v-btn>
                </v-layout>
              </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">Save time and increase your company's revenue. Use the online system for your company.</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Awesome Design</div>
                    </v-card-title>
                    <v-card-text>
                      Facebook integration allows your guests to book direct from your Facebook page.
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast Transaction</div>
                    </v-card-title>
                    <v-card-text>
                      Say goodbye to manual updates. Itechtron saves you time with two-way integrations with all the important booking sites and automatically keeps your availability and bookings up-to-date.Allow to pay your customer via online or cash directly to your pocket.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>

      <section>
        <v-parallax src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg" height="380">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/admin/dashboard"
            >
              Learn More About Itechtron
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Developer info</div>
                </v-card-title>
                <v-card-text>
                  I'm a web developer/desktop app developer from Philippines, working as a freelancer.I build things with PHP, JavaScript and CSS. Specifically, Laravel, Vue.js and some occasional C# and VB.Net. I enjoy learning other frameworks, libraries and languages. Even if I don't plan on using something in the near future, research and experimentation with a foreign concept can serve as a great inspiration to solve problems in my familiar tech stack. I love helping other people on their problem that's why I'am here to solve your problem.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  If there are any suggestions and comments within our system feel free and don't hesitate to contact me on the details below. I make sure that all of that will answer immediately. Hoping for my immediate response. Thank you for your support.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>+63909-506-3177</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Muntinlupa, Philippines</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>knorhamz21z@gmail.com</v-list-tile-title>
 

                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>


      <v-footer class="blue darken-2">
        <v-layout row wrap align-center>
          <v-flex xs12>
            <div class="white--text ml-3">
              Made with
              <v-icon class="red--text">favorite</v-icon>
              by <a class="white--text" href="https://it.com" target="_blank">Arnold Zurbito</a>
            </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </main>

 </template>
 <style type="text/css">
   .webpage{
  background: linear-gradient(#004092, #020202, transparent)
  ,url("../assets/plane.jpg"); 
  background-size: cover;
  z-index: 1;
  -webkit-box-shadow: 10px 40px 18px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 18px 10px rgba(0,0,0,0.75);
box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.75);
}
 </style>