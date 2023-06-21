import Image from 'next/image';
import style from './style.module.scss';
import {EventBannersData} from './data';

const Banners = () => (
	<div className={style.container}>
		<div className={style.slideContainer}>
			{EventBannersData?.map((s, id) =>
				<div className={style.slideImage} key={id}>
					<Image src={s.image} alt='' width={327} height={426} />
				</div>
			)}
		</div>
	</div>
);

export default Banners;
