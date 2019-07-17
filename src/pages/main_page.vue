<template>
  <div class="main-page">
    <transition
    name="slide"
    mode="out-in"
    >
      <router-view/>
    </transition>
    <div class="main-page-footer">
      <router-link :to="{path: '/'}">
        <chocomart-icon :icon="'home'" :color="this.$route.path === '/' ? 'white' : ''" :font_size="'25px'" ></chocomart-icon>
      </router-link>
      <router-link :to="{name: 'statistic_page'}">
        <chocomart-icon :icon="'gallery'" :color="this.$route.path === '/statistic' ? 'white' : ''" :font_size="'25px'"></chocomart-icon>
      </router-link>
      <chocomart-icon :icon="'bell'"  :font_size="'25px'"></chocomart-icon>
      <chocomart-icon :icon="'mark'"  :font_size="'25px'"></chocomart-icon>
      <router-link :to="{name: 'account_page'}">
        <chocomart-icon :icon="'avatar'" :color="this.$route.path === '/account' ? 'white' : ''" :font_size="'25px'"></chocomart-icon>
      </router-link>


    </div>
  </div>
</template>
<script>
  export default {
    mounted () {
//      console.log(this.$route);
    }
  }
</script>
