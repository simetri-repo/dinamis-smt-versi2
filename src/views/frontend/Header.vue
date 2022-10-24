
<template>
  <ul
    class="
      navbar-nav
      me-auto
      mb-2 mb-lg-0
      position-relative
      top-0
      start-50
      translate-middle-x
    "
  >
    <!-- <li class="current"> -->
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :href="$router.resolve({ name: 'simetri.index' }).href"
        :class="activeClass('')"
        >Home</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :href="$router.resolve({ name: 'simetri.product' }).href"
        :class="activeClass('product')"
        >Product Services</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('ourcompany')"
        :href="$router.resolve({ name: 'simetri.ourcompany' }).href"
        >Our Company</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('project')"
        :href="$router.resolve({ name: 'simetri.project' }).href"
        >Projects</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('partner')"
        :href="$router.resolve({ name: 'simetri.partner' }).href"
        >Partner & Client</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('news')"
        :href="$router.resolve({ name: 'simetri.news' }).href"
        >News</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('careers')"
        :href="$router.resolve({ name: 'simetri.careers' }).href"
        >Careers</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('csr')"
        :href="$router.resolve({ name: 'simetri.csr' }).href"
        >CSR</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('certificate')"
        :href="$router.resolve({ name: 'simetri.certificate' }).href"
        >Certificate</a
      >
    </li>
    <li class="nav-item fw-bold px-2">
      <a
        class="nav-link"
        :class="activeClass('contact')"
        :href="$router.resolve({ name: 'simetri.contact' }).href"
        >Contact</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "headmenus",
  data() {
    return {
      currentLink: location.href,
    };
  },
  computed: {
    routes() {
      return window.routes;
    },
  },
  mounted() {
    this.setCurrentLink();
  },
  methods: {
    route(url) {
      return this.routes.route(url);
    },
    activeClass(segment) {
      return segment == this.currentLink ? "active" : "";
    },
    setCurrentLink() {
      this.currentLink = new URL(location.href).pathname.split("/").pop();
    },
  },
};
</script>
