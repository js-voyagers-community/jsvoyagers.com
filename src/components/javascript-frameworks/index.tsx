import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import techImage from '../../assets/tech.svg';

const JavascriptTech = () => (
  <section className={style.tech_Wrapper}>
    <h4>Celebrating Javascript In All It’s Forms</h4>
    <Image src={techImage} alt='technology' style={{ width: '100%', marginBlock: '20px', height: "100%" }} height={580} />
  </section>
);

export default JavascriptTech;
