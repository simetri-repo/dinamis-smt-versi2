<template>
  <!-- Page Title
		============================================= -->
  <section id="page-title" class="nobg">
    <div class="container clearfix">
      <h1>Certificate</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Certificate</li>
      </ol>
    </div>
  </section>

  <!-- content -->
  <section id="content" translate="no">
    <div class="content-wrap">
      <div>
        <div class="container clearfix">
          <div class="row col-md-12">
            <div class="heading-block center">
              <h3>Our Certificate</h3>
            </div>
            <!--  -->
            <div
              v-for="(show_certificate, index) in show_certificate"
              :key="index"
              class="col-md-4 col-sm-12 center"
              translate="no"
            >
              <v-lazy-image
                :src="
                  'https://admin-sinarmetrindo.airartikennels.co.id/' +
                  show_certificate.gambar_certificate
                "
                style="border-radius: 2px"
              />
              <h3
                style="font-size: 18px"
                class="m-4 notranslate"
                translate="no"
              >
                {{ show_certificate.nama_certificate }}
              </h3>
              <br />
            </div>
            <!--  -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- #content end -->
  <!-- end content -->
</template>

<script>
import VLazyImage from "v-lazy-image";
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    let show_certificate = ref([]);
    onMounted(() => {
      axios
        .get(
          "https://admin-sinarmetrindo.airartikennels.co.id/api/show_certificate"
        )
        .then((result) => {
          // console.log(result);
          show_certificate.value = result.data;
        })
        .catch((err) => {
          console.log('error');
        });
    });
    return {
      show_certificate,
    };
  },
  components: {
    VLazyImage,
  },
};
</script>
