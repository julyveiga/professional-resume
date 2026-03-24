import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Mostra no terminal a URL correta (com base path) e lembra o hard refresh. */
function devHintsPlugin(): Plugin {
  return {
    name: 'dev-hints',
    configureServer(server) {
      server.httpServer?.once('listening', () => {
        const port = server.config.server.port ?? 5173
        const base = server.config.base.replace(/\/$/, '') || ''
        const url = `http://localhost:${port}${base}/`
        // console.log: URL visível mesmo se o logger do Vite filtrar cores
        console.log('\n\x1b[32m──────────────────────────────────────────────────\x1b[0m')
        console.log('\x1b[1m  Abra esta URL no browser (Cursor ou Chrome/Safari):\x1b[0m')
        console.log(`\x1b[36m  ${url}\x1b[0m`)
        console.log('\x1b[33m  Se não vir alterações: Cmd+Shift+R (hard refresh)\x1b[0m')
        console.log('\x1b[32m──────────────────────────────────────────────────\x1b[0m\n')
      })
    },
  }
}

export default defineConfig({
  base: '/professional-resume/', // GitHub Pages base path - Nome do repositório
  server: {
    port: 5173,
    // Se 5173 estiver ocupada, o Vite FALHA em vez de mudar para 5174 (evita ver site antigo noutra porta).
    strictPort: true,
    // Abre o browser com HTTP no path certo (evita erro "invalid response" por usar https:// em localhost).
    open: '/professional-resume/',
    headers: {
      'Cache-Control': 'no-store',
    },
    // Polling: ficheiros em iCloud Drive, “Documents” sincronizado ou alguns discos não disparam
    // eventos de FS fiáveis no Node — isto força o Vite a detetar gravações.
    watch: {
      usePolling: true,
      interval: 250,
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    devHintsPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
