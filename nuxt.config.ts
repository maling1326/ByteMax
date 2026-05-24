import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["reentry-strangely-evacuate.ngrok-free.dev", "*"],
    },
  },

  modules: ["@nuxt/fonts"],

  fonts: {
    families: [
      { name: "DM Sans", provider: "google" },
      { name: "Cormorant Garamond", provider: "google" },
      { name: "JetBrains Mono", provider: "google" },
      { name: "Italiana", provider: "google" },
    ],
  },
});