import css from "./Future.module.css";

export default function Future() {
  return (
    <section className={css.futureSection}>
      <div className={css.futureContainer}>
        <ul className={css.futureList}>
          <li className={css.listItems}>
            <div className={css.listItemWrap}>
              <p className={css.listItemsText}>THE FUTURE IS IN MOTION</p>
              <svg className={css.listIcon}>
                <use href="/icons/icon.svg#icon-asterisk"></use>
              </svg>
            </div>
          </li>
          <li className={css.listItems}>
            <div className={css.listItemWrap}>
              <p className={css.listItemsText}>SCROLL-STOPPING CREATIVE</p>
              <svg className={css.listIcon}>
                <use href="/icons/icon.svg#icon-arrow-up-right"></use>
              </svg>
            </div>
          </li>
          <li className={css.listItems}>
            <div className={css.listItemWrap}>
              <p className={css.listItemsText}>BUILT TO MOVE PEOPLE</p>
              <svg className={css.listIcon}>
                <use href="/icons/icon.svg#icon-asterisk"></use>
              </svg>
            </div>
          </li>
          <li className={css.listItems}>
            <div className={css.listItemWrap}>
              <p className={css.listItemsText}>MADE FOR WHAT'S NEXT</p>
              <svg className={css.listIcon}>
                <use href="/icons/icon.svg#icon-arrow-up-right"></use>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
