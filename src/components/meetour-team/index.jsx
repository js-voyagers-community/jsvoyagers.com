import Cards from '../cards';
import { DummyData } from './data';
import style from './style.module.scss';

const MeetOurTeam = () => {
  return (
    <section className='title'>
      <h4>Meet our team</h4>
      <div className={style.cardContainer}>
        {DummyData?.map((s, id) =>
          <div className={style.cards} key={id}>
            <Cards image={s.image} name={s.name} designation={s.designation} />
          </div>
        )}
        <div className={style.meetOurTeam}>
        WANT TO KNOW THE REST?
        </div>
      </div>
    </section>
  )
}

export default MeetOurTeam;
