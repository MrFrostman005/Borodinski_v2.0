import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './', // Указываем корень проекта, если нужно
  server: {
    open: true, // автоматически открывает браузер
  },
  build: {
    outDir: 'dist', // каталог для сборки
  },
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './'), // Псевдоним для корня проекта
    },
  },
})