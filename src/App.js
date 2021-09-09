import GamePage from "./Components/GamePage";
import "./App.css";


function App() {
  const money = [
    {id: 15, amount: " $ 1 MILLION"},
    {id: 14,amount: " $ 500000"},
    {id: 13,amount: " $ 250000"},
    {id: 12,amount: " $ 125000"},
    {id: 11, amount: " $ 64000"},
    {id: 10,amount: " $ 32000"},
    {id: 9,amount: " $ 16000"},
    {id: 8,amount: " $ 8000"},
    {id: 7, amount: " $ 4000"},
    {id: 6,amount: " $ 2000"},
    {id: 5,amount: " $ 1000"},
    {id: 4,amount: " $ 500"},
    {id: 3, amount: " $ 300"},
    {id: 2,amount: " $ 200"},
    {id: 1,amount: " $ 100"}
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
    },
    {
      id: 1,
      question: "whats your country?",
      answers: [
         {
           option: "Morrocco",
           correct: false
         },
         {
          option: "Nigeria",
          correct: true
        },
        {
          option: "Kenya",
          correct: false
        },
        {
          option: "South Africa",
          correct: false
        }
      ]
    },
    {
      id: 1,
      question: "whats your age?",
      answers: [
         {
           option: 33,
           correct: true
         },
         {
          option: 24,
          correct: false
        },
        {
          option: 43,
          correct: false
        },
        {
          option: 19,
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
