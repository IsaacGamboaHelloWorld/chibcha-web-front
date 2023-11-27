import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/chibcha-web-front/',
  plugins: [
    vue(),
  ],
  publicDir: './src/assets/',
  resolve: {
    alias: {
      '@': '/src/'
    },
  },
  css: {
    preprocessorOptions: {
      resolve: './src/assets/',
      sass: {
        resolve: './src/assets/',
        additionalData:
          `@import '@/sass/colors/bpop-colors.sass'\n` +
          `@import '@/sass/colors/bbog-colors.sass'\n` +
          `@import '@/sass/colors/bavv-colors.sass'\n` +
          `@import '@/sass/colors/bocc-colors.sass'\n` +
          `@import '@/sass/colors/main-colors.sass'\n`,
      },
    },
  },
});