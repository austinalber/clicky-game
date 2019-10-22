import React, { useState } from "react";
import { useAlert } from "react-alert";
import NavBar from "./components/NavBar";
import characters from "./characters.json"
import Card from "./components/Card"
import Footer from "./components/Footer"
import "./app.css"

const App = () => {
  const alert = useAlert();
  const charactersList = characters;
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const gameOver = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    charactersList.forEach(character => {
      character.count = 0;
    });
    console.log(`Game Over! Score: ${score}`);
    alert.error(`Game Over! Score: ${score}`);
    setHighScore(score);
    setScore(0);
    return true;
  }

  const clickCount = id => {
    charactersList.find((event, i) => {
      if (event.id === id) {
        if(charactersList[i].count === 0){
          charactersList[i].count = charactersList[i].count + 1;
          setScore(score + 1)
          charactersList.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          gameOver();
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
