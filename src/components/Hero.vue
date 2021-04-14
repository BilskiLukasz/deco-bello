<template>
  <div class="hero">
      <div class="hero-img hero-img-one"></div>
      <div class="hero-img hero-img-two"></div>
      <div class="hero-img hero-img-three"></div>
  </div>
</template>

<script>
export default {
    name: 'Hero',

}
</script>

<style lang="scss" scoped>
    .hero {
        width: 95%;
        height: 60vh;
        margin: 50px auto;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        overflow: hidden;

        @media (min-width: 481px) {
            height: 40vh;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 1fr;
        }

        @media (min-width: 1024px) {
            height: 70vh;
        }  

        @media (min-width: 1920px) {
            height: 80vh;
        }  

        &-img {
            position: relative;            
            background-size: cover;
            background-position: center;
            
            &::after{
                position: absolute;
                content: '';
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: #A0909075;
            }

            &-one {
                background-image: url('../assets/header/Hero-1.jpg');
                animation: fromLeft 1.6s, opacityFrom0 1.6s;

                @media (min-width: 481px) {
                    animation: fromDown 1.6s;
                }                                
            }

            &-two {
                background-image: url('../assets/header/Hero-2.jpg');
                animation: fromUp 1.4s, opacityFrom0 1.4s;                
            }

            &-three {
                background-image: url('../assets/header/Hero-3.jpg');
                animation: fromDownSlow 1.2s, opacityFrom0 1.2s;                
            }
        }     
    }

    @keyframes fromDown {
        from {
            transform: translateY(100px);
        }

        to {
            transform: translateY(0px);
        }
    }

    @keyframes fromDownSlow {
        from {
            transform: translateY(50px);
        }

        to {
            transform: translateY(0px);
        }
    }

    @keyframes fromUp {
        from {
            transform: translateY(-100px);
        }

        to {
            transform: translateY(0px);
        }
    }

    @keyframes fromLeft {
        from {
            transform: translateX(-80px);
        }

        to {
            transform: translateX(0px);
        }
    }

    @keyframes opacityFrom0 {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
</style>