import Image from 'next/image'
import style from './style.module.scss';
import githubLogo from '../../assets/githublogo.png'

const Cards = (props) => {
    const { name, designation, image } = props;
    return (
        <div className={style.cardConatiner}>
            <div style={{ position: 'relative', zIndex: '10' }}>
                <Image src={image} alt='' className={style.imageContainer} />
                <div className={style.socialMediaIcons}>
                    <a href="">
                        <Image src={githubLogo} alt='' width={22} height={22} />
                    </a>
                    <a href="">
                        <Image src={githubLogo} alt='' width={22} height={22} />
                    </a>
                    <a href="">
                        <Image src={githubLogo} alt='' width={22} height={22} />
                    </a>
                </div>
            </div>

            <p className={style.userName}>{name}</p>
            <p className={style.userDesignation}>{designation}</p>
        </div>
    )
}

export default Cards
