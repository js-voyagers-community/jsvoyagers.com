import Image from 'next/image';
import bannerImage from '../../assets/banner.png'
import style from './style.module.scss';
import { DummyBannersData } from './data';

const Banners = () => {
    return (
        <div className={style.container}>
            <div className={style.slideContainer}>
                {DummyBannersData?.map((s, id) =>
                    <div className={style.slideImage} key={id}>
                        <Image src={s.image} alt='' width={327} height={426} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Banners
