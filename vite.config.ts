import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve('./src')
    }
  },
  base:'./',
  server:{
    port:8000,
    host:'0.0.0.0',
    open:true,
    cors:true  // 允许跨域
  }
})
