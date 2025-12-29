export function Placeholder({ title, onBack }) {
  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-white/60 mb-8">Coming soon...</p>
        {onBack && (
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all"
          >
            Back to Menu
          </button>
        )}
      </div>
    </div>
  );
}
