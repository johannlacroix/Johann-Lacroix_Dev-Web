import Link from 'next/link';
import { FiArrowRight, FiBriefcase, FiMail } from 'react-icons/fi';
import PagesMetaHead from '../../components/PagesMetaHead';

export default function HomeV2() {
	return (
		<div className="mx-auto w-full max-w-[1100px] px-6 md:px-12 py-20 md:py-28">
			<PagesMetaHead
				title="V2 | Chef de projet digital | SEO | Johann Lacroix"
				description="Version B design premium du site de Johann Lacroix."
				keywords="chef de projet digital, seo, version b design"
			/>

			<section className="py-12 md:py-16">
				<p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-600">
					Johann Lacroix
				</p>
				<h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
					Chef de projet digital | SEO | Coordination de projets web
				</h1>
				<p className="mt-8 max-w-[700px] text-lg leading-8 text-slate-600">
					J&apos;accompagne la creation et l&apos;evolution de projets web avec
					un objectif simple : des sites clairs, utiles et orientes resultats.
				</p>

				<div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
					<div className="flex flex-col sm:flex-row gap-4">
						<Link
							href="/v2/recruteur"
							className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 font-semibold transition-colors"
						>
							<FiBriefcase />
							Recruter Johann
						</Link>
						<Link
							href="/v2/freelance"
							className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 px-7 py-3.5 font-semibold transition-colors"
						>
							<FiArrowRight />
							Travailler avec moi
						</Link>
					</div>
					<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-7 text-sm sm:text-base">
						<a
							href="https://www.linkedin.com/in/johannlacroix"
							target="__blank"
							className="font-medium text-slate-700 hover:text-blue-600"
						>
							LinkedIn
						</a>
						<a
							href="mailto:johann.lacroix@gmail.com"
							className="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-blue-600"
						>
							<FiMail />
							johann.lacroix@gmail.com
						</a>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Ce que j&apos;apporte
				</h2>
				<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-sm">
						<p className="text-lg font-semibold text-slate-900">
							Pilotage digital
						</p>
						<p className="mt-3 text-slate-600 leading-7">
							Cadrage, priorisation, coordination et suivi de projets web.
						</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-sm">
						<p className="text-lg font-semibold text-slate-900">
							SEO operationnel
						</p>
						<p className="mt-3 text-slate-600 leading-7">
							Structuration des pages, contenus et bonnes pratiques pour la
							visibilite.
						</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7 shadow-sm">
						<p className="text-lg font-semibold text-slate-900">
							Execution web
						</p>
						<p className="mt-3 text-slate-600 leading-7">
							Interface entre besoins metier, production et mise en ligne.
						</p>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Projet principal : Symabat
				</h2>
				<div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-7 md:p-9 shadow-sm">
					<p className="max-w-[700px] text-lg leading-8 text-slate-700">
						Projet historique que je pilote dans la duree : structuration,
						SEO, contenu, maintenance et evolution continue. Un cas concret de
						pilotage serieux, aligne sur des enjeux d&apos;acquisition et de
						developpement business.
					</p>
				</div>
			</section>
		</div>
	);
}
