import './Heading.css'
import './Cardp.css';
import './Footer.css'
//import App2 from './Component/Greeting';
import Card from './Component/Cardp';
import img1 from "./assets/pr1.jpg";
import img2 from "./assets/pr2.jpg";
import img3 from "./assets/pr3.jpg";
import img4 from "./assets/pr4.jpg";
import img5 from "./assets/pr.jpg";
import img6 from "./assets/pr5.jpg";
import Heading from './Component/Heading';
import Data from './Component/Data';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Heading/>
    <div className="App">
      {
       Data.map((cva,ind) =>{
        return <Card key={ind} name={cva.name} bname={cva.bname} des={cva.des} fname={cva.fname} img={cva.img}/>
       })
      }
    </div>
    <div className="App2">
    {
       Data.map((cva,ind) =>{
        return <Card key={ind} name={cva.name} bname={cva.bname} des={cva.des} fname={cva.fname} img={cva.imga}/>
       })
      }
    </div>
    <Footer/>
    </>
  );
}

export default App;
