import PagesMetaHead from '../components/PagesMetaHead';

function Recruteur() {
	return (
		<div className="container mx-auto px-4 sm:px-0 py-12 sm:py-16">
			<PagesMetaHead
				title="Parcours Recruteur | Johann Lacroix"
				description="Parcours recruteur de Johann Lacroix: gestion de projet digital, SEO et coordination web."
				keywords="parcours recruteur, chef de projet digital, seo, coordination web"
			/>

			<section>
				<p className="text-indigo-500 font-general-medium uppercase tracking-wide text-sm sm:text-base">
					Parcours recruteur
				</p>
				<h1 className="font-general-semibold text-3xl sm:text-4xl mt-3 text-ternary-dark dark:text-primary-light">
					Un profil hybride pour faire avancer les projets web
				</h1>
				<p className="mt-5 max-w-3xl text-lg text-gray-600 dark:text-gray-200">
					Je combine gestion de projet digital, SEO et culture web
					operationnelle. Mon role : transformer les besoins en plan d&apos;action
					clair, coordonner les parties prenantes et suivre l&apos;execution jusqu&apos;au
					resultat.
				</p>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Parcours
				</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-200 max-w-3xl">
					Mon parcours s&apos;est construit sur des projets concrets avec une
					montee progressive en responsabilite. Symabat est le projet avec
					lequel j&apos;ai demarre la gestion de projet digital et que je continue
					a piloter aujourd&apos;hui dans une logique d&apos;amelioration continue.
				</p>
				<div className="mt-6 rounded-lg bg-white dark:bg-ternary-dark p-6 shadow-sm">
					<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
						Kapsloc - missions de gestion de projet digital (freelance)
					</p>
					<p className="mt-2 text-gray-600 dark:text-gray-200">
						Intervention en environnement client sur le pilotage de projets
						web, la coordination avec les interlocuteurs metier, le suivi
						technique et le deploiement. Certains projets, dont Symabat, sont
						realises dans ce cadre professionnel.
					</p>
				</div>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Competences
				</h2>
				<ul className="mt-4 grid gap-3 text-gray-600 dark:text-gray-200">
					<li>Gestion de projet digital : cadrage, priorisation et suivi</li>
					<li>SEO : structuration de pages et optimisation de contenus</li>
					<li>Coordination : lien entre metier, contenu et execution web</li>
					<li>
						Analyse et recommandation : actions claires orientees valeur
					</li>
				</ul>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Projets
				</h2>
				<div className="mt-5 grid gap-6">
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-6 shadow-sm">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							Symabat (projet principal)
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Pilotage global dans la duree : structuration, SEO, contenu,
							maintenance et evolution continue.
						</p>
					</div>
					<div className="rounded-lg bg-white dark:bg-ternary-dark p-6 shadow-sm">
						<p className="font-general-medium text-xl text-ternary-dark dark:text-primary-light">
							dromarwahab.com
						</p>
						<p className="mt-2 text-gray-600 dark:text-gray-200">
							Clarification du positionnement, organisation des pages et
							optimisation de la lisibilite.
						</p>
					</div>
				</div>
			</section>

			<section className="mt-12 border-t border-primary-light dark:border-secondary-dark pt-10">
				<h2 className="font-general-medium text-2xl text-ternary-dark dark:text-primary-light">
					Posture collaborateur
				</h2>
				<p className="mt-4 text-gray-600 dark:text-gray-200 max-w-3xl">
					Je privilegie la clarte, la fiabilite et une communication simple.
					J&apos;aime travailler en equipe, garder le cap sur les priorites et
					faire avancer les projets sans complexifier inutilement.
				</p>
				<div className="mt-6 flex flex-col sm:flex-row gap-4">
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="inline-flex justify-center bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg duration-300"
					>
						Me contacter par email
					</a>
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="inline-flex justify-center border border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-ternary-dark px-6 py-3 rounded-lg duration-300"
					>
						Voir mon LinkedIn
					</a>
				</div>
			</section>
		</div>
	);
}

export default Recruteur;
