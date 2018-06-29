<template>
  <v-toolbar color="indigo" dark>
    <v-menu offset-y>
       <v-btn flat slot="activator" >
      <v-icon > dashboard</v-icon></v-btn>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <!-- <v-toolbar-side-icon ></v-toolbar-side-icon> -->
    <router-link to="/">
      <v-toolbar-title class="white--text">Dashboard</v-toolbar-title>
      </router-link>
    
    <v-spacer></v-spacer>

     <v-badge right>
      <span slot="badge">6</span>
      <v-icon  color="red"> account_box</v-icon>
    </v-badge>

    <div class="hidden-sm-and-down">
      <router-link to="/form">
       <v-btn flat>Register</v-btn>
      </router-link>
      <router-link to="/Contact">
       <v-btn flat>Contact</v-btn>
      </router-link>
      <router-link to="/Login">
       <v-btn flat>Login</v-btn>
      </router-link>
      
       </div>

       
   <div class="hidden-md-and-up">
 <v-navigation-drawer permanent>
  <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  </div>
  </v-toolbar>
</template>

<script>
 export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' },
          { title: 'gallery', icon: 'question_answer' },
          { title: 'users', icon: 'question_answer' }
        ],
       
        right: null,
      }
    }
  }
</script>

<style>

</style>
