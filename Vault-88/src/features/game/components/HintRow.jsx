export function HintRow({ digits, text }) {
  return (
    <div className="hint-row">
      <div className="hint-digits">
        {digits.map((digit, idx) => (
          <div key={idx} className="hint-digit">
            <span className="hint-digit-value">{digit}</span>
          </div>
        ))}
      </div>
      <p className="hint-text">{text}</p>
    </div>
  );
}
