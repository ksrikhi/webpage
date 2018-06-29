<template>
  <v-layout mt-5>
    <v-flex xs10 sm8 offset-sm2>
      <v-card>
        <v-container fluid>
          <v-text-field
      v-model="value"
      color="black"
      label="Username"
      placeholder="Enter your name" 
      loading
    >
      <v-progress-linear
        v-if="custom"
        slot="progress"
        :value="progress"
        :color="color"
        height="7"
      ></v-progress-linear>
        </v-text-field>

        <v-text-field
      v-model="value"
      color="black"
      label="Email"
      placeholder="Enter your email"
      loading
    >
      <v-progress-linear
        v-if="custom"
        slot="progress"
        :value="progress"
        :color="color"
        height="7"
      ></v-progress-linear>
        </v-text-field>

        <v-text-field 
      v-model="value"
      color="black"
     label="Password" 
      placeholder="Enter your pasdsword"
      loading
    >
      <v-progress-linear
        v-if="custom"
        slot="progress"
        :value="progress"
        :color="color"
        height="7"
      ></v-progress-linear>
        </v-text-field>
     <v-btn color="green" type="Submit">Submit</v-btn>
  </v-container>
     
      </v-card>
    </v-flex>
  </v-layout>
</template>
