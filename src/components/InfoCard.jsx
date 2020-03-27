import React from 'react';

// React Function Component
function InfoCard() {
  return (
    <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Bundling React</div>
        <p className="text-gray-700 text-base">
          Webpack bündelt jetzt nicht nur die App sondern auch React selbst.
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
