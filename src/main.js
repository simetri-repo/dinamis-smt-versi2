
import { createApp } from "vue";
import router from "./router";
import headmenus from "./views/frontend/Header.vue";
import App from "./App.vue";




const app = createApp(App);
app.use(router);
app.mount("#app");

const headm = createApp(headmenus);
headm.use(router);
headm.mount("#headmenu");

// const footm = createApp(footmenus);
// footm.use(router);
// footm.mount("#footmenu");


