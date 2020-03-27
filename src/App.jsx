import AppTitle from './components/AppTitle';
import InfoCard from './components/InfoCard';

function App() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">React SPA From Scratch</span>
        </div>
      </nav>
      <div className="container mx-auto px-4 mt-4">
        <AppTitle/>
        <InfoCard/>
      </div>
    </>
  );
}

export default App;
