export function DigitBox({ value, onClick }) {
  return (
    <div onClick={onClick} className="digit-box wood-shadow">
      <div className="digit-box-overlay"></div>
      <span className="digit-value">{value}</span>
    </div>
  );
}
