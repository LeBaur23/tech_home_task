<template>
  <div class="statistic-page">
    <back_button></back_button>
    <div class="statistic-page-header d-flex justify-content-center align-items-center">
      <h4 class="text-center mr-3 ">Statisitc
      </h4>
      <chocomart-icon :icon="'gallery'" :color="this.$route.path === '/statistic' ? 'white' : ''" :font_size="'25px'"></chocomart-icon>
    </div>
    <div class="statistic-page-months d-flex">
      <div class="statistic-page-month statistic-page-month__active">June</div>
      <div class="statistic-page-month" v-for="i in 11">June</div>
    </div>
    <div class="statistic-page-diagram">

    </div>
  </div>
</template>
