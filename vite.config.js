import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Components from 'unplugin-vue-components/vite' // 💡 Nuevo
import Icons from 'unplugin-icons/vite' //

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
    }),
    Components({
      // 💡 Importante: Esto permite la importación automática de componentes
      // de BootstrapVueNext y ahora también los íconos.
      dirs: ['src/components', 'src/pages'], // Asegúrate que incluye tus directorios
      dts: true, // Genera un archivo de tipos (TypeScript)

      // 3. Añade los resolutores para los íconos y otros componentes.
      resolvers: [
        // Esto resuelve automáticamente los componentes de íconos que uses:
        // ej: BIconHouseFill, BIconTruck
        (componentName) => {
          if (componentName.startsWith('BIcon')) {
            // Devuelve un objeto con la librería de la que importará el ícono.
            // El nombre del icono debe resolverse internamente por Icons().
            return { name: componentName, from: 'bootstrap-vue-next' };
          }
        },
        // Si estás usando otros resolvers, agrégalos aquí.
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
