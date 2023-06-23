import Image from 'next/image';
import style from './style.module.scss';
import githubLogo from '../../assets/github.svg';
import linkedinLogo from '../../assets/linkedin.svg';
import twitterLogo from '../../assets/twitter.svg';
import dummyImage from '../../assets/dummyimage.png';
import { useEffect } from 'react';

const Cards = ({ name, designation, image, githubURL, linkedinURL, twitterURL }) => {
	useEffect(
		() => {
			const imageTag = document.getElementById(name);
			if (!!image && !!imageTag) {
				imageTag.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 66.39%, #000 100%), url(${image}), lightgray 50% / cover no-repeat`;
			}
		},
	);

	return (
		<div className={style.cardConatiner}>
			<div style={{ position: 'relative', zIndex: '10' }}>
				<Image src={image ?? dummyImage} alt={name} className={style.imageContainer} id={name} />
				{(!!githubURL || !!linkedinURL || !!twitterURL) && (
					<div className={style.socialMediaIcons}>
						{!!githubURL && (
							<a href={githubURL} target='_blank'>
								<Image src={githubLogo} alt='' width={22} height={22} />
							</a>
						)}
						{!!linkedinURL && (
							<a href={linkedinURL} target='_blank'>
								<Image src={linkedinLogo} alt='' width={22} height={22} />
							</a>
						)}
						{twitterURL && (
							<a href={twitterURL} target='_blank'>
								<Image src={twitterLogo} alt='' width={22} height={22} />
							</a>
						)}
					</div>
				)}
			</div>
			<p className={style.userName}>{name}</p>
			<p className={style.userDesignation}>{designation}</p>
		</div>
	);
};

export default Cards;
