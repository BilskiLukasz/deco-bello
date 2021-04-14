<template> 
  <div class="slider-desktop">
    <div class="content-container"> 
            
      <div class="gallery-title">Przykładowe prace</div>    
      <div class="slider-thumbnails">        
        <div class="slider-thumbnails-grid">
          <div v-for="slide of slideList" 
              :key="slide"
              @click="changeMainSlide(slide.id)"
              :style="backgroundImg(slide.bg)"
              class="grid-item"
              >
          </div>
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'SliderDesktop',
  props: ['slideList', 'mainSlide'],
  methods: {
    changeMainSlide(id) {
      this.$emit('showSlide', id)
    },
    backgroundImg(background) {     
      const bgurl = require(`@/assets/gallery/${background}`);
      return 'background-image:' + `url(${bgurl})`
    }
  },
  computed: {

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
    position: relative;
    transition: all .4s ease-in-out;

    &:after {
      position: absolute;
      display: block;
      content: '';      
      background-color: #A0909075;
      width: 100%;
      height: 100%;
      transition: all .2s ease-in-out;
    }

    &:hover {
      /* transform: scale(1.04);
      z-index: 100; */

      &:after {
        background-color: unset;
      }

    }

  }
</style>