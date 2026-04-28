import Head from 'next/head';

function PagesMetaHead({ title, keywords, description }) {
	return (
		<Head>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	);
}

PagesMetaHead.defaultProps = {
	title: 'Johann Lacroix | Chef de projet digital',
	keywords: 'chef de projet digital, seo, coordination web',
	description:
		'Portfolio professionnel de Johann Lacroix, chef de projet digital et SEO.',
};

export default PagesMetaHead;
