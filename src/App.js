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
    {id: 1,
      question: "Who is the president of Nigeria?",
      answers: [{option: "Obasanjo", correct: false},{option: "Jonathan", correct: false},{option: "Buhari",correct: true},{option: "Tinubu",correct: false}]
    },
    {id: 2,
      question: "Which is a popular blog in Nigeria?",
      answers: [{option: "TalkNetwork", correct: false},{option: "InstaBlog", correct: true},{option: "Channels",correct: false},{option: "Tribune",correct: false}] 
    },
    {id: 3,
      question: "Which of these social media platforms is currently banned in Nigeria?",
      answers: [{option: "WhatsApp", correct: false},{option: "TikTok", correct: false},{option: "Facebook",correct: false},{option: "Twitter",correct: true}]
    },
    {id: 4,
      question: "One of these is a popular skit maker in Nigeria",
      answers: [{option: "Mr Spaghetti", correct: false},{option: "Mr Macaroni", correct: true},{option: "Ms Noodles",correct: false},{option: "Bro Pasta",correct: false}]
    },
    {id: 5,
      question: "Which Nigerian artiste is popularly known as the 'African Giant'?",
      answers: [{option: "Burna Boy", correct: true},{option: "Wizkid", correct: false},{option: "Davido",correct: false},{option: "Olamide",correct: false}]
    },
    {id: 6,
      question: "A popular slang for 'heartbreak' in Nigeria is called?",
      answers: [{option: "Breakfast", correct: true},{option: "Tea Break", correct: false},{option: "Lunch",correct: false},{option: "Dinner",correct: false}]
    },
    {id: 7,
      question: "All these are Nigerian Banks except",
      answers: [{option: "Access", correct: false},{option: "Stanbic", correct: false},{option: "PiggyVest",correct: true},{option: "Heritage",correct: false}]
    },
    {id: 8,
      question: "Who was the host of the show 'who wants to be a millionaire'?",
      answers: [{option: "Mo Abudu", correct: false},{option: "Toke Makinwa", correct: false},{option: "Ebuka",correct: false},{option: "Frank Edoho",correct: true}]
    },
    {id: 9,
      question: "Which Nigerian celebrity is mostly used for memes?",
      answers: [{option: "John Okafor", correct: false},{option: "Osita Iheme", correct: true},{option: "Odunlade",correct: false},{option: "Adeniyi Afonja",correct: false}]
    },
    {id: 10,
      question: "Which club shares a name with a popular alcoholic drink in Nigeria?",
      answers: [{option: "LIverpool", correct: false},{option: "Arsenal", correct: false},{option: "Chelsea",correct: true},{option: "Everton",correct: false}]
    },
    {id: 11,
      question: "Which of these is a programming language?",
      answers: [{option: "Black Mamba", correct: false},{option: "Cobra", correct: false},{option: "Anaconda",correct: false},{option: "Python",correct: true}]
    },
    {id: 12,
      question: "All these are South African companies except?",
      answers: [{option: "Shoprite", correct: false},{option: "DSTV", correct: false},{option: "Innoson",correct: true},{option: "MTN",correct: false}]
    },
    {id: 13,
      question: "Which of these is a cryptocurrency?",
      answers: [{option: "Dollar", correct: false},{option: "Bitcoin", correct: true},{option: "Euro",correct: false},{option: "Pound",correct: false}]
    },
    {id: 14,
      question: "Covid-19 is a ...?",
      answers: [{option: "Pathogen", correct: false},{option: "Parasite", correct: false},{option: "Bacteria",correct: false},{option: "Virus",correct: true}]
    },
    {id: 15,
      question: "Amazon is owned which of these billionaires?",
      answers: [{option: "Jeff Bezos", correct: true},{option: "Elon Musk", correct: false},{option: "Bill Gates",correct: false},{option: "Warren Buffet",correct: false}]
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
