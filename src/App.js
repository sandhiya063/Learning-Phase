import logo from './logo.svg';
import './App.css';
import Task from './Task';
function App() {
  const arr=[1,2,3,4,5]
  const arrob=[
    {
      name:"Sandhiya",
      Dept:"CSE",
      College:"Muthayammal Engineering College"
    },
    {
      name:"Sasmithaa",
      Dept:"CSE",
      College:"Muthayammal Engineering College"
    },
    {
      name:"Gayathri",
      Dept:"CSE",
      College:"Muthayammal Engineering College"
    }
  ]
   return (
    <div>
      <Task test={arr} completed={arrob}/>
     
    </div>
    );
}

export default App;
