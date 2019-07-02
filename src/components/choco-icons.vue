<template>
  <div class="choco-icon">
    <div class="choco-icon-svg-wrapper">
      <div class="choco-icon__svg" :class="{category : category !== undefined}" :style="{'color': color,'fontSize': font_size }" v-html="svg_tags">
      </div>
      <div v-if="counted !== undefined" class="choco-icon_counter" :class="counted">
        <h4 class="m-0">{{count}}</h4>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import icons from '../choco-icons'
  export default {
    props: ['color', 'font_size', 'icon', 'counted', 'width', 'count', 'category'],
    data() {
      return {
        svg_tags: '',
        icon_url: ''
      }
    },
    beforeMount () {
      let path_to_file = ''
      if (this.category === undefined) {
        this.icon_url = icons
        path_to_file = this.icon_url[this.icon]
      }
      else {
        path_to_file = this.category
      }
      let svg_icon = ''
      function readTextFile(file)
      {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
          if(rawFile.readyState === 4)
          {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
              let allText = rawFile.responseText;
              svg_icon = allText
            }
          }
        };
        rawFile.send(null);
      }
      readTextFile(path_to_file)
      this.svg_tags = svg_icon
    }
  }
</script>
