import { useCallback, useState } from 'react'
import Features from './components/Features';
import Openings from './components/Openings';
import CollectCv from './screens/cvCollect';
import EntryPoint from './screens/EntryPoint';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Footer from './components/Footer'
function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <div className="">
      <EntryPoint />
      <Features />
      <Particles id="tsparticles" url='/static/confetti.json' init={particlesInit} loaded={particlesLoaded} />
      <Footer/>
    </div>
  )
}

export default App
