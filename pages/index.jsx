import Link from 'next/link';
import { FiArrowRight, FiBriefcase, FiMail } from 'react-icons/fi';
import PagesMetaHead from '../components/PagesMetaHead';

export default function Home() {
	return (
		<div className="container mx-auto px-4 sm:px-0">
			<PagesMetaHead
				title="Chef de projet digital | SEO | Johann Lacroix"
				description="Chef de projet digital et SEO. Profil hybride orienté recrutement et accompagnement freelance."
				keywords="chef de projet digital, seo, coordination projet web, freelance web"
			/>

			<section className="py-12 sm:py-16">
				<p className="text-indigo-500 font-general-medium text-sm sm:text-base uppercase tracking-wide">
					Johann Lacroix
				</p>
				<h1 className="font-general-semibold text-3xl sm:text-4xl lg:text-5xl mt-3 text-ternary-dark dark:text-primary-light leading-tight">
					Chef de projet digital | SEO | Coordination de projets web
				</h1>
				<p className="mt-6 text-lg text-gray-600 dark:text-gray-200 max-w-3xl">
					J&apos;accompagne la creation et l&apos;evolution de projets web
					avec un objectif simple : des sites clairs, utiles et orientes
					resultats.
				</p>

				<div className="mt-8 flex flex-col sm:flex-row gap-4">
					<Link
						href="/recruteur"
						className="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md duration-300"
					>
						<FiBriefcase />
						Recruter Johann
					</Link>
					<Link
						href="/freelance"
						className="inline-flex items-center justify-center gap-2 border border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-ternary-dark px-6 py-3 rounded-lg duration-300"
					>
						<FiArrowRight />
						Travailler avec moi
					</Link>
				</div>

				<div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm sm:text-base">
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 duration-300"
					>
						LinkedIn
					</a>
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="inline-flex items-center gap-2 text-ternary-dark dark:text-ternary-light hover:text-indigo-500 dark:hover:text-indigo-400 duration-300"
					>
						<FiMail />
						johann.lacroix@gmail.com
					</a>
				</div>
			</section>

			<section className="py-10 border-t border-primary-light dark:border-secondary-dark">
				<h2 className="font-general-medium text-2xl sm:text-3xl text-ternary-dark dark:text-primary-light">
					Ce que j&apos;apporte
				</h2>
				<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-5 shadow-sm">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-primary-light">
							Pilotage digital
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Cadrage, priorisation, coordination et suivi de projets web.
						</p>
					</div>
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-5 shadow-sm">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-primary-light">
							SEO operationnel
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Structuration des pages, contenus et bonnes pratiques pour la
							visibilite.
						</p>
					</div>
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-5 shadow-sm">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-primary-light">
							Execution web
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Interface entre besoins metier, production et mise en ligne.
						</p>
					</div>
				</div>
			</section>

			<section className="py-10 border-t border-primary-light dark:border-secondary-dark">
				<h2 className="font-general-medium text-2xl sm:text-3xl text-ternary-dark dark:text-primary-light">
					Projet principal : Symabat
				</h2>
				<p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-200">
					Projet historique que je pilote dans la duree : structuration,
					SEO, contenu, maintenance et evolution continue. Un cas concret de
					pilotage serieux, aligne sur des enjeux d&apos;acquisition et de
					developpement business.
				</p>
			</section>
		</div>
	);
}
