<template> 
  <div class="slider-desktop">
    <div class="content-container">  
      <div class="gallery-title">Przykładowe prace</div>    
      <div class="slider-thumbnails">        
        <div class="slider-thumbnails-grid">
          <div v-for="slide of slideList" 
              :key="slide"
              @click="changeMainSlide(slide.id)"
              :style="backgroundImg"
              class="grid-item"
              >
          </div>
        </div>
      </div>
      <img src="@/assets/gallery/gallery(2).jpg"/>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'SliderDesktop',
  props: ['slideList', 'mainSlide'],
  data() {
    return {
      publicPath: process.env.BASE_URL,
    }
  },
  methods: {
    changeMainSlide(id) {
      this.$emit('showSlide', id)
    },

  },
  computed: {
    backgroundImg() {     
      const bgurl = require(`@/assets/gallery/gallery(1).jpg`);
      console.log(bgurl)
      return `background: url(${bgurl});`
    }
  }
}
</script>

<style lang="scss" scoped>
  .gallery {
      &-title {
          width: 70%;
          display: block;
          float: right;
          padding: 15px;
          background-color: #E4E4E4;
          position: absolute;
          z-index: 5;
          right: 0;
          top: -20px;
      }
  }

  .slider-desktop {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    & .content-container {
      position: relative;
      height: 100%;
    }
  }

  .slider-thumbnails {
    width: 55%;
    float: right;
    height: 100%;
    padding: 40px 0px 10px 0px;

    &-grid {
      overflow-y: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      width: 100%;
      height: calc(100%);
      display: grid;
      grid-template-columns: 1fr 1fr 1fr ;

      @media(min-width: 980px ) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  .grid-item {
    width: 100%;
    cursor: pointer;
    padding-bottom: 100%;    
    background-size: cover;
  }
</style>