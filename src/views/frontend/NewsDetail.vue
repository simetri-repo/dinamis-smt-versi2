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
        <div class="row clearfix py-5 px-5">
          <div class="col-lg-12">
            <div class="heading-block nobottomborder bottommargin-sm">
              <h3>{{ news.nama_berita }}</h3>
              <span class="fs-6">{{ formatDate(news.update_rilis) }}</span>
            </div>

            <div class="divcenter center mb-4">
              <img
                style="width: 500px"
                :src="'http://127.0.0.1:8000/' + news.gambar_berita"
              />
            </div>

            <div>
              <!-- <p
                style="
                  margin-right: 0px;
                  margin-left: 0px;
                  color: rgb(119, 119, 119);
                  line-height: 24px;
                  font-family: 'Open Sans', Arial, sans-serif;
                "
                align="justify"
              >
            </p> -->
              <div v-html="news.keterangan_berita"></div>
              <!-- {{ news.keterangan_berita }} -->
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
import VLazyImage from "v-lazy-image";
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "NewsDetail",
  data() {
    return {
      news: {},
    };
  },
  methods: {
    setNews(data) {
      this.news = data;
    },
    formatDate(date) {
      const months = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];

      if (!date) {
        return "";
      }

      const parts = date.split("-");
      console.log(parts);
      const day = parts[2].split(' ');
      const month = months[parseInt(parts[1] - 1)];
      const year = parts[0];

      return `${day[0]} ${month} ${year}`
    },
  },
  mounted() {
    axios
      // .get('https://admin-sinarmetrindo.airartikennels.co.id/api/show_berita_detail/' + this.$route.params.id)
      .get(
        "http://127.0.0.1:8000/api/show_berita_detail/" + this.$route.params.id
      )
      .then((response) => {
        // console.log(response);
        this.setNews(response.data[0]);
      })
      // .then((response) => this.setNews(response.data))
      .catch((error) => console.log("error"));
  },
};
</script>
