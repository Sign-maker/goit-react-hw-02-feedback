import { icons } from 'utils/icons';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <div className={css.gradeContainer}>
      <p className={css.statisticsItem}>
        <span className={css.gradeIcon}>{icons.good}</span>Good
        <span className={css.gradeQuantity}>{good}</span>
      </p>
      <p className={css.statisticsItem}>
        <span className={css.gradeIcon}>{icons.neutral}</span>
        Neutral<span className={css.gradeQuantity}>{neutral}</span>
      </p>
      <p className={css.statisticsItem}>
        <span className={css.gradeIcon}>{icons.bad}</span>
        Bad<span className={css.gradeQuantity}>{bad}</span>
      </p>
    </div>
    <p className={css.summary}>Total: {total}</p>
    <p className={css.summary}>
      {icons.positive}
      Positive feedback: {positivePercentage}%
    </p>
  </>
);
