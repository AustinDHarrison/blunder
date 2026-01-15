import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import loadContent from './lib/content/loadContent.cjs'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    allowedHosts: ["lab.austindharrison.com"],
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  define: {
    __POSTS__: JSON.stringify(loadContent("posts")),
    __PAGES__: JSON.stringify(loadContent("pages")),
  },
})