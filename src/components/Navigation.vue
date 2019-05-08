<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/list">
        <span class="font-weight-light">CLOUD ALBUM</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat>
      <span class="mr-2">Hello userID</span>
    </v-btn>
    <v-btn flat>
      <router-link to="/search">
        <span class="mr-2">Search</span>
      </router-link>
    </v-btn>
    <v-btn flat>
      <router-link to="/map">
        <span class="mr-2">Map</span>
      </router-link>
    </v-btn>
    <v-btn flat>
      <router-link to="/upload">
        <span class="mr-2">Upload</span>
      </router-link>
    </v-btn>
    <v-btn flat>
      <span class="mr-2">Sign Out</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>

</style>
