<template>
 <div>
  <v-layout mt-5>
    <v-flex xs10 sm8 offset-sm2>
      <v-card>
        <v-container fluid>
          <v-form @submit.prevent="submit">
          <v-text-field
      v-model="user.Username"
      color="black"
      label="Username" placeholder="Enter your name" loading>
     </v-text-field>
     <v-text-field
      v-model="user.email"
      color="black"
      label="Email" placeholder="Enter your email" loading>
      </v-text-field>
      <v-text-field v-model="user.password"
      color="black"
      label="Password"  type="password" placeholder="Enter your password" loading>
      </v-text-field>

     <v-btn color="green" type="Submit">Submit</v-btn>
          </v-form>
  </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        Username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(`${this.user.Username} and ${this.user.email} and  ${this.user.password}`)
    }
  }
}
</script>
