
import './Cardp.css';
//import App2 from './Component/Greeting';
import Card from './Component/Cardp';
import img1 from "./assets/pr1.jpg";
import img2 from "./assets/pr2.jpg";
import img3 from "./assets/pr3.jpg"

function App() {
  return (
    <>
    <div className="App">
      <Card imga={img1} bname="View More" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="David Dell" fname="Full Stack devloper"/>
      <Card imga={img2} bname="View More" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Rse Bush" fname="Full Stack devloper"/>
      <Card imga={img3} bname="View More" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Jones Gail" fname="Full Stack devloper"/>
    </div>
    <div className="App2">
      <Card imga={img1} bname="View More" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="David Dell" fname="Full Stack devloper"/>
      <Card imga={img2} bname="View More" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Rse Bush" fname="Full Stack devloper"/>
      <Card imga={img3} bname="View More" des="The lorem text the section that contains header with having open functionality. Lorem dolor sit amet consectetur adipisicing elit." name="Jones Gail" fname="Full Stack devloper"/>
    </div>
    </>
  );
}

export default App;
