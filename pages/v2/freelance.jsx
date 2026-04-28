import PagesMetaHead from '../../components/PagesMetaHead';

function FreelanceV2() {
	return (
		<div className="mx-auto w-full max-w-[1100px] px-6 md:px-12 py-20 md:py-28">
			<PagesMetaHead
				title="V2 | Parcours Freelance | Johann Lacroix"
				description="Version B design premium de la page freelance."
				keywords="freelance web, creation site, seo, optimisation site"
			/>

			<section className="py-12 md:py-16">
				<p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-600">
					Parcours freelance
				</p>
				<h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
					Un accompagnement web clair et oriente resultats
				</h1>
				<p className="mt-8 max-w-[700px] text-lg leading-8 text-slate-600">
					J&apos;aide les entreprises a creer ou faire evoluer leur site avec une
					approche simple : clarifier le message, structurer les pages et
					renforcer la visibilite SEO.
				</p>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Offre
				</h2>
				<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
					<ul className="grid gap-3 leading-8 text-slate-600">
						<li>Creation ou refonte de site vitrine professionnel</li>
						<li>Optimisation SEO on-site et contenu des pages cles</li>
						<li>
							Amelioration de l&apos;existant (clarte et parcours utilisateur)
						</li>
						<li>Maintenance et evolutions progressives dans le temps</li>
					</ul>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Benefices client
				</h2>
				<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
					<ul className="grid gap-3 leading-8 text-slate-600">
						<li>Un site plus lisible et plus credible pour vos prospects</li>
						<li>Une base SEO solide pour soutenir votre visibilite</li>
						<li>Un accompagnement structure sans jargon inutile</li>
						<li>Un interlocuteur unique de la strategie a l&apos;execution</li>
					</ul>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Exemples concrets
				</h2>
				<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
					<p className="text-xl font-semibold text-slate-900">
						Kapsloc - missions de gestion de projet digital (freelance)
					</p>
					<p className="mt-3 text-slate-600 leading-8">
						Cadre principal d&apos;intervention freelance : pilotage de projets
						web, coordination client, suivi technique, deploiement et
						contribution aux evolutions. Certains projets, dont Symabat, sont
						menes dans ce contexte.
					</p>
				</div>
				<div className="mt-8 grid gap-6">
					<div className="rounded-2xl border border-blue-200 bg-blue-50 p-7 md:p-9 shadow-sm">
						<p className="text-xl font-semibold text-slate-900">
							Symabat (cas principal)
						</p>
						<p className="mt-3 text-slate-600 leading-8">
							Pilotage long terme avec objectifs d&apos;acquisition et de
							developpement business : structuration, SEO, contenu, maintenance
							et evolutions continues.
						</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
						<p className="text-xl font-semibold text-slate-900">
							dromarwahab.com
						</p>
						<p className="mt-3 text-slate-600 leading-8">
							Travail de clarte de message et d&apos;organisation des contenus pour
							une presence en ligne plus efficace.
						</p>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Parlons de votre projet
				</h2>
				<p className="mt-6 max-w-[700px] text-lg leading-8 text-slate-600">
					Vous avez un site a creer, refondre ou optimiser ? Je peux vous
					proposer une premiere orientation concrete.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4">
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 font-semibold transition-colors"
					>
						Discuter de mon projet
					</a>
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="inline-flex items-center justify-center rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 px-7 py-3.5 font-semibold transition-colors"
					>
						LinkedIn
					</a>
				</div>
			</section>
		</div>
	);
}

export default FreelanceV2;
