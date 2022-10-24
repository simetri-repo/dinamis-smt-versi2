<template>
  <!-- Footer
		============================================= -->
  <footer id="footer" class="dark">
    <div class="container">
      <!-- Footer Widgets
				============================================= -->
      <div class="footer-widgets-wrap clearfix">
        <div class="col_two_third">
          <div class="widget clearfix">
            <img
              src="/src/assets/style/images/logo.png"
              alt=""
              class="alignleft"
              style="
                margin-top: 8px;
                padding-right: 18px;
                border-right: 1px solid #4a4a4a;
                width: 95px;
              "
            />

            <p style="font-size: 30px; padding-top: 15px">
              Growth With The Nation, Good For The People.
            </p>

            <div class="line" style="margin: 30px 0"></div>

            <div class="row">
              <div class="col-lg-3 col-6 bottommargin-sm widget_links">
                <ul>
                  <li>
                    <!-- { name: 'simetri.contact' }).href" -->
                    <a :href="$router.resolve({ name: 'simetri.index' }).href"
                      >Home</a
                    >
                  </li>
                  <li>
                    <a
                      :href="
                        $router.resolve({ name: 'simetri.ourcompany' }).href
                      "
                      >About</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.contact' }).href"
                      >Contact</a
                    >
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-6 bottommargin-sm widget_links">
                <ul>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.product' }).href"
                      >Genset Control System</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.product' }).href"
                      >Low Voltage Main Distribution Panel</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.product' }).href"
                      >Power Factor Correction System</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.product' }).href"
                      >Distribution</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.product' }).href"
                      >Pump Controller</a
                    >
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-6 bottommargin-sm widget_links">
                <ul>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.project' }).href"
                      >Finished Projects</a
                    >
                  </li>
                  <li>
                    <a
                      :href="
                        $router.resolve({ name: 'simetri.certificate' }).href
                      "
                      >Official Certifications</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.contact' }).href"
                      >Contact Info</a
                    >
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-6 bottommargin-sm widget_links">
                <ul>
                  <li>
                    <a
                      :href="
                        $router.resolve({ name: 'simetri.ourcompany' }).href
                      "
                      >About Our Company</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.news' }).href"
                      >News</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.careers' }).href"
                      >Work with Us</a
                    >
                  </li>
                  <li>
                    <a :href="$router.resolve({ name: 'simetri.csr' }).href"
                      >Our Contributions</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col_one_third col_last" style="margin-top: 130px">
          <div class="widget clear-bottommargin-sm clearfix">
            <div class="row">
              <div class="col-lg-6 bottommargin-sm">
                <div class="footer-big-contacts">
                  <span>Jakarta:</span>
                  <p style="padding-bottom: -50px">021-58906959</p>
                  <span>Surabaya:</span>
                  <p>031-5967623</p>
                </div>
              </div>

              <div class="col-lg-6 bottommargin-sm">
                <div class="footer-big-contacts">
                  <span>Contact us:</span>
                  <p>marketing@sinarmetrindo.co.id</p>
                  <span>Project Related:</span>
                  <p>sales@simetrigroup.co.id</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="widget subscribe-widget clearfix"
            style="margin-top: 10px"
          >
            <div class="row">
              <div class="col-lg-6 clearfix bottommargin-sm">
                <a
                  href="https://web.facebook.com/PTSinarMetrindoPerkasa?_rdc=1&_rdr"
                  target="blank"
                  class="
                    social-icon
                    si-dark si-colored si-facebook
                    nobottommargin
                  "
                  style="margin-right: 10px"
                >
                  <i class="fab fa-facebook-square fa-2x"></i>
                  <i class="fab fa-facebook-square fa-2x"></i>
                </a>
                <a
                  href="https://web.facebook.com/PTSinarMetrindoPerkasa?_rdc=1&_rdr"
                  target="blank"
                  ><small style="display: block; margin-top: 3px"
                    ><strong>Like us</strong><br />on Facebook</small
                  ></a
                >
              </div>
              <div class="col-lg-6 clearfix">
                <a
                  href="https://www.instagram.com/sinarmetrindo/?hl=id"
                  target="blank"
                  class="
                    social-icon
                    si-dark si-colored si-instagram
                    nobottommargin
                  "
                  style="margin-right: 10px"
                >
                  <i class="fab fa-instagram-square fa-2x"></i>
                  <i class="fab fa-instagram-square fa-2x"></i>
                </a>
                <a
                  href="https://www.instagram.com/sinarmetrindo/?hl=id"
                  target="blank"
                  ><small style="display: block; margin-top: 3px"
                    ><strong>See us</strong><br />on Instagram</small
                  ></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- .footer-widgets-wrap end -->
    </div>

    <!-- Copyrights
			============================================= -->
    <div id="copyrights">
      <div class="container clearfix">
        <div class="col_half">
          Copyrights &copy; 2021 All Rights Reserved by Sinar Metrindo
          Perkasa.<br />
          <div class="copyright-links">
            <a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a>
          </div>
        </div>

        <div class="col_half col_last tright">
          <div class="copyrights-menu copyright-links clearfix">
            <a href="#">Home</a>/<a href="#">About Us</a>/<a href="#">Team</a
            >/<a href="#">Clients</a>/<a href="#">FAQs</a>/<a href="#"
              >Contact</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- #copyrights end -->
  </footer>
  <!-- #footer end -->
</template>

<script>
export default {
  methods: {
    currentDate() {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    },
  },
};
</script>
