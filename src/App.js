import GamePage from "./Components/GamePage";
import "./App.css";


function App() {
  const money = [
    {id: 15, amount: " $ 1000000"},
    {id: 14,amount: " $ 1000000"},
    {id: 13,amount: " $ 1000000"},
    {id: 12,amount: " $ 1000000"},
    {id: 11, amount: " $ 1000000"},
    {id: 10,amount: " $ 1000000"},
    {id: 9,amount: " $ 1000000"},
    {id: 8,amount: " $ 1000000"},
    {id: 7, amount: " $ 1000000"},
    {id: 6,amount: " $ 1000000"},
    {id: 5,amount: " $ 1000000"},
    {id: 4,amount: " $ 1000000"},
    {id: 3, amount: " $ 1000000"},
    {id: 2,amount: " $ 1000000"},
    {id: 1,amount: " $ 1000000"}
];


  const data = [
    {
      id: 1,
      question: "whats your name?",
      answers: [
         {
           option: "Tola",
           correct: false
         },
         {
          option: "Tayo",
          correct: false
        },
        {
          option: "Tominiyi",
          correct: true
        },
        {
          option: "Timileyin",
          correct: false
        }
      ]
    }
  ];

  

  return (
    <div className="App">
      <GamePage
      data = {data}
      money = {money}
      />   
    </div>
  );
}

export default App;
