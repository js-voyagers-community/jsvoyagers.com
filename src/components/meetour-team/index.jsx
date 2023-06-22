import Cards from '../cards';
import { OurTeam } from './data';
import style from './style.module.scss';

const MeetOurTeam = () => (
  <section className='title'>
    <h4>Meet our team</h4>
    <div className={style.cardContainer}>
      {OurTeam.reverse().slice(0, 2)?.map((s) =>
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
      <div className={style.meetOurTeam}>
        WANT TO KNOW THE REST?
      </div>
    </div>
  </section>
);

export default MeetOurTeam;
