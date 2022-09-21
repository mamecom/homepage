import './App.css'

import Header from './components/modules/Header'
//import Card from './components/modules/Card'
// import Image from './components/modules/image'
import Skill from './components/pages/Skill'
import Myself from './components/pages/Myself'
import Footer from './components/modules/Footer'

function App() {
  return (
    <div className="Homepage" >
      <Header />
      <img src={`${process.env.PUBLIC_URL}/image/top_image.jpeg`} alt="Top_image" width="100%" height="10%" />
      <Myself />
      <Skill />
      <Footer />
    </div>
  )
}
export default App