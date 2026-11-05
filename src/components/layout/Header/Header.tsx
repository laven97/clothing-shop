import css from "./Header.module.css";

export default function Header() {
  return (
    <section className={css.headerSeaction}>
      <div className={css.headerContainer}>
        <a className={css.headerHeaderline} href="#">
          SCHIFT <span className={css.headerSpan}>/</span>
        </a>

        <ul className={css.headerNavigation}>
          <li className={css.headerNavigationItem}>
            <a href="#" className={css.headerNavLink}>
              Solution
            </a>
          </li>
          <li className={css.headerNavigationItem}>
            <a href="#" className={css.headerNavLink}>
              Ad formats
            </a>
          </li>
          <li className={css.headerNavigationItem}>
            <a href="#" className={css.headerNavLink}>
              Case studies
            </a>
          </li>
          <li className={css.headerNavigationItem}>
            <a href="#" className={css.headerNavLink}>
              Campaign studio
            </a>
          </li>
        </ul>

        <div className={css.hedaerButtonContainer}>
          <a href="#" className={css.headerButtonText}>
            Let's talk
          </a>
          <button className={css.headerButton}>
            Get Started
            <svg className={css.headerButtonIcon}>
              <use href="/icons/icon.svg#icon-arrow-up-right"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
