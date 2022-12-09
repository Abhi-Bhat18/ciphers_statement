import Features from './components/Features';
import EntryPoint from './screens/EntryPoint';
import Footer from './components/Footer'
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='bg-gray-900'>
      <div className="max-w-6xl mx-auto ">
        <NavBar />
        <EntryPoint />
        <Features />
        <Footer />

      </div>
    </div>
  )
}

export default App
