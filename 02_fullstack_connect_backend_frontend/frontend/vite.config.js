import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/*

By adding this to the config file, we are
essentially telling the vite server that its origin
is 'http://localhost:3000' so now both backend and frontend will 
have the same origin.
If this is not done, you will get CORS error

server: {
  proxy: {
    '/api': 'http://localhost:3000'
  },
},
*/

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
  },
  plugins: [react()],
})
