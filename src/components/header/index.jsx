import style from './style.module.scss';
import JsLogo from '../../assets/js-logo.png';
import Image from 'next/image';
import {useState} from 'react';
import {HeaderData} from './data';

const Header = () => {
	const [ hide, setHide ] = useState(false);
	return (
		<header className={style.header_Wrapper}>
			<div className={style.header_Container}>
				<figure className={style.logo}>
					<Image src={JsLogo} alt='logo' />
				</figure>
				<ul className={style.menu_Items}>
					{
						HeaderData?.map((s, id) =>
							<li key={id}> <a href={s.link}> {s.label} </a></li>
						)
					}
				</ul>
				<ul className={style.clickIcon} onClick={() => setHide(!hide)}>
					<li />
					<li />
					<li />
				</ul>
				{hide &&
					<ul className={style.mobile_Menu_Items}>
						{
							HeaderData?.map((s, id) =>
								<li key={id} onClick={() => setHide(false)}> <a href={s.link}> {s.label} </a></li>
							)
						}
					</ul>
				}
			</div>
		</header>
	);
};

export default Header;
