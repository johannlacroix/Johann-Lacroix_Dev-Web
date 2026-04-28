import PagesMetaHead from '../components/PagesMetaHead';

function Freelance() {
	return (
		<div className="container mx-auto px-4 sm:px-0 py-12 sm:py-16">
			<PagesMetaHead
				title="Parcours Freelance | Johann Lacroix"
				description="Offre freelance de Johann Lacroix: creation de site, SEO et optimisation continue."
				keywords="freelance web, creation site, seo, optimisation site"
			/>

			<section>
				<p className="text-indigo-500 font-general-medium uppercase tracking-wide text-sm sm:text-base">
					Parcours freelance
				</p>
				<h1 className="font-general-semibold text-3xl sm:text-4xl mt-3 text-ternary-dark dark:text-primary-light">
					Un accompagnement web clair et oriente resultats
				</h1>
				<p className="mt-5 max-w-3xl text-lg text-gray-600 dark:text-gray-200">
					J&apos;aide les entreprises a creer ou faire evoluer leur site avec une
					approche simple : clarifier le message, structurer les pages et
					renforcer la visibilite SEO.
				</p>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Offre
				</h2>
				<ul className="mt-4 grid gap-3 text-gray-600 dark:text-gray-200">
					<li>Creation ou refonte de site vitrine professionnel</li>
					<li>Optimisation SEO on-site et contenu des pages cles</li>
					<li>Amelioration de l&apos;existant (clarte et parcours utilisateur)</li>
					<li>Maintenance et evolutions progressives dans le temps</li>
				</ul>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Benefices client
				</h2>
				<ul className="mt-4 grid gap-3 text-gray-600 dark:text-gray-200">
					<li>Un site plus lisible et plus credible pour vos prospects</li>
					<li>Une base SEO solide pour soutenir votre visibilite</li>
					<li>Un accompagnement structure sans jargon inutile</li>
					<li>Un interlocuteur unique de la strategie a l&apos;execution</li>
				</ul>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Exemples concrets
				</h2>
				<div className="mt-5 rounded-lg bg-white dark:bg-ternary-dark p-6 shadow-sm">
					<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
						Kapsloc - missions de gestion de projet digital (freelance)
					</p>
					<p className="mt-2 text-gray-600 dark:text-gray-200">
						Cadre principal d&apos;intervention freelance : pilotage de projets
						web, coordination client, suivi technique, deploiement et
						contribution aux evolutions. Certains projets, dont Symabat, sont
						menes dans ce contexte.
					</p>
				</div>
				<div className="mt-5 grid gap-6">
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-6 shadow-sm">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							Symabat (cas principal)
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Pilotage long terme avec objectifs d&apos;acquisition et de
							developpement business : structuration, SEO, contenu, maintenance
							et evolutions continues.
						</p>
					</div>
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-6 shadow-sm">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							dromarwahab.com
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Travail de clarte de message et d&apos;organisation des contenus pour
							une presence en ligne plus efficace.
						</p>
					</div>
				</div>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Parlons de votre projet
				</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-200 max-w-3xl">
					Vous avez un site a creer, refondre ou optimiser ? Je peux vous
					proposer une premiere orientation concrete.
				</p>
				<div className="mt-6 flex flex-col sm:flex-row gap-4">
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="inline-flex justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg duration-300"
					>
						Discuter de mon projet
					</a>
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="inline-flex justify-center border border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-ternary-dark px-6 py-3 rounded-lg duration-300"
					>
						LinkedIn
					</a>
				</div>
			</section>
		</div>
	);
}

export default Freelance;
