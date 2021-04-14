<template>
  <Hero />
  <Gallery :slideList="galleryImages"/>
  <div class="footer"></div>
</template>

<script>
import Hero from './components/Hero'
import Gallery from './components/Gallery/Gallery'

export default {
  name: 'App',
  components: { Hero, Gallery },
  data() {
    return {
      galleryImages: [
        {id: 0, bg: 'gallery-1.jpg'}, 
        {id: 1, bg: 'gallery-2.jpg'}, 
        {id: 2, bg: 'gallery-3.jpg'}, 
        {id: 3, bg: 'gallery-4.jpg'}, 
        {id: 4, bg: 'gallery-5.png'}, 
        {id: 5, bg: 'gallery-6.jpg'}, 
        {id: 6, bg: 'gallery-7.jpg'},
        {id: 7, bg: 'gallery-8.jpg'}, 
        {id: 8, bg: 'gallery-9.jpg'}, 
        {id: 9, bg: 'gallery-10.jpg'}, 
        {id: 10, bg: 'gallery-11.jpg'}, 
        {id: 11, bg: 'gallery-12.png'}, 
        {id: 12, bg: 'gallery-13.jpg'}, 
        {id: 13, bg: 'gallery-14.jpg'},
        {id: 14, bg: 'gallery-15.jpg'}, 
        {id: 15, bg: 'gallery-16.jpg'},
        {id: 16, bg: 'gallery-16.jpg'}, 
        {id: 17, bg: 'gallery-17.jpg'}, 
        {id: 18, bg: 'gallery-18.jpg'}, 
        {id: 19, bg: 'gallery-19.jpg'}, 
        {id: 20, bg: 'gallery-20.jpg'}, 
        {id: 21, bg: 'gallery-21.jpg'}, 
        {id: 22, bg: 'gallery-22.jpg'},
        {id: 23, bg: 'gallery-23.jpg'}, 
        ],
    }
  },

}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #fff;
  font-family: 'Roboto Condensed', sans-serif;
}

*, *::after, *::before{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.hidden {
  display: none;
}


.content-container {
  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (min-width: 1920px) {
    width: 80%;
  }
}

.footer {
  height: 300px;
  width: 100%;
}


</style>