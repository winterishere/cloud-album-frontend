<template>
  <v-app>
    <Navigation/>
    <v-content>
      <Home/>
    </v-content>
    <v-footer dark>&copy; 2019 liks79 & ys.ahn</v-footer>
  </v-app>
</template>

<script>
import Home from './views/Home'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Home,
    Navigation
  }
}
</script>
