import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'quadrafroyn-email-unconfigured',
    configureServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        res.statusCode = 503;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ success: false, error: 'Email delivery is not configured. Please contact us by email.' }));
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/send-email', (req, res) => {
        res.statusCode = 503;
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.end(JSON.stringify({ success: false, error: 'Email delivery is not configured. Please contact us by email.' }));
      });
    },
  }],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
