<template>
	<section id="typical">
		<div class="container">
			<h2>Безопасность платежей</h2>

			<h3 class="benefit__item-title">При оплате заказа банковской картой, обработка платежа (включая ввод номера карты) происходит на защищенной странице процессинговой системы, которая прошла международную сертификацию. </h3>
			<div class="benefit__item-descr">то значит, что Ваши конфиденциальные данные (реквизиты карты, регистрационные данные и др.) не поступают в интернет-магазин, их обработка полностью защищена и никто, в том числе наш интернет-магазин, не может получить персональные и банковские данные клиента.</div>

            <div class="benefit__item-descr">При работе с карточными данными применяется стандарт защиты информации, разработанный международными платёжными системами Visa и MasterCard - Payment Card Industry Data Security Standard (PCI DSS), что обеспечивает безопасную обработку реквизитов Банковской карты Держателя. Применяемая технология передачи данных гарантирует безопасность по сделкам с Банковскими картами путем использования протоколов Transport Layer Security (TLS), Verified by Visa, Secure Code, и закрытых банковских сетей, имеющих высшую степень защиты.
            </div>
            <div class="benefit__item-descr">В случае возврата, денежные средства возвращаются на ту же карту, с которой производилась оплата.
            </div>
            <div class="benefit__item-descr">При оплате заказа банковской картой возврат денежных средств производится на ту карту, с которой был произведен платеж.</div>
		</div>

		 <video ref="videoPlayer" class="video-js vjs-default-skin"
     controls
    preload="auto"
    data-setup='{}'>
      <source src="https://nikitapugachev.com/wp-content/uploads/video/9.%20Heineken%20-%20%d0%b2%d1%8b%d0%bb%d0%b5%d1%82%d0%b0%d1%8e%d1%89%d0%b0%d1%8f%20%d0%bf%d1%80%d0%be%d0%b1%d0%ba%d0%b0.mp4" type="video/mp4"></source>
     </video>


		
	</section>
</template>





<script>
import videojs from 'video.js';
import videoJsResolutionSwitcher  from 'videojs-resolution-switcher'

export default {
    name: "VideoPlayer",
    props: {
        options: {
            type: Object,
            default() {
                return {
                      plugins: {
                        videoJsResolutionSwitcher: {
                          default: 'high',
                          dynamicLabel: true
                        }
                      }
                };
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        this.player = videojs(this.$refs.videoPlayer, this.options,  function onPlayerReady() {

            this.player.updateSrc([
        {
          src: 'http://media.xiph.org/mango/tears_of_steel_1080p.webm',
          type: 'video/webm',
          label: '360'
        },
        {
          src: 'http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4',
          type: 'video/mp4',
          label: '720'
        }
      ])

      this.player.on('resolutionchange', function(){
        console.info('Source changed to %s', player.src())
      })


            console.log('onPlayerReady', this);
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>

<style>
  .video-js{
    height: 250px;
    width: 400px;
  }
  .vjs-big-play-button{
    position: absolute!important;
    top: 40%!important;
    left: 40%!important;
    border:none!important;
    background-color: #2f97e6!important;
  }
</style>