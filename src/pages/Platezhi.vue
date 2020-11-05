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

        <vue-core-video-player :src="source" :autoplay="false"></vue-core-video-player>


		
	</section>
</template>





<script>


const videoSource = [
            {
    src: 'https://media.vued.vanthink.cn/sparkle_your_name_am720p.mp4',
    resolution: 720,
  }, {
    src: 'https://media.vued.vanthink.cn/y2mate.com%20-%20sparkle_your_name_amv_K_7To_y9IAM_1080p.mp4',
    resolution: 1080
  },
  {
    src: 'https://media.vued.vanthink.cn/sparkle_your_name_am360p.mp4',
    resolution: 360,
  }, 
];

export default {
    props: {
        options: {
            type: Object,
            default() {
                return {
                      
                };
            }
        },
    },
    data() {
        return {
            source:videoSource,
            
        }
    },
    mounted() {      
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