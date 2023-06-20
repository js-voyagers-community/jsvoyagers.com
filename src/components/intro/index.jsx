import style from './style.module.scss';

const Intro = () => {
  return (
    <>
      <aside className={style.top_Left_FadeEffect} />
      <aside className={style.bottom_Left_FadeEffect} />
      <section className={style.intro_Wrapper}>
        <h1 className={style.heading}>The biggest Javascript Community in gujarat</h1>
        <ul className={style.info}>
          <li>
            <p>02</p>
            <p>Speakers sharing latest insights</p>
          </li>
          <li>
            <p>120+</p>
            <p>Devs from all over the gujarat</p>
          </li>
          <li>
            <p>04</p>
            <p>Luckies meet in vadodara</p>
          </li>
        </ul>
      </section>
    </>

  )
}

export default Intro
