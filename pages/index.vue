<template>
  <div class="hero">
    <div class="container">
      <div class="video-reel">
        <!-- <iframe title="vimeo-player" src="https://player.vimeo.com/video/335670008" width="640" height="360" frameborder="0" allowfullscreen></iframe> -->
        <Video />
      </div>
      <div class="container">
        <div class="about hero middle page-section flex">
          <div class="image half-width flex">
            <img src="https://ik.imagekit.io/alexborecky/Alena/unnamed-min_74ucwK-zg.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667075486994" alt="Alena Doláková herečka">
          </div>
          <div class="title content flex column half-width">
            <h5>Bio</h5>
            <h1>Alena Doláková</h1>
            <p>The star of <a href="https://www.simonholy.com/index.php/zrcadla-ve-tme/?fbclid=IwAR0gv0-rYXVDsVIlbAbkTzpXO-ltZVTds0NEflPqE6mcq1LG1J2of52kb58" target="%blank"> <div class="underline"></div> Mirrors in The Dark</a> which premiered at KVIFF also appeared in six US series (playing an American, a Brit, a Bulgarian etc.) and other thirty Czech projects. Alena is also a published author (<a href="https://www.albatrosmedia.cz/tituly/63735820/anna-z-hollywoodu/?fbclid=IwAR2WU7x-pabNMLHF3-8R76mEsHEmBXGvAeA3lmYYOtZ3_2BETrf_Qa8mJFk" target="%blank"> <div class="underline"></div> Anna Of Hollywood,</a> Albatros Media), owner of <a href="https://annaent.com/" target="%blank"> <div class="underline"></div> ANNA Entertainment</a> and activist.</p>
            <div class="links flex">
              <ul>
                <li><a class="flex middle" target="_blank" href="https://www.imdb.com/name/nm5794772/"><div class="underline"></div> IMDB <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li>
                <li><a class="flex middle" target="_blank" href="https://www.csfd.cz/tvurce/110239-alena-dolakova/"> <div class="underline"></div> CSFD <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="projects hero flex page-section">
          <div class="title flex half-width">
            <div class="content flex column">
              <h5>Current</h5>
              <h2>Projects</h2>
            </div>
          </div>
          <div class="content flex column half-width">
            <ul>
              <li class="flex"><a href="https://www.albatrosmedia.cz/tituly/63735820/anna-z-hollywoodu/?fbclid=IwAR2WU7x-pabNMLHF3-8R76mEsHEmBXGvAeA3lmYYOtZ3_2BETrf_Qa8mJFk" target="_blank"> <div class="underline"></div> Anna z Hollywoodu</a><p>book</p></li>
              <li class="flex"><a href="https://annaent.com/" target="_blank"> <div class="underline"></div> Anna Entertainment</a><p>co</p></li>
              <li class="flex"><a href="https://www.simonholy.com/index.php/zrcadla-ve-tme/?fbclid=IwAR0gv0-rYXVDsVIlbAbkTzpXO-ltZVTds0NEflPqE6mcq1LG1J2of52kb58" target="_blank"><div class="underline"></div>Zrcadla ve tmě</a><p>film</p></li>
              <!-- <li class="flex"><a href="https://chcitopodcast.cz" target="_blank"><div class="underline"></div>Chci To</a><p>podcast</p></li> -->
              <li class="flex"><a href="https://421686.myshoptet.com/" target="_blank"> <div class="underline"></div>Shop</a><p>merch</p></li>
            </ul>
          </div>
        </div>
        <div class="contacts hero flex page-section">
          <div class="title flex half-width">
            <div class="content flex column">
              <h5>Get in touch</h5>
              <h2>Contacts</h2>
            </div>
          </div>
          <div class="contact-info half-width">
            <ul class="full-width">
              <li class=""><h5>Agent Prague</h5>Michaela Povolná (More than stars)<br>
                <a href="tel:+420724295476 ">+420 724 295 476 </a> </li>
                <li class=""><h5>Agent London</h5>International Artists Management <br> <a href="">helen@internationalartistsmanagement.co.uk</a> </li>
                <li class=""><h5>Agent Los Angeles</h5>Blain & Associates <br> <a href="">franblain@gmail.com</a> </li>
                <li class=""><h5>Instagram</h5> <a href="https://instagram.com/alena.dolakova" target="_blank">@alena.dolakova</a> </li>
              <li class=""><h5>email</h5> <a href="mailto:alena@annaent.com" target="_blank">alena@annaent.com</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>

.container {
  .video-reel {
    margin-top: 40px;
  }
  .about {
    flex-flow: row;
    .content {
      order: 2;
      height: 100%;
      p {
        margin: 16px 0;
        color: rgba($color: #fff, $alpha: .8);
      }
      a {
        color: rgba($color: #fff, $alpha: 1.0);
        font-family: 'Cinzel';
        &:hover {
          color: black;
        }
      }
      h1 {
        font-family: 'Cinzel';
        text-align: left;
        font-size: 40px;
        font-weight: lighter;
        text-transform: uppercase;
        letter-spacing: 4px;
        @media (max-width: 1440px) {
            font-size: 32px;
          }
          @media (max-width: 1340px) {
            font-size: 28px;
          }
          @media (max-width: 940px) {
            font-size: 24px;
          }
          @media (max-width: 330px) {
            font-size: 20px;
          }
      }
      .links {
        position: relative;
        a {
          font-family: 'Poppins';
          position: relative;
          svg {
            height: 16px;
          }
          &:hover {
            svg {
              stroke: black;
            }
          }
        }
      }
    }
    .image {
      order: 1;
      img {
        max-width: 100%;
        width: 80%;
        height: 100%;
        @media (max-width: 720px) {
          width: 100%;
        }
      }
    }
    @media (max-width: 720px) {
        flex-flow: column;
        .title {
          order: 1;
        }
        .image {
          order: 2;
        }
      }
  }
  .projects {
    min-height: 20vh;
    ul {
      li {
        margin-bottom: 40px;
        @media (max-width: 720px) {
          margin-bottom: 24px;
          flex-flow: column;
          p {
            margin-left: 0px !important;
          }
        }
        p {
          margin-bottom: 4px;
          margin-left: 16px;
          opacity: .4;
        }
        a {
          font-family: 'Cinzel', serif;
          font-size: 40px;
          font-weight: lighter;
          @media (max-width: 1440px) {
            font-size: 32px;
          }
          @media (max-width: 1340px) {
            font-size: 28px;
          }
          @media (max-width: 940px) {
            font-size: 24px;
          }
          @media (max-width: 330px) {
            font-size: 20px;
          }
          .underline {
            height: 100%;
          }
          &:hover {
            color: black;
          }
        }
      }
    }
  }
  .contacts {
    .contact-info {
      li {
        margin-bottom: 40px;
        @media (max-width: 720px) {
          margin-bottom: 16px;
        }
      }
    }
  }
}

</style>
