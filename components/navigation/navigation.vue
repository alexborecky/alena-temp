<template>
    <div class="navigation navbar" :class="{ 'hidden-navbar': !showNavbar, scrolled: !scrolledNav}">
        <div class="container flex">
            <nuxt-link to="/" class="logo flex center"> 
                <img src="https://ik.imagekit.io/alexborecky/Alena/alena-logo_1gBOu51TIDz9.svg" alt="">
            </nuxt-link>
            <!-- <div class="links flex">
                <ul class="flex center">
                    <li><nuxt-link class="flex center-column-top first-link" to="/">Showreel<span class="underline"></span></nuxt-link></li>
                    <li><nuxt-link class="flex center-column-top" to="/genres">Films<span class="underline"></span></nuxt-link></li>
                    <li><nuxt-link class="flex center-column-top" to="/about">About<span class="underline"></span></nuxt-link></li>
                    <li><nuxt-link class="flex center-column-top" to="/contact">Contact<span class="underline"></span></nuxt-link></li>
                </ul>
            </div> -->
            <sideBar/>
        </div>
    </div>
</template>


<script>
const OFFSET = 60
export default {
    name: 'navigation',
    data () {
    return {
      showNavbar: true,
      scrolledNav: true,
      lastScrollPosition: 0,
      scrollValue: 0
    }
  },

  mounted () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },

  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },

  methods: {
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return 
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.scrolledNav = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  }
}


</script>


<style lang="scss" scoped>

.navigation {
    height: 56px;
    margin-top: 40px;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: 0.2s all ease-out;
    @media only screen and (max-width: 560px) {
      margin-top: 24px;
      .container {
        .logo {
          img {
            height: 16px;
          }
        }
      }
    }
    .container {
        justify-content: space-between;
        display: flex;
        height: 100%;
        .logo {
          height: 100%;
            img {
                max-height: 24px;
            }
        }
    }
    .links {
        height: 56px;
        ul {
            height: 100%;
            padding-left: 0;
            li {
                margin-left: 40px;
                a {
                  opacity: .4;
                  &:hover {
                    opacity: 0.8;
                  }
                }
            }
        }
    }
    @media only screen and (max-width: 960px) {
        .links {
            display: none;  
        }
    }
}

// .nuxt-link-exact-active {
//     color: white;
//     opacity: 1 !important;
//     .underline {
//       width: 100%;
//     }
// }

.first-link.nuxt-link-exact-active, :not(.first-link).nuxt-link-active {
    color: white;
    opacity: 1 !important;
    .underline {
      width: 100%;
    }
}

.navigation.hidden-navbar {
  box-shadow: none;
  transform: translate3d(0, -120%, 0);
}

</style>