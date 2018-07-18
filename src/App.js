import React from "react";
import Images from "./components/Images/Images";
import images from "./images.json";
import Score from "./components/Score/Score";
import './App.css';

class App extends React.Component {

  state = {
    img: images,
    score: 0,
    highscore: 0,
    clicked: [],
    alert: ""
  };

  markScore = (id) => {
    if (this.state.score === images.length - 1) {
      this.setState({
        score: this.state.score + 1,
        alert: "You Win!"
      })
      this.highScore();
      this.endGame();
    }
    else{
      if(this.state.clicked.indexOf(id) === -1) {
        this.setState({
          score: this.state.score + 1,
          alert: ""
        });
        this.state.clicked.push(id);
        this.highScore();
      }
      else {
        this.youLose();
      }
    }
  };

  highScore = () => {
    if(this.state.score >= this.state.highscore) {
      this.setState({
        highscore: this.state.score + 1
      })
    }
  };

  youLose = () => {
    this.setState({
      alert: "Try Again :("
    });
    this.endGame();
  }

  endGame = () => {
    this.setState({
      score: 0,
      clicked: []
    })
  }

  shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  render() {
    const shuffledImages = this.shuffleArray(this.state.img);
    return (
    <div className="box-king">
      <h1 className="title"><i className="fas fa-dice-three"></i> Memory Game <i className="fas fa-dice"></i></h1>
        <Score markScore = {this.markScore} score = {this.state.score} alert={this.state.alert} highscore={this.state.highscore} />
      <div className="big-box">
        {shuffledImages.map((img) => {
          return <Images
            key={img.id}
            id={img.id}
            image={img.image}
            markScore={this.markScore}
            endGame={this.endGame}
          />
        })}
      </div>
    </div>
    )}
};

export default App;