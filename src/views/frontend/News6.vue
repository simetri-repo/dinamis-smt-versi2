		<template>
  <!-- Page Title
  =============================================-->
  <section id="page-title" class="nobg">
    <div class="container clearfix">
      <h1>News</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">News</li>
      </ol>
    </div>
  </section>
  <!-- #page-title end -->
  <section id="content">
    <div class="content-wrap">
      <div
        class="container clearfix"
        style="text-align: justify; text-justify: inter-word"
      >
        <div class="row clearfix">
          <div class="col-lg-12">
            <div class="heading-block nobottomborder bottommargin-sm">
              <h3>Fungsi Ampere Meter</h3>
            </div>

            <div class="divcenter center mb-4">
              <img
                style="width: 500px"
                src="/src/assets/style/images/blog/new-blog/blog1.png"
              />
            </div>

            <div>
              <p
                style="
                  margin-right: 0px;
                  margin-left: 0px;
                  color: rgb(119, 119, 119);
                  line-height: 24px;
                  font-family: 'Open Sans', Arial, sans-serif;
                "
              >
                Amperemeter adalah alat yang digunakan untuk mengukur kuat arus
                listrik dalam rangkaian tertutup pada panel listrik. Amperemeter
                digunakan untuk mengukur arus listrik dan terhubung dengan
                sensor arus atau CT (Current Transformator).
                <br /><br />
                Angka yang ditampilkan amperemeter ada yang analog maupun
                digital. Terdapat beberapa jenis yaitu amperemeter (A),
                miliamperemeter (mA), atau mikroamperemeter. Di dalam
                amperemeter terdapat kumparan kawat, magnet, pegas spiral, skala
                kalibrasi, dan jarum penunjuk yang bisa terbuat dari besi, coil
                atau bimetal.
                <br /><br />
                Amperemeter bekerja ketika ada arus mengalir di kumparan yang
                diselimuti medan magnet. Perisitiwa ini disebut gaya Lorentz.
                Gaya Lorentz ini menggerakkan jarum penunjuk amperemeter;
                semakin besar arus, semakin besar pula simpangan di amperemeter.
                <br /><br />
                Amperemeter yang bekerja baik mempunyai hambatan dalam yang
                kecil. Semakin kecil hambatan, maka semakin akurat kuat arus
                yang terukur. Coil yang berkualitas juga membantu memberikan
                hasil pengukuran akurat dan optimal. Untuk mengukur kuat arus
                yang lebih besar dari batas, dapat ditambahkan hambatan atau
                resistensi yang dirangkai secara parallel, yang disebut dengan
                nama hambatan Shunt.
                <br /><br />
                Anda bisa request berbagai macam merek dan tipe amperemeter yang
                sesuai dengan kebutuhan&nbsp;<router-link
                  :to="{ name: 'simetri.product' }"
                  >panel listrik</router-link
                >&nbsp;di proyek anda.&nbsp;<router-link
                  :to="{ name: 'simetri.contact' }"
                  >silahkan hubungi kami</router-link
                >.
              </p>
            </div>
          </div>
          <div class="col-sm-12">
            <router-link
              :to="{ name: 'simetri.news' }"
              class="button button-border button-rounded"
              >BACK</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- #content end -->

  <!-- #content end -->
</template>
      
<script>
export default {
 
};
</script>