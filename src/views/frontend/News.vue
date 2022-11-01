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
            <!--  -->
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
                        'https://admin.sinarmetrindo.co.id/' +
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
                      <span>
                        {{ show_berita_hot.keterangan_berita.substring(1, 250)
                        }}<b>. . .</b> </span
                      ><br />
                    </p>

                    <router-link
                      :to="{ name: 'simetri.news2' }"
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
                        'https://admin.sinarmetrindo.co.id/' +
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
                      :to="{ name: 'simetri.news1' }"
                      class="button button-border button-rounded"
                      >Read More</router-link
                    >
                  </div>
                </div>
              </div>
              <br />
              <!--  -->
            </div>

            <!--  -->
          </div>
        </div>
        <!-- daily -->
        <hr />
        <div class="col-sm-12">
          <div class="row">
            <div
              v-for="(show_berita, index) in show_berita"
              :key="index"
              class="col-sm-4"
            >
              <div class="entry clearfix">
                <div class="entry-image">
                  <a data-lightbox="image"
                    ><v-lazy-image
                      class="image_fade"
                      :src="
                        'https://admin.sinarmetrindo.co.id/' +
                        show_berita.gambar_berita
                      "
                      alt="Standard Post with Image"
                  /></a>
                </div>
                <div class="entry-c">
                  <div class="entry-title">
                    <h4
                      style="
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        width: 100%;
                      "
                    >
                      <a> {{ show_berita.nama_berita }} </a>
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
                      {{ show_berita.keterangan_berita.substring(0, 70)
                      }}<b>. . . </b>
                    </p>

                    <router-link
                      :to="{ name: 'simetri.news4' }"
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
          <button class="btn btn-primary" style="margin-right: 3px" disabled>
            1
          </button>
          <button
            href=""
            class="btn btn-info"
            style="margin-right: 3px"
            disabled
          >
            <i class="fas fa-angle-right"></i>
          </button>
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
import { onMounted, ref } from "vue";
export default {
  setup() {
    let show_berita = ref([]);
    let show_berita_hot = ref([]);
    let show_berita_top = ref([]);
    onMounted(() => {
      axios
        .get("https://admin.sinarmetrindo.co.id/index.php/api/show_berita")
        .then((result) => {
          console.log(result);
          show_berita.value = result.data;
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("https://admin.sinarmetrindo.co.id/index.php/api/show_berita_hot")
        .then((result) => {
          console.log(result);
          show_berita_hot.value = result.data;
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get("https://admin.sinarmetrindo.co.id/index.php/api/show_berita_top")
        .then((result) => {
          console.log(result);
          show_berita_top.value = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      show_berita,
      show_berita_hot,
      show_berita_top,
    };
  },
  components: {
    VLazyImage,
  },
};
</script>