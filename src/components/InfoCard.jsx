// React Function Component
function InfoCard() {
  return (
    <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">SPA</div>
        <p className="text-gray-700 text-base">
          Die Definition SPA wird (noch) nicht ganz getroffen, aber jetzt
          wird der komplette Content der Seite über React erzeugt und die
          Toolchain hat ebenso Kontrolle über die Index-Seite.
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
