import HeroFloat from "../Animations/HeroFloat";
import { ArrowIcon, OrbitPoster } from "../UI/uiElements";

import css from "./HeroBanner.module.css";

const chartHeights = [48, 68, 55, 105, 45, 66, 87, 102, 59, 74, 89, 81, 121];

export default function HeroBanner() {
  return (
    <section className={css.herobannerSection}>
      <div className={css.herobannerHeaderlineContainer}>
        <p className={css.headerlineContainerText}>
          <span className={css.theDope} />
          THE PLATFORM FOR WHAT'S NEXT
        </p>

        <h1 className={css.headerlina}>
          MAKE
          <br />
          THE
          <br />
          <span className={css.orangeMoment}>MOMENT.</span>
        </h1>
      </div>

      <div className={css.heroLittleDescriptionContainer}>
        <p className={css.heroLittleDescriptionText}>
          Advertising built to turn attention into action. Bolder ideas. Better
          connections. Results that move culture forward.
        </p>

        <div className={css.buttonContainer}>
          <a href="#" className={css.headerButton}>
            Start a campaign
            <ArrowIcon />
          </a>

          <a
            href="#"
            className={`${css.headerButton} ${css.headerButtonOutline}`}
          >
            Explore the platform
            <ArrowIcon />
          </a>
        </div>
      </div>

      <div className={css.heroImagesContainer}>
        <HeroFloat
          className={css.heroPoster}
          innerClassName={css.heroPosterInner}
          from="right"
          delay={0.1}
          rotate={11}
          rotateAmount={2}
          distance={11}
          duration={8}
        >
          <OrbitPoster />
        </HeroFloat>
        <HeroFloat
          className={css.heroPolaroid}
          innerClassName={css.heroPolaroidInner}
          from="left"
          delay={0.2}
          rotate={-11}
          rotateAmount={2}
          distance={13}
          duration={6.5}
        >
          <img
            className={css.heroPhoto}
            src="/images/hero.jpg"
            alt="Woman wearing headphones"
          />

          <div className={css.heroPhotoCaption}>
            THE NEXT
            <br />
            SOUND.
          </div>
        </HeroFloat>
        <HeroFloat
          className={css.heroStats}
          innerClassName={css.heroStatsInner}
          from="right"
          delay={0.35}
          rotate={6}
          rotateAmount={-1}
          distance={10}
          duration={7}
        >
          <p className={css.heroStatsLabel}>ATTENTION INDEX</p>

          <strong className={css.heroStatsValue}>+248%</strong>

          <p className={css.heroStatsDescription}>ILLUSTRATIVE CAMPAIGN DATA</p>

          <div className={css.heroStatsBars} aria-hidden="true">
            {chartHeights.map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </HeroFloat>
      </div>

      <div className={css.heroMetaContainer}>
        <ul className={css.heroMetaList}>
          <li className={css.heroMetaItems}>01 / ABOUT SHIFT</li>
          <li className={css.heroMetaItems}>SCROLL TO EXPLORE</li>
          <li className={css.heroMetaItems}>CREATIVE GROWTH PLATFORM</li>
        </ul>
      </div>
    </section>
  );
}
