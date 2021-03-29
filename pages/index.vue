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
            <img src="https://ik.imagekit.io/alexborecky/Alena/DSC06084_waIaR4GfHk.jpg" alt="">
          </div>
          <div class="title content flex column half-width">
            <h5>Bio</h5>
            <h2>Alena Doláková</h2>
            <p>Alena Doláková je česká herečka s mezinárodní zkušeností. V listopadu 2020 debutovala knihou <a href="https://www.albatrosmedia.cz/tituly/63735820/anna-z-hollywoodu/?fbclid=IwAR2WU7x-pabNMLHF3-8R76mEsHEmBXGvAeA3lmYYOtZ3_2BETrf_Qa8mJFk" target="%blank"> <div class="underline"></div> Anna z Hollywoodu</a> (Albatros Media), věnuje se také stand upu a píše fejetony (Glanc, Elle). Letos se představí v hlavní roli ve filmu Zrcadla ve tmě.</p>
          </div>
        </div>
        <div class="projects hero flex page-section">
          <div class="title flex half-width">
            <div class="content flex column">
              <h5>Aktuálně</h5>
              <h2>Projekty</h2>
            </div>
          </div>
          <div class="content flex column half-width">
            <ul>
              <li class="flex"><a href="https://www.albatrosmedia.cz/tituly/63735820/anna-z-hollywoodu/?fbclid=IwAR2WU7x-pabNMLHF3-8R76mEsHEmBXGvAeA3lmYYOtZ3_2BETrf_Qa8mJFk" target="_blank"> <div class="underline"></div> Anna z Hollywoodu</a><p>kniha</p></li>
              <li class="flex"><a href="https://www.simonholy.com/index.php/zrcadla-ve-tme/?fbclid=IwAR0gv0-rYXVDsVIlbAbkTzpXO-ltZVTds0NEflPqE6mcq1LG1J2of52kb58" target="_blank"><div class="underline"></div>Zrcadla ve tmě</a><p>film</p></li>
              <li class="flex"><a href="https://chcitopodcast.cz" target="_blank"><div class="underline"></div>Chci To podcast</a><p>podcast</p></li>
            </ul>
          </div>
        </div>
        <div class="contacts hero flex page-section">
          <div class="title flex half-width">
            <div class="content flex column">
              <h5>Get in touch</h5>
              <h2>Kontakty</h2>
            </div>
          </div>
          <div class="contact-info half-width">
            <ul>
              <li class="flex column"><h5>Agent</h5>Michaela Povolná (More than stars) <a href="tel:+420724295476 ">+420 724 295 476 </a> </li>
              <li class="flex column"><h5>Instagram</h5> <a href="https://instagram.com/alena.dolakova" target="_blank">@alena.dolakova</a> </li>
              <li class="flex column"><h5>email</h5> <a href="mailto:alena@annaent.com" target="_blank">alena@annaent.com</a> </li>
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
    }
    .image {
      order: 1;
      img {
        max-width: 100%;
        width: 80%;
        @media (max-width: 720px) {
          width: 100%;
          height: 100%;
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
