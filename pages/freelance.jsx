import PagesMetaHead from '../components/PagesMetaHead';

function Freelance() {
	return (
		<div className="page-wrap">
			<PagesMetaHead
				title="Parcours Freelance | Johann Lacroix"
				description="Offre freelance de Johann Lacroix: creation de site, SEO et optimisation continue."
				keywords="freelance web, creation site, seo, optimisation site"
			/>

			<section className="section-space">
				<p className="text-indigo-500 font-general-medium uppercase tracking-wide text-sm sm:text-base">
					Parcours freelance
				</p>
				<h1 className="h1-display mt-4">
					Un accompagnement web clair et oriente resultats
				</h1>
				<p className="body-copy mt-8">
					J&apos;aide les entreprises a creer ou faire evoluer leur site avec une
					approche simple : clarifier le message, structurer les pages et
					renforcer la visibilite SEO.
				</p>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Offre
				</h2>
				<div className="mt-8 card-soft">
					<ul className="grid gap-3 leading-8 text-gray-700 dark:text-gray-200">
						<li>Creation ou refonte de site vitrine professionnel</li>
						<li>Optimisation SEO on-site et contenu des pages cles</li>
						<li>
							Amelioration de l&apos;existant (clarte et parcours utilisateur)
						</li>
						<li>Maintenance et evolutions progressives dans le temps</li>
					</ul>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Benefices client
				</h2>
				<div className="mt-8 card-soft">
					<ul className="grid gap-3 leading-8 text-gray-700 dark:text-gray-200">
						<li>Un site plus lisible et plus credible pour vos prospects</li>
						<li>Une base SEO solide pour soutenir votre visibilite</li>
						<li>Un accompagnement structure sans jargon inutile</li>
						<li>Un interlocuteur unique de la strategie a l&apos;execution</li>
					</ul>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Exemples concrets
				</h2>
				<div className="mt-8 card-soft">
					<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
						Kapsloc - missions de gestion de projet digital (freelance)
					</p>
					<p className="mt-3 leading-8 text-gray-700 dark:text-gray-200">
						Cadre principal d&apos;intervention freelance : pilotage de projets
						web, coordination client, suivi technique, deploiement et
						contribution aux evolutions. Certains projets, dont Symabat, sont
						menes dans ce contexte.
					</p>
				</div>
				<div className="mt-8 grid gap-6">
					<div className="card-highlight">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							Symabat (cas principal)
						</p>
						<p className="mt-3 leading-8 text-gray-700 dark:text-gray-200">
							Pilotage long terme avec objectifs d&apos;acquisition et de
							developpement business : structuration, SEO, contenu, maintenance
							et evolutions continues.
						</p>
					</div>
					<div className="card-soft">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							dromarwahab.com
						</p>
						<p className="mt-3 leading-8 text-gray-700 dark:text-gray-200">
							Travail de clarte de message et d&apos;organisation des contenus pour
							une presence en ligne plus efficace.
						</p>
					</div>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Parlons de votre projet
				</h2>
				<p className="body-copy mt-6">
					Vous avez un site a creer, refondre ou optimiser ? Je peux vous
					proposer une premiere orientation concrete.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4">
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="cta-primary"
					>
						Discuter de mon projet
					</a>
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="cta-secondary"
					>
						LinkedIn
					</a>
				</div>
			</section>
		</div>
	);
}

export default Freelance;
