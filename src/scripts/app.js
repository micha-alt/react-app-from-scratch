// Creating React element with text content
const elt = <h1 className="text-2xl">Step 3: JSX (devtime compiled)</h1>;

// Creating React element with nested elements
const card = (
  <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">JSX ist eine JavaScript Extension</div>
      <p className="text-gray-700 text-base">
        Die Runtime-Compilierung ist verständlicherweise viel zu teuer was Performance betrifft.
        Also wird eine npm-basierte Toolchain aufgesetzt um möglichst komfortabel schon
        zur Entwicklungszeit die JSX-Übersetzung anzustossen.
      </p>
    </div>
  </div>
);

ReactDOM.render(elt, document.getElementById('root'));
ReactDOM.render(card, document.getElementById('card'));
