<template>
  <div class="main-page">
    Main Page
    <router-view/>
    <div class="main-page-footer">
      <chocomart-icon :icon="'avatar'" :color="'white'" :font_size="'25px'"></chocomart-icon>
      <chocomart-icon :icon="'gallery'" :color="'white'" :font_size="'25px'"></chocomart-icon>
      <chocomart-icon :icon="'bell'" :color="'white'" :font_size="'25px'"></chocomart-icon>
      <chocomart-icon :icon="'mark'" :color="'white'" :font_size="'25px'"></chocomart-icon>
      <chocomart-icon :icon="'home'" :color="'white'" :font_size="'25px'"></chocomart-icon>
      <!--test-->
    </div>
  </div>
</template>
