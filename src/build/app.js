// Creating React element with text content
const elt = /*#__PURE__*/React.createElement("h1", {
  className: "text-2xl"
}, "Step 3: JSX (devtime compiled)"); // Creating React element with nested elements

const card = /*#__PURE__*/React.createElement("div", {
  className: "max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg"
}, /*#__PURE__*/React.createElement("div", {
  className: "px-6 py-4"
}, /*#__PURE__*/React.createElement("div", {
  className: "font-bold text-xl mb-2"
}, "JSX ist eine JavaScript Extension"), /*#__PURE__*/React.createElement("p", {
  className: "text-gray-700 text-base"
}, "Die Runtime-Compilierung ist verst\xE4ndlicherweise viel zu teuer was Performance betrifft. Also wird eine npm-basierte Toolchain aufgesetzt um m\xF6glichst komfortabel schon zur Entwicklungszeit die JSX-\xDCbersetzung anzustossen.")));
ReactDOM.render(elt, document.getElementById('root'));
ReactDOM.render(card, document.getElementById('card'));