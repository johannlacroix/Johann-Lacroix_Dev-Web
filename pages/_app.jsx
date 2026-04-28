import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import V2Layout from '../components/layout/V2Layout';
import UseScrollToTop from '../hooks/useScrollToTop';

function MyApp({ Component, pageProps }) {
	return (
		<AnimatePresence>
			<div className="bg-white transition duration-300">
				<V2Layout>
					<Component {...pageProps} />
				</V2Layout>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default MyApp;
