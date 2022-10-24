		<template>
  <!-- Page Title
  =============================================-->
  <section id="page-title" class="nobg" style="">
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
              <h3>5 Tipe Panel Listrik dan Fungsinya</h3>
            </div>

            <div class="divcenter center mb-4">
              <img
                style="width: 500px"
                src="/src/assets/style/images/blog/new-blog/blog6.png"
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
                align="justify"
              >
                Panel listrik memiliki bermacam-macam tipe sesuai dengan
                fungsinya. Masing-masing tipe tersebut memiliki karakteristik
                dan komponen yang berbeda. Penamaan panel listrik tersebut
                sesuai dengan fungsi utamanya, contohnya panel kontrol genset
                yang memiliki fungsi mengatur genset.
                <br />
                <br />
                Berikut ini adalah 5 tipe panel listrik dan fungsinya:
              </p>

              <ol
                style="
                  margin-bottom: 10px;
                  color: rgb(119, 119, 119);
                  font-family: 'Open Sans', Arial, sans-serif;
                "
              >
                <li style="line-height: 24px">
                  Panel LVMDP. Merupakan singkatan dari low voltage main
                  distribution panel, atau sering disebut panel utama tegangan
                  rendah (PUTR). Fungsinya adalah menerima tenaga listrik
                  langsung (incoming) dari sumbernya baik itu dari PLN, genset
                  atau keduanya secara bersamaan atau paralel. Fungsi lainnya
                  adalah menghemat penggunaan listrik, melindungi dari short
                  circuit, menjaga kestabilan, membagi tenaga listrik ke
                  beberapa circuit.
                </li>
                <li style="line-height: 24px">
                  Panel kontrol genset. Seperti namanya, panel ini berhubungan
                  dengan pengaturan genset. Dibagi menjadi 3 tipe:
                  <ul style="margin-left: 30px">
                    <li style="line-height: 24px">
                      Panel ATS (Automatic Transfer Switch). Fungsinya agar
                      penggantian arus antara dua sumber yaitu PLN dan genset
                      dapat berlangsung dengan aman dan otomatis.
                    </li>
                    <li style="line-height: 24px">
                      Panel AMF (Automatic Main Failure). Fungsinya adalah
                      mengatur nyala atau matinya genset secara otomatis. Jika
                      listrik dari PLN mengalami pemutusan, panel kontrol
                      menyalakan genset secara otomatis; apabila listrik dari
                      PLN tersambung kembali maka panel akan mematikan genset
                      secara otomatis.
                    </li>
                    <li style="line-height: 24px">
                      Panel synchronizing. Fungsinya adalah menggabungkan sumber
                      listrik dari dua atau lebih unit generator. Juga bisa
                      disebut juga memparalel beberapa generator. Fungsinya agar
                      mendapat tenaga lebih di jalur yang sama.
                    </li>
                  </ul>
                </li>
                <li style="line-height: 24px">
                  Panel kapasitor. Panel ini memperbaiki power factor agar tidak
                  terkena denda karena kurang dari 0,85. Fungsi lainnya adalah
                  menghindari kelebihan beban, efisiensi daya, dan memberi
                  perlindungan pada peralatan elektronik.
                </li>
                <li style="line-height: 24px">
                  Panel distribusi. Panel ini mendistribusikan listrik ke
                  sub-sub lain seperti hydrant, lampu, lift dan lainnya. Panel
                  ini memiliki sistem pengaturan dan perlindungan saat
                  pendistribusian.
                </li>
                <li style="line-height: 24px">
                  Panel pompa. Berfungsi untuk mengontrol kerja operasional
                  pompa air. Dikombinasikan dengan water level control (WLC)
                  untuk menarik air ke atas dan mengosongkan air.
                </li>
              </ol>
              <br />
              <br />
              <p
                style="
                  margin-right: 0px;
                  margin-left: 0px;
                  color: rgb(119, 119, 119);
                  line-height: 24px;
                  font-family: 'Open Sans', Arial, sans-serif;
                "
              >
                Kelima panel tersebut adalah
                <router-link :to="{ name: 'simetri.product' }"
                  >produk dari kami.</router-link
                >
                Silahkan
                <router-link :to="{ name: 'simetri.contact' }"
                  >hubungi kami bila anda berminat.</router-link
                >
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