import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Kapsloc',
		url: 'kapsloc.com',
		category: 'Web Application',
		img: '/images/kapsloc_website.png',
		ProjectHeader: {
			title: 'Responsive website for Kapsloc, our SNE',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Kapsloc',
				img: '/images/kapsloc_website.png',
			},
			{
				id: uuidv4(),
				title: 'Kapsloc',
				img: '/images/kapsloc_website_2.png',
			},
			{
				id: uuidv4(),
				title: 'Kapsloc',
				img: '/images/kapsloc_website_3.png',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Kapsloc',
					details: 'SNE from Bordeaux',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Informatic Engenering',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://kapsloc.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+33 6 64 47 33 38',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Think and create a new generation website according our engening skills',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
  {
    id: uuidv4(),
    details:
      "Le projet de refonte du site web de l’ESN Kapsloc a été initié pour moderniser l’image de l’entreprise et améliorer la visibilité de ses offres auprès des clients et candidats. L’objectif était de créer un site clair, responsive et performant, tout en intégrant un back-office léger pour faciliter les mises à jour par l’équipe interne.",
  },
  {
    id: uuidv4(),
    details:
      "L’un des défis majeurs a été de construire une architecture technique évolutive avec Next.js et Tailwind CSS, tout en garantissant un bon référencement naturel (SEO). J’ai mis en place un routage dynamique, un système de génération statique pour les pages de services, et une configuration SEO optimisée pour chaque page.",
  },
  {
    id: uuidv4(),
    details:
      "Au-delà du développement, j’ai assuré une coordination transverse avec la direction, les commerciaux et les équipes RH, afin de cadrer les besoins métiers, proposer des solutions fonctionnelles adaptées, et valider les contenus stratégiques à forte valeur ajoutée.",
  },
  {
    id: uuidv4(),
    details:
      "La mise en production a nécessité l’intégration continue via GitHub, le déploiement sur un serveur VPS avec configuration Nginx, ainsi qu’une série de tests manuels sur tous les supports pour garantir l’accessibilité et la compatibilité multi-navigateurs. Ce projet m’a permis de consolider mes compétences fullstack dans un contexte professionnel exigeant, avec une vraie dimension produit et métier.",
  },
],

			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	{
		id: 2,
		title: 'Symabat France',
		url: 'symabat.fr',
		category: 'Mobile Application',
		img: '/images/symabat_mobile_app_1.jpg',
		ProjectHeader: {
			title: 'Symabat France',
			publishDate: 'Jul 26, 2021',
			tags: 'Mobile Application',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'symabat.fr',
				img: '/images/symabat_mobile_app_1.jpg',
			},
			{
				id: uuidv4(),
				title: 'symabat.fr',
				img: '/images/symabat_mobile_app_2.jpg',
			},
			{
				id: uuidv4(),
				title: 'symabat.fr',
				img: '/images/symabat_mobile_app_3.jpg',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Symabat France',
					details: 'SA',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Services for building and insurances',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://symabat.fr',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '+33 3 69 57 97 97',
				},
			],
			ObjectivesHeading: 'Objective',
ObjectivesDetails:
	"L'objectif principal du projet était de concevoir et développer le site web officiel de Symabat, une entreprise positionnée comme trait d'union entre organismes d'assurance et professionnels du bâtiment. Le but était de créer un outil numérique moderne, clair et accessible, qui valorise les services proposés, facilite la prise de contact, et renforce l’image professionnelle de l’entreprise auprès de ses clients et partenaires.",
Technologies: [
	{
		title: 'Tools & Technologies',
		techs: [
			'React',
			'Next',
			'JavaScript',
			'TailwindCSS',
			'API',
			],
	},
],
ProjectDetailsHeading: 'Challenge',
ProjectDetails: [
	{
		id: uuidv4(),
		details:
			"Le principal défi de ce projet a été de concevoir une identité visuelle forte qui reflète à la fois le sérieux et la modernité de Symabat. Il a fallu définir une charte graphique cohérente, adaptée aux supports numériques, tout en respectant les codes de communication du secteur de la formation professionnelle. L'enjeu était également de trouver un équilibre entre sobriété et attractivité visuelle.",
	},
	{
		id: uuidv4(),
		details:
			"Un autre challenge important a été de structurer l’architecture du site de manière intuitive pour l’utilisateur. L’organisation des pages et des contenus a été pensée pour que les visiteurs trouvent rapidement les informations sur les formations, les prestations et les valeurs de Symabat, tout en facilitant la prise de contact grâce à des appels à l’action clairs.",
	},
	{
		id: uuidv4(),
		details:
			"Sur le plan technique, l’intégration avec Vue.js et TailwindCSS a permis de créer un site rapide, responsive et optimisé pour différents écrans. La gestion des composants Vue a été essentielle pour assurer la réutilisabilité du code et simplifier la maintenance future du site.",
	},
	{
		id: uuidv4(),
		details:
			"Enfin, un travail particulier a été réalisé sur l’optimisation SEO et les performances, afin de maximiser la visibilité du site sur les moteurs de recherche. Cela incluait la rédaction de contenus optimisés, la structuration sémantique du HTML, ainsi que l’optimisation des images et des scripts pour garantir un temps de chargement rapide.",
	},
],
SocialSharingHeading: 'Share This',

			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	// {
	// 	id: 3,
	// 	title: 'Project Management UI',
	// 	url: 'project-management-ui',
	// 	category: 'UI/UX Design',
	// 	img: '/images/ui-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'Project Management UI',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Project Management UI',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Project Management UI',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Project Management UI',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/c/StomanStudio',
	// 		// 	},
	// 		// ],
	// 	},
	// },
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	url: 'cloud-storage-platform',
	// 	category: 'UI/UX Design',
	// 	img: '/images/ui-project-2.jpg',
	// 	ProjectHeader: {
	// 		title: 'Cloud Storage Platform',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'Web & Cloud',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Cloud Storage Platform',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Cloud Storage Platform',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Cloud Storage Platform',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/c/StomanStudio',
	// 		// 	},
	// 		// ],
	// 	},
	// },
	// {
	// 	id: 5,
	// 	title: 'WeTalk Social Application',
	// 	url: 'wetalk-social-app',
	// 	category: 'Mobile Application',
	// 	img: '/images/mobile-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'WeTalk Social Application',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'WeTalk Social Application',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'WeTalk Social Application',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'WeTalk Social Application',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/c/realstoman',
	// 		// 	},
	// 		// ],
	// 	},
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple New Design System',
	// 	url: 'apple-new-design-system',
	// 	category: 'Web Application',
	// 	img: '/images/web-project-1.jpg',
	// 	ProjectHeader: {
	// 		title: 'Apple New Design System',
	// 		publishDate: 'Jul 26, 2021',
	// 		tags: 'UI / Frontend',
	// 	},
	// 	ProjectImages: [
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/ui-project-1.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/web-project-2.jpg',
	// 		},
	// 		{
	// 			id: uuidv4(),
	// 			title: 'Kabul Apple New Design System',
	// 			img: '/images/mobile-project-2.jpg',
	// 		},
	// 	],
	// 	ProjectInfo: {
	// 		ClientHeading: 'About Client',
	// 		CompanyInfo: [
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Name',
	// 				details: 'Company Ltd',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Services',
	// 				details: 'UI Design & Frontend Development',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Website',
	// 				details: 'https://company.com',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				title: 'Phone',
	// 				details: '555 8888 888',
	// 			},
	// 		],
	// 		ObjectivesHeading: 'Objective',
	// 		ObjectivesDetails:
	// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
	// 		Technologies: [
	// 			{
	// 				title: 'Tools & Technologies',
	// 				techs: [
	// 					'HTML',
	// 					'CSS',
	// 					'JavaScript',
	// 					'Vue.js',
	// 					'TailwindCSS',
	// 					'AdobeXD',
	// 				],
	// 			},
	// 		],
	// 		ProjectDetailsHeading: 'Challenge',
	// 		ProjectDetails: [
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
	// 			},
	// 			{
	// 				id: uuidv4(),
	// 				details:
	// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	// 			},
	// 		],
	// 		SocialSharingHeading: 'Share This',
	// 		// SocialSharing: [
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Twitter',
	// 		// 		icon: <FiTwitter />,
	// 		// 		url: 'https://twitter.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Instagram',
	// 		// 		icon: <FiInstagram />,
	// 		// 		url: 'https://instagram.com/realstoman',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Facebook',
	// 		// 		icon: <FiFacebook />,
	// 		// 		url: 'https://facebook.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'LinkedIn',
	// 		// 		icon: <FiLinkedin />,
	// 		// 		url: 'https://linkedin.com/',
	// 		// 	},
	// 		// 	{
	// 		// 		id: uuidv4(),
	// 		// 		name: 'Youtube',
	// 		// 		icon: <FiYoutube />,
	// 		// 		url: 'https://www.youtube.com/c/StomanStudio',
	// 		// 	},
	// 		// ],
	// 	},
	// },
];
