<template>
  <v-layout mt-4>
    <v-flex xs12 sm8 offset-sm2>
      <v-card class ="elevation-40">
        <v-card-media src="https://vuetifyjs.com/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-text primary-text>
          <div>
            <h3 class="headline mb-0 text-md-center">Kangaroo Valley Safari</h3>
            <v-avatar
            size="40"
          color="grey lighten-4"
        >
          <img src="https://vuetifyjs.com/static/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
            <div >Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
 </v-layout>
</template>
