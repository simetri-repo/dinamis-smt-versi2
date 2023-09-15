<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide m-0"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="5"
        aria-label="Slide 6"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide_header.jpg"
          class="d-block"
          style="max-height: 600px !important; width: 100%; object-fit: scale-down;"
          alt="..."
          id="show-popup"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide1.jpg"
          class="d-block"
          style="max-height: 600px !important; width: 100%; object-fit: scale-down;"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide3.jpg"
          class="d-block"
          style="max-height: 600px !important; width: 100%; object-fit: scale-down;"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide4.jpg"
          class="d-block"
          style="max-height: 600px !important; width: 100%; object-fit: scale-down;"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide5.jpg"
          class="d-block"
          style="max-height: 600px !important; width: 100%; object-fit: scale-down;"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide6.jpg"
          class="d-block"
          style="max-height: 600px !important; width: 100%; object-fit: scale-down;"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <div
  class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../../../src/assets/style/images/carousel/market2.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="../../../src/assets/style/images/carousel/market1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
  mounted() {
    this.showPopup();
  },
  methods: {
    showPopup() {
      const getimg = document.getElementById('show-popup');
      getimg.addEventListener('click', function(){
        new bootstrap.Modal(document.getElementById("exampleModal")).show();
      });
    },
  },
};
</script>