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
  <!-- Content
		============================================= -->
  <section id="content">
    <div class="content-wrap">
      <div class="container clearfix">
        <!-- Post Content
					============================================= -->
        <div class="col-sm-12">
          <div class="row">
            <div class="col-sm-8 mb-4">
              <div
                v-for="(show_berita_hot, index) in show_berita_hot"
                :key="index"
                class="clearfix mb-4"
              >
                <div class="entry-image mb-0">
                  <a data-lightbox="image"
                    ><v-lazy-image
                      class="image_fade"
                      :src="
                        'https://admin-sinarmetrindo.airartikennels.co.id/' +
                        show_berita_hot.gambar_berita
                        // 'http://127.0.0.1:8000/' + show_berita_hot.gambar_berita
                      "
                      alt="Standard Post with Image"
                      style="height: 100%, width: 100%, transform:translate(-50%, -50%);"
                  /></a>
                  <div class="py-2">
                    <div class="row">
                      <div class="float-start fs-6">
                        <i class="fa-solid fa-calendar-days"></i> |
                        {{ show_berita_hot.update_rilis }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="entry-c">
                  <div class="entry-title">
                    <h4 class="mb-1">
                      <a> {{ show_berita_hot.nama_berita }}</a>
                    </h4>
                  </div>
                  <ul class="entry-meta clearfix mt-0">
                    <li>
                      <i class="icon-calendar3"></i>
                    </li>
                    <li>
                      <a href="#"><i class="icon-folder-open"></i></a>
                    </li>
                  </ul>
                  <div class="entry-content">
                    <p align="justify">
                      <span
                        v-html="formatDesc(show_berita_hot.keterangan_berita)"
                      ></span
                      ><b>. . .</b><br />
                    </p>

                    <router-link
                      :to="'/news/' + show_berita_hot.id_berita"
                      class="button button-border button-rounded ms-0"
                      >Read More</router-link
                    >
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-4">
              <div
                class="entry"
                v-for="(show_berita_top, index) in show_berita_top"
                :key="index"
              >
                <div class="entry-image mb-1">
                  <a data-lightbox="image"
                    ><v-lazy-image
                      class="image_fade"
                      :src="
                        'https://admin-sinarmetrindo.airartikennels.co.id/' +
                        show_berita_top.gambar_berita
                        // 'http://127.0.0.1:8000/' + show_berita_top.gambar_berita
                      "
                      alt="Standard Post with Image"
                      style="height: auto"
                  /></a>
                  <div class="py-2">
                    <div class="row">
                      <div class="float-start">
                        <i class="fa-solid fa-calendar-days"></i> |
                        {{ show_berita_top.update_rilis }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="entry-c">
                  <div class="entry-title">
                    <h5 class="mb-2">
                      <a>
                        {{ show_berita_top.nama_berita }}
                      </a>
                    </h5>
                  </div>
                  <div class="entry-content">
                    <!-- <router-link
                      :to="'/news/' + show_berita_top.id_berita"
                      class="button button-border button-rounded ms-0"
                      >Read More</router-link
                    > -->
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <!-- daily -->
        <hr />
        <!-- <div class="col-sm-12 mt-5 text-center rounded"> -->
        <!-- <div class="row">
            <div
              v-for="(show_berita, index) in show_berita"
              :key="index"
              class="col-sm-4"
            >
              <div class="entry clearfix card" style="height: 587px">
                <div class="px-4">
                  <a data-lightbox="image" style="height: 250px"
                    ><v-lazy-image
                      class="image_fluid mx-auto"
                      :src="
                        'https://admin-sinarmetrindo.airartikennels.co.id/' +
                        show_berita.gambar_berita
                      "
                      alt="Standard Post with Image"
                      style="height: 250px; width: 316px"
                  /></a>
                  <div class="px-2 py-2">
                    <div class="row">
                      <div class="float-start">
                        <i class="fa-solid fa-calendar-days"></i> |
                        {{ show_berita.update_rilis }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="entry-c px-4">
                  <div class="entry-title">
                    <h5
                      style="
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 100%;
                      "
                    >
                      <a> {{ show_berita.nama_berita }} </a>
                    </h5>
                  </div>
                  <ul class="entry-meta clearfix">
                    <li>
                      <i class="icon-calendar3"></i>
                    </li>
                    <li>
                      <a href="#"><i class="icon-folder-open"></i></a>
                    </li>
                  </ul>
                  <div class="entry-content">
                    <p
                      align="justify"
                      v-html="show_berita.keterangan_berita.substring(0, 70)"
                    ></p>

                    <router-link
                      :to="'/news/' + show_berita.id_berita"
                      class="button button-border button-rounded"
                      >Read More</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        <!-- #posts end -->
        <div class="row items-push py-30">
          <div class="col-xl-8">
            <div class="mb-5">
              <div
                class="card mb-3"
                v-for="(show_berita, index) in show_berita"
                :key="index"
              >
                <a class="img-link" :href="'/news/' + show_berita.id_berita">
                  <img
                    class="img-fluid centered"
                    :src="
                      'https://admin-sinarmetrindo.airartikennels.co.id/' +
                      show_berita.gambar_berita
                    "
                    alt=""
                  />
                </a>
                <div class="card-body">
                  <h3 class="h4 font-w600 text-uppercase mb-5">
                    <router-link
                      :to="'/news/' + show_berita.id_berita"
                      style="font-size: 18px"
                    >
                      {{ show_berita.nama_berita }}
                    </router-link>
                  </h3>
                  <div class="text-muted mb-10">
                    <span class="mr-15">
                      <i class="fa fa-fw fa-calendar mr-5"></i
                      >{{ show_berita.update_rilis }}
                    </span>
                  </div>
                  <div
                    align="justify"
                    v-html="
                      show_berita.keterangan_berita.substring(0, 138) +
                      '<b>. . .</b>'
                    "
                  ></div>
                  <router-link
                    :to="'/news/' + show_berita.id_berita"
                    class="button button-border button-rounded ms-0"
                  >
                    Read More
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 mb-5">
            <div class="block block-transparent">
              <div class="block-header">
                <h3 class="block-title text-uppercase">
                  <i class="fa fa-fw fa-list mr-5"></i> Archive
                </h3>
              </div>
              <div class="block-content">
                <ul class="nav nav-pills flex-column push">
                  <li class="nav-item"  v-for="(getTahun, index) in getTahun"
                      :key="index">
                    <a
                      class="nav-link d-flex align-items-center justify-content-between active mb-2"
                      @click="loadPage(1,getTahun.tahun)"
                     
                    >
                      <span 
                      >
                        <i class="mr-5 fw-700"></i> {{ getTahun.tahun }} </span>
                      <span class="badge badge-pill badge-secondary">{{ getTahun.total }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <!-- paging -->
        <div class="col-sm-12 center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a
                  class="page-link"
                  @click="loadPage(currentPage - 1,tahunIni)"
                  :disabled="currentPage === 1"
                  style="cursor: pointer"
                  >Previous</a
                >
              </li>
              <li
                class="page-item"
                v-for="page in visiblePages"
                :key="page"
                @click="loadPage(page,tahunIni)"
                :class="{ active: page === currentPage }"
              >
                <a class="page-link">{{ page }}</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  @click="loadPage(currentPage + 1,tahunIni)"
                  :disabled="currentPage === totalPages"
                  style="cursor: pointer"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
          <!-- <button
            href=""
            class="btn btn-info"
            style="margin-right: 3px"
            disabled
          >
            <i class="fas fa-angle-right"></i>
          </button> -->
        </div>
        <!-- .postcontent end -->
      </div>
      <!-- .postcontent end -->
    </div>
  </section>
  <!-- #content end -->
</template>

<script>
import VLazyImage from "v-lazy-image";
import axios from "axios";
import { onMounted, ref, computed, watch } from "vue";
export default {
  setup() {
    const show_berita = ref([]);
    const perPage = 2;
    let currentPage = ref(1);
    let totalBerita = ref(0);
    let totalPages = ref(0);
    let show_berita_hot = ref([]);
    let show_berita_top = ref([]);
    let getTahun = ref([]);
    let tahunIni = ref(new Date().getFullYear())

    const formatDesc = (desc) => {
      return desc.substring(1, 150);
    };

    const loadBerita = async (page) => {
      try {
        const response = await axios.get(
          `https://admin-sinarmetrindo.airartikennels.co.id/api/show_berita?page=${page}&year=${tahunIni.value}`
          // `http://127.0.0.1:8000/api/show_berita?page=${page}&year=${tahunIni.value}`
        );
        // console.log(tahunIni,"year");
        // console.log(response,"pertahun");
        show_berita.value = response.data.data;
        totalBerita.value = response.data.total;
        totalPages.value = response.data.last_page;
      } catch (error) {
        // console.log(error);
        console.error("Failed Load News!");
      }
    };

    const loadPage = (page,tahun) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        // console.log(tahun);
        tahunIni.value =tahun; 
        
        loadBerita(page);
      }
    };

    onMounted(() => {
      loadBerita(currentPage.value);

      axios
        .get(
          "https://admin-sinarmetrindo.airartikennels.co.id/api/show_berita_hot"
          // "http://127.0.0.1:8000/api/show_berita_hot"
        )
        .then((result) => {
          // console.log(result);
          show_berita_hot.value = result.data;
        })
        .catch((err) => {
          // console.log(err);
        });

      axios
        .get(
          "https://admin-sinarmetrindo.airartikennels.co.id/api/show_berita_top"
          // "http://127.0.0.1:8000/api/show_berita_top"
        )
        .then((result) => {
          // console.log(result);
          show_berita_top.value = result.data;
        })
        .catch((err) => {
          // console.log(err);
        });
        
      axios
        .get(
          "https://admin-sinarmetrindo.airartikennels.co.id/api/show_tahun"
          // "http://127.0.0.1:8000/api/show_tahun"
        )
        .then((result) => {
          getTahun.value = result.data;
          // console.log(getTahun,"tahuuuun");
        })
        .catch((err) => {
          // console.log(err);
        });
    });

    const visiblePages = computed(() => {
      const range = 2; // Jumlah halaman sebelum dan sesudah halaman aktif yang akan ditampilkan
      const start = Math.max(currentPage.value - range, 1);
      const end = Math.min(currentPage.value + range, totalPages.value);

      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    });

    const paginatedBerita = ref([]);
    watch(
      show_berita,
      () => {
        paginatedBerita.value = show_berita.value.slice(
          (currentPage.value - 1) * perPage,
          currentPage.value * perPage
        );
      },
      { immediate: true }
    );
    return {
      show_berita,
      paginatedBerita,
      currentPage,
      totalPages,
      loadPage,
      visiblePages,
      show_berita_hot,
      show_berita_top,
      getTahun,
      formatDesc,
      tahunIni
    };
  },
  components: {
    VLazyImage,
  },
};
</script>
