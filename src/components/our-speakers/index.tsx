import Cards from '../cards';
import { Speakers } from './data';
import style from './style.module.scss';

const OurSpeakers = () => (
  <section className='title' id='speakers'>
    <h4>Our Speakers</h4>
    <div className={style.cardContainer}>
      {Speakers.reverse().map((s) =>
        <div className={style.cards} key={s.id}>
          <Cards
            image={s.image}
            name={s.name}
            designation={s.designation}
            githubURL={s.githubURL}
            linkedinURL={s.linkedinURL}
            twitterURL={s.twitterURL}
          />
        </div>
      )}
    </div>
  </section>
);

export default OurSpeakers;
