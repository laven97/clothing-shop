import RevealCard from "../Animations/RevealCard";
import css from "./WhySchift.module.css";

const chartHeights = [48, 90, 68, 121, 78, 110];

export default function WhySchift() {
  return (
    <section className={css.WhySchift}>
      <div className={css.whySchiftFirstContainer}>
        <div className={css.firstContainersBlock}>
          <div className={css.blockTextWrap}>
            <span className={css.isDot}></span>
            <p className={css.blockText}>WHY SHIFT/</p>
          </div>

          <div className={css.headerlineContainer}>
            <h1 className={css.firstContainerHeaderline}>
              DON’T JUST SHOW UP. STAND OUT.
            </h1>
          </div>
        </div>

        <div className={css.seconContainerBlock}>
          <p className={css.seconBlockText}>
            People move fast. Your campaigns should move smarter. Build
            experiences that feel native, intentional, and impossible to ignore.
          </p>
        </div>
      </div>

      <div className={css.bunchOfCardsContainer}>
        <RevealCard
          direction="left"
          delay={0}
          className={css.whySchiftCardsContainer}
        >
          <article className={css.cultureCard}>
            <div className={css.cultureCircle} aria-hidden="true" />

            <p className={css.headerText}>01 / CULTURE FIRST</p>

            <div className={css.headerlineContainer}>
              <h3 className={css.headerlina}>EVERY MOMENT IS AN OPENING.</h3>

              <p className={css.headerlineContainerText}>
                Put your brand in the right conversation at the right time,
                without blending into the background.
              </p>
            </div>

            <p className={css.footerText}>RELEVANCE OVER NOISE</p>
          </article>
        </RevealCard>

        <RevealCard
          direction="right"
          delay={0}
          className={css.twoCardsContainer}
        >
          <article className={css.presitionCard}>
            <div className={css.presitionCardText}>
              <p className={css.headerText}>02 / PRECISION</p>

              <h3 className={css.presitionHeaderline}>
                RIGHT PEOPLE. REAL SIGNAL.
              </h3>

              <p className={css.footerText}>
                Discover intent, not just impressions.
              </p>
            </div>

            <div className={css.presitionChart} aria-hidden="true">
              {chartHeights.map((height, index) => (
                <span
                  key={index}
                  className={css.chartBar}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </article>

          <article className={css.scaleCard}>
            <div className={css.scaleCardContent}>
              <p className={css.scaleLabel}>03 / BUILT TO SCALE</p>

              <h3 className={css.scaleHeaderline}>
                START SMALL.
                <br />
                THINK BIG.
              </h3>

              <p className={css.scaleDescription}>
                Shape the spend around the idea—not the other way around.
              </p>
            </div>

            <svg className={css.scaleArrow} aria-hidden="true">
              <use href="/icons/icon.svg#arrow" />
            </svg>
          </article>
        </RevealCard>
      </div>
    </section>
  );
}
