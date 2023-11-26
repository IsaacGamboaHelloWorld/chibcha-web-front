<template>
    <div id="app">
      <CardComponent
        planName="Chibcha-Plata"
        pricing="$10/mes"
        :features="['ISO 9001', 'Almacenamiento SSD', 'Certificado SSL',
                    '10 gb', '10 correos', '1 DB', '1 Web Site']"
        icon="/img/LogosChibchaWeb03.svg"
      />
      <CardComponent
        planName="Chibcha-Oro"
        pricing="$15/mes"
        :features="['ISO 9001', 'Almacenamiento SSD', 'Certificado SSL',
                    '20 gb', '20 correos', '10 DB', '2 Web Sites']"
        icon="/img/LogosChibchaWeb05.svg"
      />
      <CardComponent
        planName="Chibcha-Platino"
        pricing="$20/mes"
        :features="['ISO 9001', 'Almacenamiento SSD', 'Certificado SSL',
                    '60 gb', '150 correos', 'DB Ilimitadas', '10 Web Sites']"
        icon="/img/LogosChibchaWeb01.svg"
      />
    </div>
</template>

  
  <script>
  import CardComponent from '../components/cardComponent/CardComponent.vue';
  
  export default {
    components: {
      CardComponent,
    },
  };
  </script>
  
  <style>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    justify-content: space-between;
    padding: 40px;
  }
  </style>
  
