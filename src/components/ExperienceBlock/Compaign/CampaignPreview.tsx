import Image from "next/image";

import css from "./CampaignPreview.module.css";
import { CampaignObjective } from "@/src/types/Compaign.type";
import {
  BUDGET,
  formatMetric,
  getCampaignMetrics,
  objectiveOptions,
} from "./campaign.config";

interface CampaignPreviewProps {
  objective: CampaignObjective;
  budget: number;
}

export default function CampaignPreview({
  objective,
  budget,
}: CampaignPreviewProps) {
  const config = objectiveOptions[objective];

  const metrics = getCampaignMetrics(objective, budget);

  const reachProgress = (budget / BUDGET.max) * 100;

  const engagementProgress = reachProgress * 0.72;

  return (
    <div id="campaign-preview" className={css.previewContainer}>
      <div className={css.browserHeader}>
        <div className={css.browserDots} aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className={css.browserTitle}>SHIFT / CAMPAIGN OVERVIEW</span>
      </div>

      <div className={css.previewContent}>
        <div className={css.photoContainer}>
          <Image
            src="/images/hero.jpg"
            alt="Woman listening to music with headphones"
            fill
            sizes="(max-width: 900px) 100vw, 30vw"
            className={css.campaignImage}
          />
        </div>

        <ul className={css.statisticsContainer}>
          <li className={css.statCard}>
            <p className={css.statLabel}>EST. REACH / DEMO</p>
            <strong className={css.statValue}>
              {formatMetric(metrics.reach)}
            </strong>
            <span className={css.statStatus}> Illustrative</span>
            <div className={css.progressTrack}>
              <div
                className={`${css.progressFill} ${css.reachFill}`}
                style={{
                  width: `${reachProgress}%`,
                }}
              />
            </div>
          </li>

          <li className={css.statCard}>
            <p className={css.statLabel}>EST. ENGAGEMENT / DEMO</p>
            <strong className={css.statValue}>
              {formatMetric(metrics.engagement)}
            </strong>
            <span className={css.statStatus}> Illustrative</span>
            <div className={css.progressTrack}>
              <div
                className={`${css.progressFill} ${css.engagementFill}`}
                style={{
                  width: `${engagementProgress}%`,
                }}
              />
            </div>
          </li>
          <li className={css.statCard}>
            <p className={css.statLabel}>EXAMPLE CTR</p>
            <strong className={css.statValue}>{metrics.ctr.toFixed(1)}%</strong>
            <span className={css.statStatus}>Concept dataset</span>
          </li>
        </ul>
      </div>

      <div className={css.previewFooter}>
        <div className={css.previewStatus}>
          <span className={css.isDot}></span>
          <p className={css.footerText}>CAMPAIGN IN DESIGN MODE</p>
        </div>

        <span>OBJECTIVE: {config.label.toUpperCase()}</span>
      </div>
    </div>
  );
}
