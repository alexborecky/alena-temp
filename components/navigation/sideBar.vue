<template>
    <div class="burger-nav flex center">
        <div class="open">
            <div class="flex middle" @click="isActive = !isActive" >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21M3 6H21M3 18H21" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> 
        </div>
      <transition name="fade">
        <div class="nav-container flex center-column-top" :class="{ passive: isActive }">
            <div class="container flex center-column-right">
                <div class="close flex">
                    <div class="flex middle" @click="isActive = !isActive" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div> 
                </div>
              <div class="mobile-links flex center-column-top">
                  <nuxt-link to="/" class="logo"> 
                        <img @click="isActive = !isActive" src="https://ik.imagekit.io/alexborecky/Alena/alena-logo_1gBOu51TIDz9.svg" alt="Alena Doláková herečka">
                    </nuxt-link>
                  <!-- <ul>
                      <li @click="isActive = !isActive"><nuxt-link to="/">Showreel</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/films">Films</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/about">About</nuxt-link></li>
                      <li @click="isActive = !isActive"><nuxt-link to="/contact">Contact</nuxt-link></li>
                  </ul> -->
              </div>
            </div>
        </div> 
      </transition>
    </div>
</template>

<script>


export default {
    name: 'sideBar',
    data () {
      return {
        isActive: true
      }
    },
    methods: {
    }
}
</script>



<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
}

.passive {
  opacity: 0;
  z-index: -1000;
  height: 0vh;
  transform: translateX(100%) !important;
  position: absolute;
}

.open {
    width: 100%;
    height: 100%;
    float: right;
    z-index: 1000 !important;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}


.burger-nav {
  z-index: 100;
  width: auto;
  @media only screen and (min-width: 450px) {
    display: none;
  }
  .nav-container {
    position: fixed;
    height: 120vh;
    top: 0 !important;
    left: 100%;
    width: 100% !important;
    background-color: black;
    z-index: 100;
    transition: .4s ease-in;
    transform: translateX(-100%);
    .container {
      .close {
        margin-top: 32px;
        height: 56px;
        width: 40px;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
}


.mobile-links {
  display: flex; 
  justify-content: center;
  text-align: center;
  height: 100%;
  padding: 0;
  text-align: center;
  margin-top: 40px;
  width: 100%;
  .logo {
      img {
          max-width: 280px;
          @media only screen and (max-width: 560px) {
            height: 24px;
          }
        }
    }
    ul {
        margin-top: 32px;
        padding-left: 0;
        list-style-type: none;
    a {
      margin-top: 24px;
      display: flex;
      justify-content: center;
      text-decoration: none;
      font-size: 24px;
    }
  }
}


.nuxt-link-exact-active {
  color: white ;
}


@media only screen and (max-width: 960px) {
    .burger-nav {
        display: none;
    }
}

</style>
