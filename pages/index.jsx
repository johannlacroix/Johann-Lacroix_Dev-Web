import Link from 'next/link';
import { FiArrowRight, FiBriefcase, FiMail } from 'react-icons/fi';
import PagesMetaHead from '../components/PagesMetaHead';

export default function Home() {
	return (
		<div className="page-wrap">
			<PagesMetaHead
				title="Chef de projet digital | SEO | Johann Lacroix"
				description="Chef de projet digital et SEO. Profil hybride orienté recrutement et accompagnement freelance."
				keywords="chef de projet digital, seo, coordination projet web, freelance web"
			/>

			<section className="section-space">
				<div className="hero-shell">
					<p className="text-blue-600 font-general-medium text-sm sm:text-base uppercase tracking-wide">
						Johann Lacroix
					</p>
					<h1 className="h1-display mt-5">
						Chef de projet digital | SEO | Coordination de projets web
					</h1>
					<p className="hero-subtitle">
						J&apos;accompagne la creation et l&apos;evolution de projets web
					</p>
					<p className="body-copy mt-4">
						avec un objectif simple : des sites clairs, utiles et orientes
						resultats.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row gap-4">
						<Link href="/recruteur" className="cta-primary">
							<FiBriefcase />
							Recruter Johann
						</Link>
						<Link href="/freelance" className="cta-secondary">
							<FiArrowRight />
							Travailler avec moi
						</Link>
					</div>

					<div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-7 text-sm sm:text-base">
						<a
							href="https://www.linkedin.com/in/johannlacroix"
							target="__blank"
							className="font-general-medium text-slate-700 hover:text-blue-600 duration-300"
						>
							LinkedIn
						</a>
						<a
							href="mailto:johann.lacroix@gmail.com"
							className="inline-flex items-center gap-2 font-general-medium text-slate-700 hover:text-blue-600 duration-300"
						>
							<FiMail />
							johann.lacroix@gmail.com
						</a>
					</div>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Ce que j&apos;apporte
				</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="card-soft">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-primary-light">
							Pilotage digital
						</p>
						<p className="mt-3 leading-7 text-gray-700 dark:text-gray-200">
							Cadrage, priorisation, coordination et suivi de projets web.
						</p>
					</div>
					<div className="card-soft">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-primary-light">
							SEO operationnel
						</p>
						<p className="mt-3 leading-7 text-gray-700 dark:text-gray-200">
							Structuration des pages, contenus et bonnes pratiques pour la
							visibilite.
						</p>
					</div>
					<div className="card-soft">
						<p className="font-general-medium text-lg text-ternary-dark dark:text-primary-light">
							Execution web
						</p>
						<p className="mt-3 leading-7 text-gray-700 dark:text-gray-200">
							Interface entre besoins metier, production et mise en ligne.
						</p>
					</div>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Projet principal : Symabat
				</h2>
				<div className="mt-8 card-highlight">
					<p className="body-copy max-w-[48rem]">
						Projet historique que je pilote dans la duree : structuration,
						SEO, contenu, maintenance et evolution continue. Un cas concret
						de pilotage serieux, aligne sur des enjeux d&apos;acquisition et de
						developpement business.
					</p>
				</div>
				<div className="mt-10 flex flex-col sm:flex-row gap-4">
					<Link href="/recruteur" className="cta-primary">
						<FiBriefcase />
						Recruter Johann
					</Link>
					<Link href="/freelance" className="cta-secondary">
						<FiArrowRight />
						Travailler avec moi
					</Link>
				</div>
			</section>
		</div>
	);
}
