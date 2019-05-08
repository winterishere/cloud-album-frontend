<template>
  <div>
    <component :is='whichOne'></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    'Album': () => import('../views/Album'),
    'Login': () => import('../components/Login')
  },
  computed: {
    ...mapGetters(['getIsAuth']),
    whichOne () {
      return (this.getIsAuth === false ? 'Login' : 'Album')
    }
  }
}
</script>
