import './App.css'

import Header from './components/modules/Header'
import Card from './components/modules/Card'
// import Image from './components/modules/image'
import Skill from './components/Skill'


function App() {
  return (
    <div className="Homepage">
      <Header />
      <img src={`${process.env.PUBLIC_URL}/top_image.jpg`} alt="Top_image" width="100%" height="10%" />
      {/* <Myself /> */}
      <Skill />
      {/* <Card /> */}
    </div>
  )
}

// image={ '${process.env.PUBLIC_URL}/image/top_image.jpg' } 
export default App