import { createApp } from "vue";
import { createPinia } from "pinia"; // 引入 pinia
import App from "./App.vue";

const pinia = createPinia(); // 创建 pinia 实例
const app = createApp(App);

app.use(pinia); // 使用 pinia 实例
app.mount("#app");
