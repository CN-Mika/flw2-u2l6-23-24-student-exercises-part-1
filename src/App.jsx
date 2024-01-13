import "./App.css";
import React, { useState } from "react";

export default function App() {
  let [jokeAnswer, setJokeAnswer] = useState("");
  
  return (
    <div className="App">
      <h1>Jokes of the Day!</h1>
      <img
        alt="people laughing"
src="https://media.newyorker.com/photos/655e365e5d4e798850508bfd/master/w_2560%2Cc_limit/Jokes_final.jpg"
      />
      <h2>Click the buttons and check the console to see the answers to these different jokes 👀</h2>
      <button>What did the left eye say to the right eye?</button>
      {/* Between you and me, something smells */}
      <button>What's orange and sounds like a parrot?{/* A carrot */}</button>
      <p>Joke answer goes here.</p>
    </div>
  );
}
