import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import css from './FeedbackOptions.module.css';
import { icons } from 'utils/icons';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btnContainer}>
    {options.map(feedbackName => (
      <button
        key={feedbackName}
        className={css.button}
        onClick={() => onLeaveFeedback(feedbackName)}
      >
        {capitalizeFirstLetter(feedbackName)}
        <span>{icons[feedbackName]}</span>
      </button>
    ))}
  </div>
);

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//   console.log(Object.keys(options));
//   return (
//     <div className={css.btnContainer}>
//       <button className={css.button} onClick={() => onLeaveFeedback('good')}>
//         Good
//       </button>
//       <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>
//         Neutral
//       </button>
//       <button className={css.button} onClick={() => onLeaveFeedback('bad')}>
//         Bad
//       </button>
//     </div>
//   );
// };
