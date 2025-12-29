export function MenuButton({ icon, label, onClick }) {
  return (
    <button onClick={onClick} className="menu-button glass-panel">
      <div className="menu-button-content">
        <div className="menu-button-icon-container">
          <span className="material-icons-round menu-button-icon">{icon}</span>
        </div>
        <span className="menu-button-label">{label}</span>
      </div>
      <span className="material-icons-round menu-button-arrow">chevron_right</span>
    </button>
  );
}
