import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import DefaultLayout from '../components/layout/DefaultLayout';
import V2Layout from '../components/layout/V2Layout';
import UseScrollToTop from '../hooks/useScrollToTop';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const isV2Route = router.pathname.startsWith('/v2');
	const Layout = isV2Route ? V2Layout : DefaultLayout;

	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Layout>
					<Component {...pageProps} />
				</Layout>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default MyApp;
