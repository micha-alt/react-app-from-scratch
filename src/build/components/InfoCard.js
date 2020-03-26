// React Function Component
function InfoCard() {
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "px-6 py-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-bold text-xl mb-2"
  }, "React Components"), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700 text-base"
  }, "Building Blocks einer React-Anwendung sind die Komponenten. Diese k\xF6nnen sowohl als Klassen- als auch als Funktions-Komponenten implementiert werden. Zu den Unterschieden: Funktions-Komponenten waren fr\xFCher beschr\xE4nkt auf die reine Darstellung von Daten und besa\xDFen keinen eigenen Status. Dass hei\xDFt: Informationen wurden nur von \"au\xDFen\" bezogen, das Aussehen der Kompoente konnte nicht \xFCber einen eigenen State beeinflusst werden."), /*#__PURE__*/React.createElement("p", {
    className: "text-gray-700 text-base"
  }, "Best Practice ist hier die Single-File-Responsibility, deshalb wurden die Komponenten in eigene Dateien ausgegliedert und \xFCber das ECMAScript Modul-System importiert. Die Anwendung im aktuellen Branch funktioniert demnach nicht mehr im IE.")));
}

export default InfoCard;