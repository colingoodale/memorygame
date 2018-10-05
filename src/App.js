import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard/memorycard';
import Wrapper from './components/Wrapper/Wrapper';
import Title from './components/Title/Title';
import API from './utils/API.json';
import './App.css';

class App extends Component {
    state = {
        API
    };
    markFriend = id => {
        //console.log("Clicked");
        //Create random number between 0 and length of API
        for (let i = 0; i < API.length; i++) {
            const markedFriend = API[i];
            if (API[i].click === true) {
                alert("Game Over Bucko!")
            } else {
                let swappedArray = [];
                let randomNumb = Math.floor(Math.random() * (this.state.API.length - 0 + 1))
                //console.log(randomNumb);
                //Run forLoop and swap the values from index of API and Random number
                for (let i = 0; i < this.state.API.length; i++) {

                    var newNumb = this.state.API[i];

                    this.state.API[i] = this.state.API[randomNumb];
                    this.state.API[randomNumb] = newNumb;
                    swappedArray.push(this.state.API[i]);
                }
                console.log(swappedArray);
                this.setState({ API: swappedArray })
            };
        }


    }

    render() {
        return (
            <Wrapper>
                <Title>Memory Game</Title>
                {this.state.API.map(friend => (
                    <MemoryCard
                        markFriend={this.markFriend}
                        id={friend.id}
                        key={friend.id}
                        image={friend.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
