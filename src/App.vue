<template>
  <div id="app">

    <!--<transition-->
      <!--name="slide"-->
      <!--mode="out-in"-->
    <!--&gt;-->
      <router-view/>
    <!--</transition>-->

  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
//    imagine that user signed and we add data of user to localStorage
    let userData = {
      'user_img': 'https://www.picclickimg.com/d/l400/pict/253948343876_/Deadpool-Logo-Marvel-Comics-Superhero-Bumper-Sticker-Vinyl.jpg',
      'user_nick': 'King',
      'user_name': 'Lebron',
      'user_surname': 'James',
      'user_cash': '1500',
      'user_bonus': '200'
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  }
}
</script>
