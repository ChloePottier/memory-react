import React, { Component } from 'react'
import './App.css'
import Card from './Card'
import GuessCount from './GuessCount'


// objet App
class App extends React.Component {

  render() {
    return (
      <div className="memory">
        {/* compteur de tentative */}
        <GuessCount guesses={0} />
        {/* declaration des états de la carte */}
        {/* la carte est cachée*/}
        <Card card="😀" feedback="hidden" />
        {/* La carte fait partie de la tentative en cours, qui vient de réussir une paire*/}
        <Card card="🎉" feedback="justMatched" />
        {/*La carte fait partie de la tentative en cours, qui vient de rater une paire */}
        <Card card="💖" feedback="justMismatched" />
        {/* La carte appartient à une paire précédemment réussie */}
        <Card card="🎩" feedback="visible" />{/* La carte appartient à une paire précédemment réussie */}
        <Card card="🐶" feedback="hidden" />
        <Card card="🐱" feedback="justMatched" />
      </div>
    )
  }
}

export default App
