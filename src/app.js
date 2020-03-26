// Creating React element with text content
const elt = <h1 className="text-2xl">Step 2: JSX (runtime compiled)</h1>;

// Creating React element with nested elements
const card = (
  <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">JSX ist eine JavaScript Extension</div>
      <p className="text-gray-700 text-base">
        Es ist also eine Vorbehandlung des Quelltextes für den Browser nötig. Dies kann
        beispielsweise von <a href="https://babeljs.io/" className="underline">Babel</a> geleistet
        werden. Es ist sogar eine Runtime-Compilierung möglich.
      </p>
    </div>
  </div>
);

ReactDOM.render(elt, document.getElementById('root'));
ReactDOM.render(card, document.getElementById('card'));
