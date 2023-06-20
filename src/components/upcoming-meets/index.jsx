import Cards from '../cards';
import { DummyData } from './data';
import style from './style.module.scss';

const UpcomingMeets = () => {
  return (
    <section className='title'>
      <h4>upcoming meet-up</h4>
      <div className={style.meetupContainer}>
        <div className={style.contentWrapper}>
          <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Lacus purus commodo nibh mauris donec nisl. Bibendum faucibus nunc praesent enim. Urna egestas at nibh varius. Sit integer adipiscing eget dolor quis risus sed id. Viverra ultrices consectetur pellentesque sed in blandit congue.</p>
          <button className={style.attendBtn}>Attend</button>
        </div>
        <div className={style.cardWrapper}>
          {DummyData?.map((s, id) =>
            <div className={style.cards} key={id}>
              <Cards image={s.image} name={s.name} designation={s.designation} />
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default UpcomingMeets
