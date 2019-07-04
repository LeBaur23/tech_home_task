<template>
  <div class="home-page">
    <back_button></back_button>
    <div class="home-page_background">
      <img class="home-page_ellipse" src="/static/images/ellipse.svg" alt="">
      <div class="home-page_text">
        <h4>Who are you and  why you’re  standing here?</h4>
        <h5>It doesn't matter if you're building the next Facebook, or if you're the director of marketing for an industrial company.</h5>
      </div>
    </div>
    <div class="home-page_autor d-flex justify-content-between">
      <div class="home-page_autor-name">
        By Nicholas O'Brain
      </div>
      <div class="home-page_autor-time">
        28 July
      </div>
    </div>
    <div class="home-page-post-likes d-flex">
      <div class="home-page-post-likes_image" v-for="i in 3">
      </div>
    </div>
  </div>
</template>
