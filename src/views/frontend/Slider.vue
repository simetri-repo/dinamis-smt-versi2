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
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide1.png"
          class="d-block"
          style="max-height: 600px !important; width: 100%"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide2.png"
          class="d-block"
          style="max-height: 600px !important; width: 100%"
          alt="..."
        />
      </div>
      <div class="carousel-item">
        <v-lazy-image
          src="../../../src/assets/style/images/slider/slide3.png"
          class="d-block"
          style="max-height: 600px !important; width: 100%"
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
</template>

<script>
import VLazyImage from "v-lazy-image";
export default {
  components: {
    VLazyImage,
  },
};
</script>