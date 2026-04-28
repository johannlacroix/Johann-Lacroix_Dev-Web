import PagesMetaHead from '../../components/PagesMetaHead';

function RecruteurV2() {
	return (
		<div className="mx-auto w-full max-w-[1100px] px-6 md:px-12 py-20 md:py-28">
			<PagesMetaHead
				title="V2 | Parcours Recruteur | Johann Lacroix"
				description="Version B design premium de la page recruteur."
				keywords="parcours recruteur, chef de projet digital, seo"
			/>

			<section className="py-12 md:py-16">
				<p className="text-sm font-semibold uppercase tracking-[0.08em] text-blue-600">
					Parcours recruteur
				</p>
				<h1 className="mt-5 max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
					Un profil hybride pour faire avancer les projets web
				</h1>
				<p className="mt-8 max-w-[700px] text-lg leading-8 text-slate-600">
					Je combine gestion de projet digital, SEO et culture web
					operationnelle. Mon role : transformer les besoins en plan d&apos;action
					clair, coordonner les parties prenantes et suivre l&apos;execution
					jusqu&apos;au resultat.
				</p>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Parcours
				</h2>
				<p className="mt-6 max-w-[700px] text-lg leading-8 text-slate-600">
					Mon parcours s&apos;est construit sur des projets concrets avec une
					montee progressive en responsabilite. Symabat est le projet avec
					lequel j&apos;ai demarre la gestion de projet digital et que je continue
					a piloter aujourd&apos;hui dans une logique d&apos;amelioration continue.
				</p>
				<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
					<p className="text-xl font-semibold text-slate-900">
						Kapsloc - missions de gestion de projet digital (freelance)
					</p>
					<p className="mt-3 text-slate-600 leading-8">
						Intervention en environnement client sur le pilotage de projets
						web, la coordination avec les interlocuteurs metier, le suivi
						technique et le deploiement. Certains projets, dont Symabat, sont
						realises dans ce cadre professionnel.
					</p>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Competences
				</h2>
				<div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
					<ul className="grid gap-3 leading-8 text-slate-600">
						<li>Gestion de projet digital : cadrage, priorisation et suivi</li>
						<li>SEO : structuration de pages et optimisation de contenus</li>
						<li>Coordination : lien entre metier, contenu et execution web</li>
						<li>
							Analyse et recommandation : actions claires orientees valeur
						</li>
					</ul>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Projets
				</h2>
				<div className="mt-10 grid gap-6">
					<div className="rounded-2xl border border-blue-200 bg-blue-50 p-7 md:p-9 shadow-sm">
						<p className="text-xl font-semibold text-slate-900">
							Symabat (projet principal)
						</p>
						<p className="mt-3 text-slate-600 leading-8">
							Pilotage global dans la duree : structuration, SEO, contenu,
							maintenance et evolution continue.
						</p>
					</div>
					<div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 md:p-9 shadow-sm">
						<p className="text-xl font-semibold text-slate-900">
							dromarwahab.com
						</p>
						<p className="mt-3 text-slate-600 leading-8">
							Clarification du positionnement, organisation des pages et
							optimisation de la lisibilite.
						</p>
					</div>
				</div>
			</section>

			<section className="py-14 md:py-20 border-t border-slate-200">
				<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
					Posture collaborateur
				</h2>
				<p className="mt-6 max-w-[700px] text-lg leading-8 text-slate-600">
					Je privilegie la clarte, la fiabilite et une communication simple.
					J&apos;aime travailler en equipe, garder le cap sur les priorites et
					faire avancer les projets sans complexifier inutilement.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row gap-4">
					<a
						href="mailto:johann.lacroix@gmail.com"
						className="inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 font-semibold transition-colors"
					>
						Me contacter par email
					</a>
					<a
						href="https://www.linkedin.com/in/johannlacroix"
						target="__blank"
						className="inline-flex items-center justify-center rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 px-7 py-3.5 font-semibold transition-colors"
					>
						Voir mon LinkedIn
					</a>
				</div>
			</section>
		</div>
	);
}

export default RecruteurV2;
