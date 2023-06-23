import Image from 'next/image';
import style from './style.module.scss';
import { SponsorsData } from './data';

const Sponsors = () => (
	<section className='title' id='sponsors'>
		<h4>Our sponsors</h4>
		<div className={style.sponsors_Info}>
			{SponsorsData?.map((i, id) =>
				<a href={i.url} key={id}>
					<Image src={i.logo} alt='sponsors' width={64} height={63} />
				</a>
			)}
		</div>
	</section>
);

export default Sponsors;
