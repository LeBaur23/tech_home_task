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
      <vc-donut class="mt-5"
        background="#161823" foreground="#0E0F1A"
        :size="200" unit="px" :thickness="20"
        :sections="sections" :total="100"
        :start-angle="0"
        @section-click="handleSectionClick"
      >
        <h1 style="color: white;line-height: 30px" class="m-0">
          $420 <br>
          <span style="font-size: 16px;color: #acacac">
            balance
          </span>
        </h1>
      </vc-donut>
      <transition name="fade">
        <div class="statistic-page_info mt-3" v-if="changed_statistic">
          <h2 class="m-0 text-center" style="color: white">
            {{ clicked_info }}
          </h2>
          <h4 class="text-center mt-2">for resturants</h4>
        </div>
      </transition>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sections: [
          { label: 'Red section', value: 15, price: '70',color: '#8D4DE8' },
          { label: 'Green section', value: 20, price: '150',color: '#FACE15' },
          { label: 'Blue section', value: 55, price: '200' , color: '#56B2BA' }
        ],
        clicked_info: '',
        changed_statistic: true,
      };
    },
    methods: {
      handleSectionClick: function (section) {
        this.clicked_info = `$${section.price}`;
        this.changed_statistic = false;
        setTimeout(() => {
          this.changed_statistic = true;
        }, 200);
      }
    },
    mounted () {
    }
  }
</script>
