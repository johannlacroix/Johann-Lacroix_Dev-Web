import { v4 as uuidv4 } from 'uuid';

// Import images
import ArianeGroupImage from '../public/images/brands/arianegroup_logo.png';
import DeezerImage from '../public/images/brands/deezer.png';
import DisneyImage from '../public/images/brands/disney_logo.png';
import LaCapsuleImage from '../public/images/brands/lacapsule_logo.png';
import KapslocImage from '../public/images/brands/Logo_Kapsloc_Black.png';
import ProtechniImage from '../public/images/brands/logo-protechni.jpg';
import SymabatImage from '../public/images/brands/symabat_logo.png';

export const clientsHeading = 'Ils m’ont fait confiance';

export const clientsData = [
	{
		id: uuidv4(),
		title: 'ArianeGroup',
		img: ArianeGroupImage,
	},
	{
		id: uuidv4(),
		title: 'Deezer',
		img: DeezerImage,
	},
	{
		id: uuidv4(),
		title: 'Disney',
		img: DisneyImage,
	},
	{
		id: uuidv4(),
		title: 'La Capsule',
		img: LaCapsuleImage,
	},
	{
		id: uuidv4(),
		title: 'Kapsloc',
		img: KapslocImage,
	},
	{
		id: uuidv4(),
		title: 'Protechni',
		img: ProtechniImage,
	},
	{
		id: uuidv4(),
		title: 'Symabat',
		img: SymabatImage,
	},
];
