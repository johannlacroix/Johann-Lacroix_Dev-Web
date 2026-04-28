import Link from 'next/link';
import PagesMetaHead from '../PagesMetaHead';

const V2Layout = ({ children }) => {
	return (
		<div
			className="min-h-screen bg-white text-slate-900"
			style={{ fontFamily: 'Inter, Geist, system-ui, sans-serif' }}
		>
			<PagesMetaHead />
			<header className="border-b border-slate-200/80 sticky top-0 bg-white/90 backdrop-blur z-20">
				<div className="mx-auto w-full max-w-[1100px] px-6 md:px-12 py-4 flex items-center justify-between">
					<Link
						href="/"
						className="font-semibold tracking-tight text-slate-900 hover:text-blue-600 transition-colors"
					>
						Johann Lacroix
					</Link>
					<nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
						<Link href="/" className="hover:text-blue-600 transition-colors">
							Accueil
						</Link>
						<Link
							href="/recruteur"
							className="hover:text-blue-600 transition-colors"
						>
							Recruteur
						</Link>
						<Link
							href="/freelance"
							className="hover:text-blue-600 transition-colors"
						>
							Freelance
						</Link>
					</nav>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
};

export default V2Layout;
