<template>
  <!-- Page Title
  =============================================-->
  <!-- <section
    id="page-title"
    class="page-title-parallax page-title-dark"
    data-center="background-position: 0px -100px;"
    data-top-bottom="background-position:0px 100px;"
  >
    <div class="container clearfix">
      <br />
      <h1>PT.Sinar Metrindo Perkasa</h1>
      <span>Electrical Switchboard and Building Automation System.</span>
    </div>
  </section> -->
  <!-- #page-title end -->
  <section
    id="slider"
    class="slider-element slider-parallax swiper_wrapper clearfix"
    style="height: 600px"
    data-loop="true"
  >
    <sld />
  </section>
  <!-- Content
  =============================================-->
  <section id="content">
    <div class="content-wrap">
      <div
        class="
          promo promo-light promo-full
          uppercase
          bottommargin-lg
          header-stick
        "
      >
        <div class="container justify-content-sm-center">
          <div class="row g-2">
            <div class="col-sm-10">
              <h3 align="center">
                THE FASTEST WAY TO ASK FOR THE ESTIMATED PRICE FOR YOUR PROJECT.
              </h3>
            </div>
            <div class="col-sm-2" align="center">
              <a
                href="mailto:sales@simetrigroup.co.id"
                class="btn btn-outline-dark border border-3 border-dark"
                >Start Now</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="container clearfix">
        <div class="clear-bottommargin">
          <div class="row align-items-stretch clearfix">
            <div class="col-lg-3 col-md-6 bottommargin">
              <div class="feature-box fbox-plain">
                <div class="fbox-icon">
                  <a href="#">
                    <img
                      src="/src/assets/style/images/icons/icon1.png"
                      alt="Concrete Developments"
                    />
                  </a>
                </div>
                <p>It is compact-sized and easy to operate</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 bottommargin">
              <div class="feature-box fbox-plain">
                <div class="fbox-icon">
                  <a href="#">
                    <img
                      src="/src/assets/style/images/icons/icon2.png"
                      alt="Finance Assistance"
                    />
                  </a>
                </div>
                <p>You can choose the components by your own preferences</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 bottommargin">
              <div class="feature-box fbox-plain">
                <div class="fbox-icon">
                  <a href="#">
                    <img
                      src="/src/assets/style/images/icons/icon3.png"
                      alt="Interiorly Designed"
                    />
                  </a>
                </div>
                <p>
                  It is made up of sectional compartments and bolt assembled
                  structure.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 bottommargin">
              <div class="feature-box fbox-plain">
                <div class="fbox-icon">
                  <a href="#">
                    <img
                      src="/src/assets/style/images/icons/icon4.png"
                      alt="Cost Effective Solutions"
                    />
                  </a>
                </div>
                <p>Future extension and maintenance are easy to do</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section nobottommargin">
        <h2 class="center nobottommargin ls1">
          Some of Our Esteemed Projects:
        </h2>
      </div>

      <div
        id="portfolio"
        class="portfolio grid-container portfolio-full clearfix"
      >
        <article class="portfolio-item pf-media pf-icons">
          <div class="portfolio-image">
            <img
              style="height: 180px"
              src="/src/assets/style/images/ngurahrai.jpg"
              alt="Wavelength Structure"
            />
          </div>
          <div class="portfolio-desc">
            <h3>Ngurah Rai Airport</h3>
            <h6>Bali, Indonesia</h6>
          </div>
        </article>

        <article class="portfolio-item pf-media pf-icons">
          <div class="portfolio-image">
            <img
              style="height: 180px"
              src="/src/assets/style/images/rsudtarakan.jpg"
              alt="Wavelength Structure"
            />
          </div>
          <div class="portfolio-desc">
            <h3>Tarakan Hospital</h3>
            <h6>Jakarta, Indonesia</h6>
          </div>
        </article>

        <article class="portfolio-item pf-media pf-icons">
          <div class="portfolio-image">
            <img
              style="height: 180px"
              src="/src/assets/style/images/bankindo.jpg"
              alt="Wavelength Structure"
            />
          </div>
          <div class="portfolio-desc">
            <h3>Bank Indonesia</h3>
            <h6>Jakarta, Indonesia</h6>
          </div>
        </article>

        <article class="portfolio-item pf-media pf-icons">
          <div class="portfolio-image">
            <img
              style="height: 180px"
              src="/src/assets/style/images/djarum.jpg"
              alt="Wavelength Structure"
            />
          </div>
          <div class="portfolio-desc">
            <h3>Djarum</h3>
            <h6>Jakarta, Indonesia</h6>
          </div>
        </article>
      </div>
    </div>
  </section>
  <!-- #content end -->
</template>

<script>
import sld from "./Slider.vue";
export default {
  name: "App",
  components: {
    sld,
  },
};
</script>
