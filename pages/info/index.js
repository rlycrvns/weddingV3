import { getLayout } from "@components/Layout/PageLayout";
import Triangle from "@components/Triangle";
import styles from "../../styles/Page.module.scss";
export default function Info() {
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Info</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.group}>
            <h2>When</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>August 28, 2022</li> <li>Arrival at 5:00pm</li>
              <li>Outdoor Ceremony at 5:30pm</li>
              <li>Outdoor Reception to Follow On-site</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Where</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                Scholl's Valley Lodge
                <br /> 2840 SW River Road
                <br /> Hillsboro, OR 97123
              </li>
              <li>45 minute drive from most parts of Portland</li>
              <li>Parking is limited, please carpool if possible</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Vaccination Policy</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                To protect the safety of all guests and vendors, proof of full (booster if eligible)
                Covid-19 vaccination must be provided with formal RSVP
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Recommended Lodging</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Hotel 1</li>
              <li>Hotel 2</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Accessibility</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Gravel Parking Lot</li>
              <li>Ceremony and Reception Site are accessible without stairs</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Attire</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Semi-Formal</li>
              <li>Light Coat Recommended due to the possibility of wind</li>
              <li>Ceremony will be held on a lawn, beware of heels</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Food & Drink</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Appetizers followed by Light Meal</li>
              <li>Beer and wine bar along with NA beverages</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Unplugged Ceremony</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                We invite you to be fully present. Kindly turn off all devices and enjoy this
                special moment with us
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Children</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                To allow all wedding guests, including parents, a night of relaxation and partying,
                we have chosen to make our special day 21+ only
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Info.getLayout = getLayout;
