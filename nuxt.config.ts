import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // vite: {
  //   plugins: [
  //     tailwindcss(),
  //   ],
  // },
  components: true, // ต้องเปิด
  modules: ["@nuxt/ui", "nuxt-monaco-editor"],
  monacoEditor: {
    // These are default values:
    // locale: 'en',
    componentName: {
      codeEditor: 'MonacoEditor',
    }
  }
});