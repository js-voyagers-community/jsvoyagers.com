import Counter from '../counter';
import style from './style.module.scss';
import cn from 'classnames';

const Intro = () => (
  <>
    <aside className={cn(style.top_Left_FadeEffect, style.margin_Inline)} />
    <aside className={style.bottom_Left_FadeEffect} />
    <section className={style.intro_Wrapper}>
      <h1 className={style.heading}>The biggest Javascript Community in gujarat</h1>
      <ul className={style.info}>
        <li>
          <Counter text='Speakers sharing latest insights' count={2} time={2000} />
        </li>
        <li>
          <Counter text='Devs from all over the gujarat' count={120} sign="+" time={2000} />
        </li>
        <li>
          <Counter text='Luckies meet in vadodara' count={4} time={2000} />
        </li>
      </ul>
    </section>
  </>
);

export default Intro;
