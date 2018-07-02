<template>
<div class = "md-text-center">
  <h1>Login</h1>
<v-container>
<v-form @submit.prevent="submit">

<v-alert :value="alert" type="warning" color="lime">
      Please enter email and password.
    </v-alert>

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="Password"
       label="Password"
       type="password"
       required
       >
       </v-text-field>
     <v-btn color="green" type="Submit">Submit</v-btn>
     </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      Password: null,
      alert: false
    }
  },
  methods: {
    submit () {
      if (!this.email && !this.Password) {
        this.alert = true
      }
      console.log(`${this.email} and ${this.password}`)
    }
  }
}
</script>
