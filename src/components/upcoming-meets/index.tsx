import Cards from '../cards';
import cn from 'classnames';
import Image from 'next/image';
import { MeetupDetails } from './data';
import dateImg from '../../assets/date.svg';
import timeImg from '../../assets/time.svg';
import arrowImg from '../../assets/arrow.svg';
import locationImg from '../../assets/location.svg';
import style from './style.module.scss';

const UpcomingMeets = () => {
  const { title, description, time, date, location, speakers } = MeetupDetails;
  return (
    <section className='title'>
      <h4>upcoming meet-up</h4>
      <div className={style.meetupContainer}>
        <div className={style.contentWrapper}>
          <h3>{title}</h3>
          {!!description && (
            <p>{description}</p>
          )}
          <div className={style.infoSection}>
            <div>
              <Image src={dateImg} alt='' width={22} height={22} className={style.icons} />
              <span>{date}</span>
            </div>
            <div>
              <Image src={locationImg} alt='' width={24} height={24} className={style.icons} />
              <span>{location}</span>
            </div>
            <div>
              <Image src={timeImg} alt='' width={24} height={24} className={style.icons} />
              <span>{time}</span>
            </div>
          </div>
          <button className={style.attendBtn}>
            Attend
            <Image src={arrowImg} alt='' width={16} height={16} className={cn(style.icons, style.arrow)} />
          </button>
        </div>
        <div className={style.cardWrapper}>
          {speakers?.map((s, id) =>
            <div className={style.cards} key={id}>
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
      </div>
    </section>
  );
};

export default UpcomingMeets;
