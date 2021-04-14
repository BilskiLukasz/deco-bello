<template>
  <div class="gallery">
    <div class="gallery-title" v-if="$mq === 'tablet'">Przykładowe prace</div>
    <div class="gallery-preview" :style="backgroundImg"></div>
    <SliderMobile :slideList="slideList" :mainSlide="mainSlide" @showSlide="showPreview" v-if="$mq === 'tablet'"/>
    <SliderDesktop :slideList="slideList" :mainSlide="mainSlide" @showSlide="showPreview" v-else/>
  </div>
</template>

<script>
import SliderMobile from './SliderMobile'
import SliderDesktop from './SliderDesktop'

export default {
    name: 'Gallery',
    props: [ 'slideList'],
    components: { SliderMobile, SliderDesktop },
    data() {
        return {
            mainSlide: 0,
        }
    },
    methods: {
        showPreview(id) {
            this.mainSlide = id;
        }
    },
    computed: {
    backgroundImg() {     
      const bgurl = require(`@/assets/gallery/${this.slideList[this.mainSlide].bg}`);
      return 'background-image:' + `url(${bgurl})`
    }
    }
}
</script>

<style lang="scss" scoped>
    .gallery {
        width: 100%;
        padding: 0 10px;
        position: relative;

        @media ( min-width: 768px ) {
            padding: 0px;
        }

        &-title {
            width: 70%;
            display: block;
            margin-left: auto;
            margin-right: 0;
            padding: 15px;
            background-color: #E4E4E4;
            position: relative;
            z-index: 2;
        }

        &-preview {
            width: 100%;
            height: 300px;
            margin-top: -25px;
            position: relative;
            background-size: cover;
            z-index: 1;

            @media ( min-width: 768px ) {
                width: 45%;
                height: 360px;
                margin-top: 0px;
            }

            @media ( min-width: 1440px ) {
                height: 35vw;
            }
        }
    }

</style>