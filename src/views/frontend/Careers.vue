<template>
  <!-- Page Title
  =============================================-->
  <section id="page-title" class="nobg">
    <div class="container clearfix">
      <h1>Careers</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Careers</li>
      </ol>
    </div>
  </section>
  <!-- #page-title end -->
  <!-- Content
		============================================= -->
  <section id="content">
    <div class="content-wrap">
      <div class="container clearfix">
        <div class="row clearfix center divcenter" style="max-width: 1200px">
          <div class="col-lg-12">
            <div class="heading-block center">
              <h3>Simetri Job Career</h3>
              <span
                >How we do things resonates with you, we welcome you to join
                us.</span
              >
            </div>
            <div class="content">
              <div class="row py-30">
                <div
                  v-for="(career, index) in career.data"
                  :key="index"
                  class="col-md-6 col-xl-3"
                >
                  <!-- Developer Plan -->
                  <a
                    class="
                      block block-link-pop block-rounded block-bordered
                      text-center
                    "
                    href="mailto:recruitment@simetriputra.co.id"
                  >
                    <div class="block-header">
                      <h3 class="block-title font-w600">
                        <i class="fa fa-briefcase"></i> {{ career.nama_career }}
                      </h3>
                    </div>
                    <div class="block-content bg-body-light">
                      <img
                        class="rounded mx-auto d-block"
                        alt="jobpicture"
                        :src="'http://127.0.0.1:8000/' + career.gambar_career"
                      />
                    </div>
                    <div class="block-content">
                      <p><strong>Job Description:</strong></p>
                      <p>{{ career.desc_career }}</p>
                    </div>
                    <div class="block-content">
                      <p><strong>Job Requirements:</strong></p>
                      <p>{{ career.require_career }}</p>
                    </div>
                    <div class="block-content block-content-full">
                      <span
                        class="
                          btn
                          btn-hero
                          btn-sm
                          btn-rounded
                          btn-noborder
                          btn-primary
                        "
                        >Apply Now</span
                      >
                    </div>
                  </a>
                  <!-- END Developer Plan -->
                </div>
              </div>
            </div>

            <div id="faqs-list">
              <div class="row align-items-stretch grid-border clearfix"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="line"></div>

      <!--  -->
    </div>
  </section>
  <!-- #content end -->
</template>
<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    let career = ref([]);

    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/show_career")
        .then((result) => {
          career.value = result.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });
    return {
      career,
    };
  },
  methods: {
    toggleOpen: function (index) {
      this.career = this.career.map((joblist, i) => {
        if (index === i) {
          joblist.open = !joblist.open;
        }

        return joblist;
      });
    },
  },
};
</script>
<style>
/* .joblist {
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 15px auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
}

.toggle {
  position: relative;
  color: #3c3c3c;
  font-size: 20px;
  height: 20px;
  transition: all 0.4s linear;
}

.toggle::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  rotate: (0deg);

  width: 35px;
  margin: 8px;
  height: 35px;
  background-image: url("../src/assets/style/images/bluearrow.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.toggle-content {
  color: #3c3c3c;
  font-size: 18px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}

.joblist.open {
  background-color: red;
} */
</style>