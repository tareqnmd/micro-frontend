import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		federation({
			name: 'remote_app',
			filename: 'remoteEntry.js',
			exposes: {
				'./Button': './src/components/Button',
				'./Header': './src/components/Header',
			},
			shared: ['react', 'react-dom'],
		}),
	],
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false,
	},
	preview: {
		port: 5001,
		strictPort: true,
		cors: true,
	},
});
