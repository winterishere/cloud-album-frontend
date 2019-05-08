<template>
  <v-app>
    <Navigation/>
    <v-content>
      <HelloWorld/>
    </v-content>
    <v-footer dark>&copy; 2019 liks79 & ys.ahn</v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
  },
  data () {
    return {
      //
    }
  }
}
</script>
