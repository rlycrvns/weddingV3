import { getLayout } from "@components/Layout/PageLayout";
import styles from "../../styles/Story.module.scss";
import { AdvancedImage, responsive, placeholder, lazyload } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import StoryPhotos from "@components/StoryPhotos";
export default function OurStory() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dm75wbbnz"
    }
  });
  const jProfile = cld.image("wedding/jProfile_hlqvon.jpg").format("webp").quality("auto");
  const rProfile = cld.image("wedding/rProfile_jy6llg.jpg").format("webp").quality("auto");
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Our Story</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.group}>
            <div className={styles.img}>
              <AdvancedImage cldImg={jProfile} plugins={[placeholder({ mode: "blur" })]} />
            </div>
            <div className={styles.story}>
              <div className={styles.textBlock}>
                <h2>2016</h2>
                <p>
                  This was an incredibly life changing and transformative year that I feel can't be
                  left out of our love story.
                  <br />
                  <br /> In this year I ended a relationship that was long past it's expiration
                  date, left a job that I felt was no longer where I should be, and said goodbye to
                  the home I grew up in. I was emotionally raw but absolutely determined to find
                  myself again and set out to do a lot of scary, spontaneous and lively activities
                  to help me do that.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h2>New Years 2017</h2>
                <p>
                  I brought in the new year eating Spanish food and dancing to disco with some
                  amazing friends. I reflected on the experiences that made me more bold, more
                  loving, more open, more me and I promised myself that with my 25th birthday coming
                  up that year, I was going to make it the best one of my life.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h2>February 2017</h2>
                <p>
                  I wasn't in any mindset of wanting a serious relationship, just dipping my toes
                  back into the dating pool so I joined OKCupid. This was an entirely overwhelming
                  and exhausting experience that I almost quit multiple times (very glad that didn't
                  happen!) My profile itself didn't have a lot of information on it, and while
                  browsing through some other profiles, I came across one about a guy who said he
                  was a “vegan nerd” who dressed up in Star Wars outfits. His profile photos were
                  intimidating and I wasn't sure I would be able to date a vegan, but his profile
                  did inspire me to add “Star Wars, duh” under my movies section.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h2>March 14th, 2017</h2>
                <p>
                  I got a message from that same profile that read: “You had me at "Star Wars duh",
                  want to hang out and get food and or a drink(not necessarily alcohol)?” <br />
                  <br /> That guy was Riley.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.group}>
            <div className={styles.img}>
              <AdvancedImage cldImg={rProfile} plugins={[placeholder({ mode: "blur" })]} />
            </div>
            <div className={styles.story}>
              <div className={styles.textBlock}>
                <h2>2013</h2>
                <p>
                  I packed up all of my belongings in Colorado and made a new home in Portland,
                  Oregon. This was widely regarded as a gigantic mistake for the next several years.
                  Hindsight says that it was actually the best decision I could have made.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h2>2015</h2>
                <p>
                  After spending a couple years in the service industry, I enrolled at Portland
                  Community College with the goal of setting myself up with a new career before I
                  turned 30.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h2>2016</h2>
                <p>
                  A few months after ending a sour relationship, I reactivated my OkCupid even
                  though it's what landed me in said relationship. *shrug emoji* Based on past
                  experience, I wasn't expecting much but figured I'd see who was out there. I
                  decided to move back to Colorado in December and booked a Uhaul. At the last
                  minute I got cold feet and decided to stay in Portland.
                </p>
              </div>
              <div className={styles.textBlock}>
                <h2>March 14th, 2017</h2>
                <p>
                  I came across a cute girl with a messy cascading bun next to a mountain lake who
                  self identified as a cat mom. I read through the sparse info on her profile
                  several times. I was intimidated and enamoured. I deliberated for days on whether
                  or not to message her and what I would even say. Eventually I noticed that she had
                  added “Star Wars duh” to her movies and thus, full of doubt and insecurity, I sent
                  a message…
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.subheader}>
          <h2>
            {" "}
            March 17, 2017 <br /> Our journey begins...
          </h2>
        </div>
        <StoryPhotos />
      </div>
    </section>
  );
}

OurStory.getLayout = getLayout;
