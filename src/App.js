import React, { useState } from "react";
import { useAlert } from "react-alert";
import NavBar from "./components/NavBar";
import characters from "./characters.json"
import Card from "./components/Card"
import Footer from "./components/Footer"
import "./app.css"

const App = () => {
  // Declare variables and state changes
  const alert = useAlert();
  const charactersList = characters;
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Function to determine if game is over and end game
  const isGameOver = () => {
    if (score > highScore) {
      // Update highScore if score is greater than previous highScore
      setHighScore(score);
    }
    // Resets count after each click. Prevents image from restarting game if it was not immediate previous click
    charactersList.forEach(character => {
      character.count = 0;
    });
    // Display game over and update data
    console.log(`Game Over! Score: ${score}`);
    alert.error(`Game Over!`);
    alert.error(`Final Score: ${score}`);
    setHighScore(score);
    setScore(0);
    return true;
  }

  // Updates count variable in charactersList
  const clickCount = id => {
    // Next line is to remove problems through eslint
    // eslint-disable-next-line
    charactersList.find((event, i) => {
      // If clicked item matched an id then continue
      if(event.id === id) {
        // If character was not previously clicked, increase score and update
        if(charactersList[i].count === 0){
          charactersList[i].count = charactersList[i].count + 1;
          setScore(score + 1)
          charactersList.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          // If character was previously clicked, run isGameOver()
          isGameOver();
        }
      }
    });
  }

  return(
    <div 
      className="wrapper"
      style = {{
        backgroundImage: 'url("http://getwallpapers.com/wallpaper/full/1/4/7/29914.jpg")',
        backgroundSize: "cover",
        overflow: "hidden"
      }}
    >
      <NavBar score={score} highScore={highScore}/>
      {charactersList.map(charactersList => (
        <Card
          clickCount={clickCount}
          id={charactersList.id}
          key={charactersList.id}
          image={charactersList.image}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
