<template>
  <div>
    <upper></upper>
    <router-view/>
    <Apptext></Apptext>
    <Appfooter></Appfooter>
    </div>
</template>

<script>
import upper from './components/upper'
import Apptext from './components/Apptext'
import Appfooter from './components/Appfooter'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    upper,
    Apptext,
    Appfooter
  }
}
</script>

<style>

</style>
