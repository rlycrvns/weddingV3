import { getLayout } from "@components/Layout/PageLayout";
import Triangle from "@components/Triangle";
import Link from "next/link";
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
              <li>Outdoor ceremony at 5:30pm</li>
              <li>Outdoor reception to follow on-site</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Where</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                <Link href="http://www.schollsvalleylodge.com/">
                  <a target="_blank">Scholl's Valley Lodge</a>
                </Link>
                <br />
                <Link href="https://www.google.com/maps/place/Scholls+Valley+Lodge/@45.4303321,-122.9313421,17z/data=!3m1!4b1!4m5!3m4!1s0x549513cf2aa8ab5b:0x457d5fd397d27ca3!8m2!3d45.4303321!4d-122.9291534">
                  <a target="_blank">
                    <br /> 2840 SW River Road
                    <br /> Hillsboro, OR 97123
                  </a>
                </Link>
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
            <h2>Children</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                To allow all wedding guests, including parents, a night of relaxation and partying,
                we have chosen to make our special day 21+ only
              </li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Accessibility</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Gravel parking Lot</li>
              <li>Ceremony and reception site are accessible without stairs</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Attire</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Semi-Formal</li>
              <li>
                Questions on what Semi-Formal means? Please reference{" "}
                <Link href="https://www.theknot.com/content/what-to-wear-semi-formal">
                  <a target="_blank">this article</a>
                </Link>
                <br />
                Basically no jeans, t-shirts or shorts
              </li>
              <li>Light coat recommended due to the possibility of wind</li>
              <li>Ceremony will be held on a lawn, we suggest avoided pointed heels</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Food & Drink</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Appetizers followed by light meal</li>
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
            <h2>Recommended Lodging</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                <Link href="https://www.hilton.com/en/hotels/rllc-dt-doubletree-portland/">
                  <a>Double Tree at the Convention Center</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.google.com/maps/place/DoubleTree+by+Hilton+Hotel+Portland/@45.5307599,-122.657775,17z/data=!3m1!4b1!4m8!3m7!1s0x5495a0b3b9a22425:0xe44c336d8ce0b5c4!5m2!4m1!1i2!8m2!3d45.5307599!4d-122.6555863">
                  <a>
                    1000 NE Multnomah St <br />
                    Portland, OR 97232
                  </a>
                </Link>
              </li>
              <li>Check back soon for a booking discount code</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Questions?</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Feel free to email us at rileyjesswed@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Info.getLayout = getLayout;
