import './AttemptsHistory.css';

export function AttemptsHistory({ attempts }) {
  if (attempts.length === 0) return null;

  return (
    <div className="attempts-history">
      <div className="attempts-scroll custom-scrollbar">
        {attempts.map((attempt, attemptIndex) => (
          <div key={attemptIndex} className="attempt-row">
            {attempt.digits.map((digit, digitIndex) => (
              <div
                key={digitIndex}
                className={`attempt-digit ${attempt.feedback[digitIndex]}`}
              >
                {digit}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
