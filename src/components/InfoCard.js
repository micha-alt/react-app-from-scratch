// React Function Component
function InfoCard() {
  return (
    <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Module Bundler Webpack</div>
        <p className="text-gray-700 text-base">
          <a href="https://webpack.js.org/">Webpack</a> ist ein Module-Bundler. Das heißt: die
          hier benutzten ECMAScript-Module werden schon zur Entwicklungs-Zeit zusammengefasst
          zu einem Bundle - also genau einer Datei. Damit entfällt natürlich die Einschränkung,
          dass der IE diese App nicht mehr laden kann. Außerdem bringt es zumindest bei HTTP 1.1
          eine gewisse Performance-Verbesserung mit, anstatt hunderten einzelnen Dateien nur
          eine gebündelte zu laden. Damit die IE Kompatibilität erreicht wird, sollte natürlich
          auch Babel angewiesen werde, moderne Syntax-Features aus unserem Quellcode
          heraus zu "transpilieren".
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
