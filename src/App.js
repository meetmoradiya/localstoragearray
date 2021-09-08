import './App.css';
import PopUp from './PopUp';
import React, { useEffect } from 'react';

function App() {
  const [data, setData] = React.useState([])
  // const [dataarr , setDataArr]  =React.useState([
  //   {
  //     question:data.question,
  //     answer:data.answer
  //   }
  // ])
  const [openpopup, setOpenPopUp] = React.useState(false)
  useEffect(() => {

    setData(JSON.parse(localStorage.getItem("session")))



  }, [openpopup])


  const closePopUp = () => {
    setOpenPopUp(!openpopup)
  }

  return (
    <div className="App">
      <button className="w-5/12 mx-auto bg-purple-800 text-purple-100 text py-2  rounded-xl " onClick={() => { setOpenPopUp(!openpopup) }}>click to submit the question</button>
      {openpopup ? <PopUp close={closePopUp} /> : ""}
      {data ? (data.map((datad) => (
        <div className="container mx-auto ">

          <h1>{datad?.question ? datad?.question : ""}</h1>
          <h1>{datad?.answer ? datad?.answer : ""}</h1>
        </div>
      ))) : ""}
    </div>
  );
}

export default App;
