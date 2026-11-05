"use client";

import { useState, type CSSProperties } from "react";

import css from "./Experience.module.css";
import { CampaignObjective } from "@/src/types/Compaign.type";
import {
  BUDGET,
  formatBudget,
  objectiveKeys,
  objectiveOptions,
} from "./Compaign/campaign.config";
import CampaignPreview from "./Compaign/CampaignPreview";

export default function Experience() {
  const [objective, setObjective] = useState<CampaignObjective>("awareness");

  const [budget, setBudget] = useState<number>(BUDGET.initial);

  const progress = ((budget - BUDGET.min) / (BUDGET.max - BUDGET.min)) * 100;

  const rangeStyle = {
    "--range-progress": `${progress}%`,
  } as CSSProperties;

  return (
    <section className={css.experienceSection}>
      <div className={css.experienceLayout}>
        <div className={css.informationContainer}>
          <div className={css.mainInformation}>
            <div className={css.blockTextWrap}>
              <span className={css.isDot} aria-hidden="true" />
              <p className={css.blockText}>THE INTERACTIVE EXPERIENCE</p>
            </div>
            <div className={css.headerlineContainer}>
              <h2 className={css.headerlina}>
                GROWTH YOU CAN <span className={css.highlight}>FEEL.</span>
              </h2>
            </div>
            <p className={css.informationDescrition}>
              Dial in your campaign. Choose an objective and explore how a
              creative platform could visualize your potential impact.
            </p>
          </div>

          <div className={css.objectiveContainer}>
            <p className={css.headerlineForPicking}>01 / PICK YOUR OBJECTIVE</p>

            <div
              className={css.buttonsList}
              role="group"
              aria-label="Campaign objective"
            >
              {objectiveKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  className={`${css.button} ${
                    objective === key ? css.activeButton : ""
                  }`}
                  aria-pressed={objective === key}
                  onClick={() => setObjective(key)}
                >
                  {objectiveOptions[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className={css.budgetContainer}>
            <div className={css.budgetHeading}>
              <label htmlFor="campaign-budget" className={css.budgetLabel}>
                02 / MONTHLY BUDGET
              </label>

              <output htmlFor="campaign-budget" className={css.budgetValue}>
                ${formatBudget(budget)}
              </output>
            </div>

            <input
              id="campaign-budget"
              className={css.budgetSlider}
              type="range"
              min={BUDGET.min}
              max={BUDGET.max}
              step={BUDGET.step}
              value={budget}
              style={rangeStyle}
              aria-describedby="budget-note"
              onChange={(event) => setBudget(Number(event.target.value))}
            />

            <div className={css.budgetRange}>
              <span>${formatBudget(BUDGET.min)}</span>
              <span>${formatBudget(BUDGET.max)}</span>
            </div>

            <p id="budget-note" className={css.budgetDisclaimer}>
              *Illustrative, invented numbers for an interactive design
              prototype. Not a real forecast or advertising offer.
            </p>

            <div className={css.footerButtonWrap}>
              <a href="#" className={css.footerButton}>
                Open campaign studio
                <svg className={css.buttonIcon}>
                  <use href="/icons/icon.svg#icon-arrow-up-right"></use>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <CampaignPreview objective={objective} budget={budget} />
      </div>
    </section>
  );
}
