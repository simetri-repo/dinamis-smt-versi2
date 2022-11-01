<template>
  <!-- Page Title
		============================================= -->
  <section id="page-title" class="nobg">
    <div class="container clearfix">
      <h1>Switchboard</h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item" aria-current="page">Products</li>
      </ol>
    </div>
  </section>
  <!-- #page-title end -->
  <section id="content">
    <div class="content-wrap">
      <div>
        <div class="container clearfix">
          <div class="row align-items-stretch clearfix">
            <div class="col-lg-12">
              <p align="justify">
                Sinar Metrindo Perkasa (Simetri) gives answer for the need of
                high quality switchboard to regulate the flow of electricity
                safely within a building. Our highly experienced technicians
                provide neat power distribution installation. They will be ready
                to serve should there be any problems. Our portfolio cover
                projects from government agencies to private companies. Our
                switchboard has many advantages such as:
              </p>

              <div class="container clearfix">
                <div class="row align-items-stretch clearfix">
                  <div class="col-lg-6 col-md-6 bottommargin">
                    <div class="feature-box fbox-plain">
                      <div class="fbox-icon">
                        <a href="#">
                          <v-lazy-image
                            src="/src/assets/style/images/icons/icon1.png"
                            alt="Concrete Developments"
                          />
                        </a>
                      </div>
                      <p>It is compact-sized and easy to operate</p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 bottommargin">
                    <div class="feature-box fbox-plain">
                      <div class="fbox-icon">
                        <a href="#">
                          <v-lazy-image
                            src="src\assets\style\images\icons\icon2.png"
                            alt="Finance Assistance"
                          />
                        </a>
                      </div>
                      <p>
                        You can choose the components by your own preferences
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 bottommargin">
                    <div class="feature-box fbox-plain">
                      <div class="fbox-icon">
                        <a href="#">
                          <v-lazy-image
                            src="/src/assets/style/images/icons/icon3.png"
                            alt="Interiorly Designed"
                          />
                        </a>
                      </div>
                      <p>
                        It is made up of sectional compartments and bolt
                        assembled structure.
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 bottommargin">
                    <div class="feature-box fbox-plain">
                      <div class="fbox-icon">
                        <a href="#">
                          <v-lazy-image
                            src="/src/assets/style/images/icons/icon4.png"
                            alt="Cost Effective Solutions"
                          />
                        </a>
                      </div>
                      <p>Future extension and maintenance are easy to do</p>
                    </div>
                  </div>

                  <!-- <div class="row clearfix center divcenter" style="max-width: 960px">
            <div class="col-lg-12">
              <a href="/products" class="button button-3d topmargin">Browse More Products</a>
            </div>
          </div>-->
                </div>
              </div>
              <div class="divider divider-center divider-border">
                <i class="fas fa-angle-down"></i>
              </div>
              <!--  -->
            </div>

            <!-- <div class="col-lg-2">
              <button class="btn btn-lg btn-dark">our product here <i class="icon-arrow-down"></i></button>
            </div> -->
          </div>
        </div>

        <!-- <div class="line"></div> -->
        <div class="container clearfix">
          <div class="row align-items-stretch clearfix">
            <div class="col-12">
              <div class="heading-block bottommargin-sm">
                <h3>Product</h3>
              </div>
            </div>
            <!--  -->
            <div
              class="col-lg-6"
              v-for="(show_produk, index) in show_produk"
              :key="index"
            >
              <div class="feature-box media-box">
                <div class="fbox-media">
                  <v-lazy-image
                    :src="
                      'https://admin.sinarmetrindo.co.id/' +
                      show_produk.gambar_produk
                    "
                    alt="Why choose Us?"
                  />
                </div>
                <div class="fbox-desc">
                  <h3>{{ show_produk.nama_produk }}</h3>
                  <span class="subtitle" translate="no">{{
                    show_produk.nama_produk
                  }}</span>
                  <p align="justify">
                    {{ show_produk.keterangan_produk }}
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div class="col-lg-12 center" style="padding-top: 20px">
              <br />
              <a
                :href="`Brochure_Simetri_2018.pdf`"
                download
                class="btn btn-danger text-light m-2"
              >
                Download Brochure Product Simetri
              </a>
              <a
                :href="`Brochure_Matrix_2018.pdf`"
                download
                class="btn btn-danger text-light m-2"
              >
                Brochure Matrix
              </a>
              <a
                :href="`Brochure_Simetri_Sivacon_S8.pdf`"
                download
                class="btn btn-danger text-light m-2"
              >
                Brochure Sivacon S8
              </a>
            </div>
            <!--  -->
          </div>
        </div>

        <div class="divider divider-center divider-border">
          <i class="fas fa-cogs"></i>
        </div>
        <div class="container clearfix">
          <div class="row align-items-stretch clearfix">
            <div class="col-lg-12 bottommargin">
              <div class="heading-block bottommargin-sm">
                <h3>Services</h3>
              </div>

              <p align="justify">
                Simetri staffs and technicians have years of experience
                installing panel at various types of building. Our quality of
                work is based on the standards and regulations that are
                implemented by both government agencies and international
                organization for standardization. Therefore we guarantee a safe
                and reliable electric power distribution system for buildings.
                We offer a comprehensive range of service, installation,
                training, maintenance, repair, and design consultation.
                <br />
                <br />Simetri uses components from global brands such as
                Schneider, ABB, Siemens, and GE. We use high quality tools and
                equipment to ensure the high quality installation. We also
                provide the best after sales service because we fully prioritize
                customer satisfaction. We have a team of highly experienced
                engineers and service technicians who are ready to assist
                customers with all kind of switchboard related works. Simetri
                provides 24 hours standby full time service. Simetri
                switchboards are warranted for 1 year free of workmanship
                defect. Should there be any questions or issues, you can contact
                our company representatives through the contact page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- #content end -->
</template>

<script>
import VLazyImage from "v-lazy-image";
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    let show_produk = ref([]);
    onMounted(() => {
      axios
        .get("https://admin.sinarmetrindo.co.id/index.php/api/show_produk")
        .then((result) => {
          console.log(result);
          show_produk.value = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return {
      show_produk,
    };
  },
  components: {
    VLazyImage,
  },
};
</script>