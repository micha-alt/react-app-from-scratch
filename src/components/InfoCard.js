// React Function Component
function InfoCard() {
  return (
    <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">React Components</div>
        <p className="text-gray-700 text-base">
          Building Blocks einer React-Anwendung sind die Komponenten. Diese
          können sowohl als Klassen- als auch als Funktions-Komponenten
          implementiert werden. Zu den Unterschieden: Funktions-Komponenten
          waren früher beschränkt auf die reine Darstellung von Daten und
          besaßen keinen eigenen Status. Dass heißt: Informationen wurden
          nur von "außen" bezogen, das Aussehen der Kompoente konnte nicht
          über einen eigenen State beeinflusst werden.
        </p>
        <p className="text-gray-700 text-base">
          Best Practice ist hier die Single-File-Responsibility, deshalb
          wurden die Komponenten in eigene Dateien ausgegliedert und über
          das ECMAScript Modul-System importiert. Die Anwendung im aktuellen
          Branch funktioniert demnach nicht mehr im IE.
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
