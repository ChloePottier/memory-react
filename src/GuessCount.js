import React from 'react'

import './GuessCount.css'
// contante Card (non natif) = guesses => qui retourne <div class="guesses">nb tentatives</div>
const GuessCount = ({guesses}) => <div className="guesses">{guesses}</div>

export default GuessCount