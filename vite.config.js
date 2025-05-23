import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig(({ mode }) => {
	const isDev = mode !== "production";
 
	return {
		base: '/TicTacToe/',
		plugins: [
		 react({
			babel: {
			  plugins: isDev ? ["check-prop-types"] : [],
			},
		 }),
	  ],
	};
 });