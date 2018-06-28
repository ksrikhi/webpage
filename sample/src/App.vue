<template>
  <div>
    <upper></upper>
    <router-view/>
    <Appfooter></Appfooter>
    
  </div>
</template>

<script>
import upper from './components/upper'
import Appfooter from './components/Appfooter'
import Apphome from '@/components/Apphome'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    upper,
    Appfooter
  }
}
</script>

<style>

</style>
