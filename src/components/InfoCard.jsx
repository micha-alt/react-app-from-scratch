import React from 'react';

// React Function Component
function InfoCard() {
  return (
    <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Development Build</div>
        <p className="text-gray-700 text-base">
          Liefert die App zur Entwicklungszeit über den Webpack Dev Server aus.
          Und überwacht gleichzeitig den Source-Code auf Änderungen, um
          dann den Browser anschließend neu zu laden.
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
