import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
import { vueI18n } from "./i18n/i18n.helper";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vueI18n);

app.mount("#app");
