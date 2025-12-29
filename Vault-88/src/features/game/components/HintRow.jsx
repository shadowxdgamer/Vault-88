import { useLanguage } from '../../../shared/hooks/useLanguage';

export function HintRow({ digits, text, type }) {
  const { t } = useLanguage();
  
  // Use translation if type is provided, otherwise fallback to text
  const displayText = type ? t(`game.hints.${type}`) : text;
  
  return (
    <div className="hint-row">
      <div className="hint-digits">
        {digits.map((digit, idx) => (
          <div key={idx} className="hint-digit">
            <span className="hint-digit-value">{digit}</span>
          </div>
        ))}
      </div>
      <p className="hint-text">{displayText}</p>
    </div>
  );
}
