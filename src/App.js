import React, { Component } from "react";
import NavBar from "./components/NavBar";
import characters from "./characters.json"
import Card from "./components/Card"
import "./app.css"

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  }

  gameOver = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({highScore: this.state.score}, function() {
        console.log(this.state.highScore);
      });
    }
    this.state.characters.forEach(character => {
      character.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.characters.find((event, i) => {
      if (event.id === id) {
        if(characters[i].count === 0){
          characters[i].count = characters[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.characters.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return(
      <div 
        className="wrapper"
        style = {{
          backgroundImage: 'url(' + "http://getwallpapers.com/wallpaper/full/1/4/7/29914.jpg" + ')',
          backgroundSize: 'cover',
          // overflow: 'hidden',
        }}
      >
        <NavBar score={this.state.score} highScore={this.state.highScore}/>
        {this.state.characters.map(characters => (
          <Card
            clickCount={this.clickCount}
            id={characters.id}
            key={characters.id}
            image={characters.image}
          />
        ))}
      </div>
    );
  }
}

export default App;
