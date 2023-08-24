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
            <div
              v-for="(show_berita_hot, index) in show_berita_hot"
              :key="index"
              class="col-sm-8"
            >
              <div class="clearfix">
                <div class="entry-image">
                  <a data-lightbox="image"
                    ><v-lazy-image
                      class="image_fade"
                      :src="
                        'https://admin-sinarmetrindo.airartikennels.co.id/' +
                        show_berita_hot.gambar_berita
                      "
                      alt="Standard Post with Image"
                  /></a>
                </div>
                <div class="entry-c">
                  <div class="entry-title">
                    <h4>
                      <a> {{ show_berita_hot.nama_berita }}</a>
                    </h4>
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
                    <p align="justify">
                      <span
                        v-html="formatDesc(show_berita_hot.keterangan_berita)"
                      ></span
                      ><b>. . .</b><br />
                    </p>

                    <router-link
                      :to="'/news/' + show_berita_hot.id_berita"
                      class="button button-border button-rounded"
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
                <div class="entry-image">
                  <a data-lightbox="image"
                    ><v-lazy-image
                      class="image_fade"
                      :src="
                        'https://admin-sinarmetrindo.airartikennels.co.id/' +
                        show_berita_top.gambar_berita
                      "
                      alt="Standard Post with Image"
                      style="height: auto"
                  /></a>
                </div>
                <div class="entry-c">
                  <div class="entry-title">
                    <h5>
                      <a>
                        {{ show_berita_top.nama_berita }}
                      </a>
                    </h5>
                  </div>
                  <div class="entry-content">
                    <router-link
                      :to="'/news/' + show_berita_top.id_berita"
                      class="button button-border button-rounded"
                      >Read More</router-link
                    >
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <!-- daily -->
        <hr />
        <div class="col-sm-12 mt-5 text-center rounded">
          <div class="row">
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
                        'http://127.0.0.1:8000/' + show_berita.gambar_berita
                      "
                      alt="Standard Post with Image"
                      style="height: 250px; width: 316px"
                  /></a>
                  <div class="px-2 py-2">
                    <div class="row">
                      <div class="float-start">
                        <i class="fa-solid fa-calendar-days"></i> |
                        {{ show_berita.updated_at }}
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
          </div>
          <!-- #posts end -->
        </div>
        <!-- paging -->
        <div class="col-sm-12 center">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a
                  class="page-link"
                  @click="loadPage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  style="cursor: pointer"
                  >Previous</a
                >
              </li>
              <li
                class="page-item"
                v-for="page in visiblePages"
                :key="page"
                @click="loadPage(page)"
                :class="{ active: page === currentPage }"
              >
                <a class="page-link">{{ page }}</a>
              </li>
              <li class="page-item">
                <a
                  class="page-link"
                  @click="loadPage(currentPage + 1)"
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

    const formatDesc = (desc) => {
      return desc.substring(1, 250);
    };

    const loadBerita = async (page) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/show_berita?page=${page}`
        );
        // console.log(response);
        show_berita.value = response.data.data;
        totalBerita.value = response.data.total;
        totalPages.value = response.data.last_page;
      } catch (error) {
        console.error("Error loading berita:", error);
      }
    };

    const loadPage = (page) => {
      if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        loadBerita(page);
      }
    };

    onMounted(() => {
      loadBerita(currentPage.value);

      axios
        .get(
          "https://admin-sinarmetrindo.airartikennels.co.id/api/show_berita_hot"
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
        )
        .then((result) => {
          // console.log(result);
          show_berita_top.value = result.data;
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
      formatDesc,
    };
  },
  components: {
    VLazyImage,
  },
};
</script>
