import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src", // 将 '@' 别名映射到 'src' 目录
      vue: "vue/dist/vue.esm-bundler.js", // 使用完整版的 Vue.js
    },
  },
});
