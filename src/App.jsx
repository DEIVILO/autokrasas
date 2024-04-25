import { useState } from 'react'
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Overlay from './components/Overlay';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Banner />
      <Overlay />
      <Footer />
    </>
  );
}

export default App
