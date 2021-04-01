<template>
    <div class="gallery-slider slider">
        <div class="slider-btn slider-btn-prev" @click="prevSlide">&lt;&lt;</div>
        <div v-for="slide of slideList" 
            :key="slide"
            @click="changeMainSlide(slide.id)"
            :style="{'backgroundColor': slide.bg}"
            class="slider-img"
            :class="{'slider-img-prev1' : this.prev1 == slide.id,
                    'slider-img-prev2' : this.prev2 == slide.id,
                    'slider-img-next1' : this.next1 == slide.id,
                    'slider-img-next2' : this.next2 == slide.id,
                    'slider-img-active' : this.currentSlide == slide.id}"
            >

        </div>
        <div class="slider-btn slider-btn-next" @click="nextSlide()">&gt;&gt;</div>
    </div>
</template>

<script>
export default {
    name: 'SliderMobile',
    props: ['slideList', 'mainSlide'],
    data() {
        return {
            currentSlide: this.mainSlide
        }
    },
    methods: {
        prevSlide() {
            if(this.currentSlide > 0) {
                this.currentSlide -= 1;
            }
        },
        nextSlide() {
            if(this.currentSlide < this.slideList.length-1) {
                this.currentSlide += 1;
            }
        },
        changeMainSlide(id){
            this.$emit('showSlide', id)
            this.setCurrentSlide(id);
        },
        setCurrentSlide(id) {
            this.currentSlide = id
        }
    }, 
    computed: {
        prev1(){
            return this.currentSlide-1      
        },
        prev2(){
            return this.currentSlide-2   
        },
        next1(){
            return this.currentSlide+1      
        },
        next2(){
            return this.currentSlide+2      
        },
    }

}
</script>

<style lang="scss">
    
    .slider {
        overflow-x: hidden;
        height: 120px;
        scroll-behavior: smooth;
        position: relative;
        display: flex;
        align-items: center; 

        @media(min-width:560px) {
            height: 160px;  
        }       
    
        &-img {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 130px;
            height: 100px;  
            transition: all .3s;
            opacity: 1;
            cursor: pointer;
            display: none;
            @media(min-width:560px) {
                width: 150px;
                height: 120px;  
            }

            &-active {
                transform: translateX(-50%) scale(1);
                z-index: 3;
                display: inline-block;
            }

            &-prev1 {
                transform: translateX(-90%) scale(0.9);
                z-index: 2;
                display: inline-block;
                opacity: .7;

                @media(min-width:560px) {
                    transform: translateX(-110%) scale(0.9);
                }
            }

            &-prev2 {
                transform: translateX(-130%) scale(0.8);
                z-index: 1;
                display: inline-block;
                opacity: .5;

                @media(min-width:560px) {
                    transform: translateX(-150%) scale(0.8);
                }
            }

            &-next1 {
                transform: translateX(-10%) scale(0.9);
                z-index: 2;
                display: inline-block;
                opacity: .7;

                @media(min-width:560px) {
                    transform: translateX(10%) scale(0.9);
                }
            }

            &-next2 {
                transform: translateX(30%) scale(0.8);
                z-index: 1;
                display: inline-block;
                opacity: .5;

                @media(min-width:560px) {
                    transform: translateX(50%) scale(0.8);
                }
            }
        }

        &-btn {
            position: absolute;
            top: 0;
            bottom: 0;
            background-color: #E4E4E4D9;
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #000;            
            padding: 10px;
            z-index: 10;
            font-weight: 700;

            &-left {
                left: 0;
            }

            &-next {
                right: 0;
            }
        }
    }
</style>