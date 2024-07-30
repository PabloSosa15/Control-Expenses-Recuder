import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AmountDisplay from './AmountDisplay';
import { useBudget } from '../hooks/useBudget';
import "react-circular-progressbar/dist/styles.css"
export default function BudgetTracker() {
  const { state, totalExpense, remainingBudget, dispatch } = useBudget()

  const percentage = +((totalExpense / state.budget ) * 100).toFixed(2)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({
            pathColor: percentage === 100 ? '#DC2626' : ' #3b82f6',
            trailColor: '#F5F5',
            textSize: 8,
            textColor: '3b82f6'
          })}
          text={`${percentage}% Expensed`}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <button
          type="button"
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
          onClick={() => dispatch({ type: 'reset-app' })}
        >
          Reset App
              </button>
              
              <AmountDisplay
                  label="Budget"
                  amount={state.budget}
              />
              <AmountDisplay
                  label="Available"
                  amount={remainingBudget}
              />
              <AmountDisplay
                  label="Spent"
                  amount={totalExpense}
              />
      </div>
    </div>
  );
}
