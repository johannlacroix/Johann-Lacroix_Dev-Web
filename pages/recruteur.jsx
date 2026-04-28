import PagesMetaHead from '../components/PagesMetaHead';

function Recruteur() {
	return (
		<div className="page-wrap">
			<PagesMetaHead
				title="Parcours Recruteur | Johann Lacroix"
				description="Parcours recruteur de Johann Lacroix: gestion de projet digital, SEO et coordination web."
				keywords="parcours recruteur, chef de projet digital, seo, coordination web"
			/>

			<section className="section-space">
				<p className="text-indigo-500 font-general-medium uppercase tracking-wide text-sm sm:text-base">
					Parcours recruteur
				</p>
				<h1 className="h1-display mt-4">
					Un profil hybride pour faire avancer les projets web
				</h1>
				<p className="body-copy mt-8">
					Je combine gestion de projet digital, SEO et culture web
					operationnelle. Mon role : transformer les besoins en plan d&apos;action
					clair, coordonner les parties prenantes et suivre l&apos;execution jusqu&apos;au
					resultat.
				</p>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Parcours
				</h2>
				<p className="body-copy mt-6">
					Mon parcours s&apos;est construit sur des projets concrets avec une
					montee progressive en responsabilite. Symabat est le projet avec
					lequel j&apos;ai demarre la gestion de projet digital et que je continue
					a piloter aujourd&apos;hui dans une logique d&apos;amelioration continue.
				</p>
				<div className="mt-8 card-soft">
					<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
						Kapsloc - missions de gestion de projet digital (freelance)
					</p>
					<p className="mt-3 leading-8 text-gray-700 dark:text-gray-200">
						Intervention en environnement client sur le pilotage de projets
						web, la coordination avec les interlocuteurs metier, le suivi
						technique et le deploiement. Certains projets, dont Symabat, sont
						realises dans ce cadre professionnel.
					</p>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Competences
				</h2>
				<div className="mt-8 card-soft">
					<ul className="grid gap-3 leading-8 text-gray-700 dark:text-gray-200">
						<li>
							Gestion de projet digital : cadrage, priorisation et suivi
						</li>
						<li>SEO : structuration de pages et optimisation de contenus</li>
						<li>Coordination : lien entre metier, contenu et execution web</li>
						<li>
							Analyse et recommandation : actions claires orientees valeur
						</li>
					</ul>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Projets
				</h2>
				<div className="mt-10 grid gap-6">
					<div className="card-highlight">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							Symabat (projet principal)
						</p>
						<p className="mt-3 leading-8 text-gray-700 dark:text-gray-200">
							Pilotage global dans la duree : structuration, SEO, contenu,
							maintenance et evolution continue.
						</p>
					</div>
					<div className="card-soft">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							dromarwahab.com
						</p>
						<p className="mt-3 leading-8 text-gray-700 dark:text-gray-200">
							Clarification du positionnement, organisation des pages et
							optimisation de la lisibilite.
						</p>
					</div>
				</div>
			</section>

			<section className="section-space section-divider">
				<h2 className="h2-display">
					Posture collaborateur
				</h2>
				<p className="body-copy mt-6">
					Je privilegie la clarte, la fiabilite et une communication simple.
					J&apos;aime travailler en equipe, garder le cap sur les priorites et
					faire avancer les projets sans complexifier inutilement.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4">
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="cta-primary"
					>
						Me contacter par email
					</a>
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="cta-secondary"
					>
						Voir mon LinkedIn
					</a>
				</div>
			</section>
		</div>
	);
}

export default Recruteur;
