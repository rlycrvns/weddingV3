import { getLayout } from "@components/Layout/PageLayout";
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
              <li>August 28, 2022</li>
              <li>
                Arrival at 4:45pm <br /> Outdoor ceremony at 5:30pm
              </li>
              <li>Outdoor reception to follow on-site</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Where</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                <Link href="http://www.schollsvalleylodge.com/">
                  <a target="_blank">
                    Scholl's Valley Lodge
                    <br /> 12840 SW River Road
                    <br /> Hillsboro, OR 97123
                  </a>
                </Link>
                <br />
                <br />
                <Link href="https://www.google.com/maps/place/Scholls+Valley+Lodge/@45.4303321,-122.9313421,17z/data=!3m1!4b1!4m5!3m4!1s0x549513cf2aa8ab5b:0x457d5fd397d27ca3!8m2!3d45.4303321!4d-122.9291534">
                  <a className={styles.button} target="_blank">
                    Directions
                    <div className={styles.button__horizontal}></div>
                    <div className={styles.button__vertical}></div>
                  </a>
                </Link>
              </li>
              <li>45 minute drive from most parts of Portland</li>
              <li>Parking is limited, please carpool if possible</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Covid-19 Policy</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>
                To protect the safety of all guests and vendors, proof of full (booster if eligible)
                Covid-19 vaccination or negative PCR test taken no more than 72 hours prior to the
                event is required
                <br />
                <br />
                We encourage all guests to take a day of rapid test and ask that if you are
                experiencing Covid symptoms of any kind please do not attend
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
              <li>Ceremony will be held on a lawn</li>
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
                Essentially no jeans, t-shirts or shorts please and thank you
              </li>
              <li>Light coat recommended due to the possibility of wind</li>
              <li>Ceremony will be held on a lawn, we suggest avoiding pointed heels</li>
              <li>If you desire to wear a mask please do not hesitate to do so</li>
            </ul>
          </div>
          <div className={styles.group}>
            <h2>Food & Drink</h2>
            <div className={styles.divider}></div>
            <ul>
              <li>Appetizers followed by buffet style meal</li>
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
              <li>
                To book using our Fixed Rate please visit{" "}
                <a href="https://www.hilton.com/en/hotels/rllc-dt-doubletree-portland/?SEO_id=BING-AMER-DT-RLLCDT&y_source=1_MTM3MjY5Mi00ODMtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D">
                  this link
                </a>{" "}
                and enter 0560018601 into the Corporate Account field
              </li>
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
