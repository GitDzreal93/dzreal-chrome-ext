import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-vue"],
  manifest: {
    manifest_version: 3,
    host_permissions: ["<all_urls>"],
    name: "My Extension",
    description: "A sidebar plugin built with WXT and Vue 3",
    version: "1.0.0",
    permissions: ["sidePanel", "contextMenus"],
    icons: {
      "16": "./assets/images/icon-16.png",
      "48": "./assets/images/icon-48.png",
      "128": "./assets/images/icon-128.png",
    },
  },
  vite: () => ({
    build: {
      rollupOptions: {
        input: {
          sidebar: "src/pages/sidebar.html",
        },
      },
    },
  }),
});
