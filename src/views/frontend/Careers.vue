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
            <!-- accordion -->
            <div class="container">
              <div class="accordion accordion-flush" id="app">
                <div
                  class="accordion-item"
                  v-for="(career, id) in career"
                  :key="id"
                >
                  <h2 class="accordion-header" :id="career.id_career">
                    <button
                      class="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#flush-collapseOne' + career.id_career"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                      style=""
                    >
                      {{ career.nama_career }}
                    </button>
                  </h2>
                  <div
                    :id="'flush-collapseOne' + career.id_career"
                    class="accordion-collapse collapse"
                    :aria-labelledby="career.id_career"
                    data-bs-parent="#app"
                    style=""
                  >
                    <div class="accordion-body">
                      <div class="row">
                        <div
                          class="col-md-6 text-start"
                          style="padding: 10px 0px 0px 30px; dispaly: block"
                        >
                          <p><strong>Job Description:</strong></p>
                          <p v-html="career.desc_career"></p>
                        </div>
                        <div
                          class="col-md-6 text-start"
                          style="padding: 10px 0px 0px 30px; dispaly: block"
                        >
                          <p><strong>Job Requirements:</strong></p>
                          <p v-html="career.require_career"></p>
                        </div>
                      </div>

                      <a
                        class="btn btn-hero btn-sm btn-rounded btn-noborder"
                        style="background: rgb(8, 66, 124); color: #e8e8e8"
                        :href="'mailto:' + career.email_career"
                        >Apply Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- accordion end -->
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
import { onMounted, ref } from "vue";
import axios from "axios";
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
};
</script>
<style>
.accordion-button {
  font-size: 20px;
}

.accordion-item {
  border: 1px solid rgba(35, 65, 100, 0.15);
}

.accordion-button:not(.collapsed) {
  color: inherit;
  background: rgb(8, 66, 124);
  color: #e8e8e8;
}
</style>