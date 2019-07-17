<template>
  <div class="account_page">
    <div class="account_img">
      <img class="w-100" :src="userData.user_img" alt="">
    </div>
    <div v-show="auth">
      <div class="account_nick d-flex justify-content-between align-items-center">
        <h4>Nickname:</h4>
        <h4 v-if="!nick" @click="changeInput('nick')">{{ userData.user_nick }}</h4>
        <input v-show="nick" id="nick" v-on:blur="saveChanges('nick')" type="text" v-model="userData.user_nick">
      </div>
      <div class="account_name d-flex justify-content-between align-items-center">
        <h4>Name:</h4>
        <h4 v-if="!name" @click="changeInput('name')"> {{ userData.user_name }}</h4>
        <input v-show="name" id="name"  v-on:blur="saveChanges('name')" type="text" v-model="userData.user_name">
      </div>
      <div class="account_surname d-flex justify-content-between align-items-center">
        <h4>Surname:</h4>
        <h4 v-if="!surname" @click="changeInput('surname')"> {{ userData.user_surname }}</h4>
        <input v-show="surname" id="surname" type="text" v-on:blur="saveChanges('surname')" v-model="userData.user_surname">
      </div>
      <div class="account_cash d-flex justify-content-between">
        <h4>Cash:</h4>
        <h4> {{ userData.user_cash }} $</h4>
      </div>
      <div class="account_bonus d-flex justify-content-between">
        <h4>Bonus:</h4>
        <h4> {{ userData.user_bonus }} $</h4>
      </div>
      <button @click="clearStorage()">Logout</button>
    </div>
    <div v-show="!auth">
      <h4 class="text-center">You must log in</h4>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        nick: false,
        name: false,
        surname: false,
        userData: {},
        auth: false,
      }
    },
    watch: {
      userData: function (val) {
        if (Object.keys(val).length === 0) {
          this.auth = false
//          this.$router.push('/')
        }
      }
    },
    methods: {
      clearStorage () {
        this.$clearStorage();
        this.userData = {}
      },
      changeInput (data) {
        if (data === 'nick') {
          this.nick = true;
          setTimeout(() => {document.getElementById(data).focus();}, 100)
        } else if (data === 'name') {
          this.name = true;
          setTimeout(() => {document.getElementById(data).focus();}, 100)
        } else if (data === 'surname') {
          this.surname = true;
          setTimeout(() => {document.getElementById(data).focus();}, 100)
        }
      },
      saveChanges (data) {
        if (data === 'nick') {
          this.nick = false;
        } else if (data === 'name') {
          this.name = false;
        }else if (data === 'surname') {
          this.name = false;
        }
        this.$changeSotrage('userData', this.userData);

      }
    },
    beforeMount () {
      let userInfo = JSON.parse(localStorage.getItem('userData'));
      console.log(userInfo);
      if (userInfo === null) {
        this.auth = false;
//        this.$router.push('/')
      } else {
        this.userData = userInfo;
        this.auth = true;
      }
    }
  }
</script>
