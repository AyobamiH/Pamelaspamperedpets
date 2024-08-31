// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     historyApiFallback: true, // Ensure client-side routing works
//     proxy: {
//       '/api': {
//         target: 'https://pamelas-pampered-pets-website-1.onrender.com',  // Your backend server
//         changeOrigin: true,
//         secure: false,
//       },
    
//     },
//     build: {
//     rollupOptions: {
//       external: ['passport', 'express-session'] // Exclude these from the client bundle
//     }
//   },
//     port: 5174,
    
//   },
  

// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       '/api': 'https://backend-c469.onrender.com/', // Adjust this to match your backend URL
//     },
//   },
// });
