<template>
    <div>
        <div class="hero">
            <div class="video" :class="{'hidden-video': showVideo}">
                <div class="background flex middle" id="stop" @click="showVideo = true">
                    <iframe src="https://player.vimeo.com/video/335670008" width="80%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div class="start-video flex middle" id='start' @click="showVideo = false">
                <img class="play-button" src="https://ik.imagekit.io/alexborecky/Alena/play_9yMeDRmXn.svg" alt="">
                <img src="https://ik.imagekit.io/alexborecky/Alena/Screenshot_2020-11-03_at_18.42.08_E76KTtlV2.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                showVideo: true
            }
        },
        mounted () {
            var iframe = document.querySelector('iframe');
            var player = new Vimeo.Player(iframe);
            $('#start').click( function() {
                player.play();
            });
            $('#stop').click( function() {
                player.pause();
            });
        }
    }
</script>

<style lang="scss" scoped>

.video.hidden-video {
    opacity: 0;
    z-index: -100;
    position: fixed;
    transition: .2s ease-in-out;
    iframe {
        transform: scale(1.2);
        transition: 2s ease-in-out;
    }
    .background {
        visibility: hidden;
    }
}

.start-video {
    width: 100%;
    height: auto;
    z-index: 100 !important;
    &:hover {
        cursor: url(https://ik.imagekit.io/alexborecky/Playground/play_ARW51TdN2rwE.svg) 35 20, auto;
    }
    img {
        height: 100%;
        width: 100%;
    }
}

.play-button {
    max-height: 80px;
    max-width: 80px;
    position: absolute;
    &:hover {
        cursor: pointer !important;
    }
}

.video {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: .4s ease-in-out;
    iframe {
        width: 80vw !important;
        height: 80vh;
        transition: 1s ease-in-out;
    }
    .background {
        background-color: black;
        width: 100%;
        height: 100%;
        &:hover {
            cursor: url(https://ik.imagekit.io/alexborecky/Playground/close_k8B7__sXRMC3B.svg) 25 15, auto !important;
        }
    }
}

</style>