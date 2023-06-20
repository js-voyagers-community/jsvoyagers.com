import Cards from '../cards';
import { DummyData } from './data';
import style from './style.module.scss';

const OurSpeakers = () => {
  return (
    <section className='title' id='speakers'>
      <h4>Our Speakers</h4>
      <div className={style.cardContainer}>
        {DummyData?.map((s, id) =>
          <div className={style.cards} key={id}>
            <Cards image={s.image} name={s.name} designation={s.designation} />
          </div>
        )}
      </div>
    </section>
  )
}

export default OurSpeakers
