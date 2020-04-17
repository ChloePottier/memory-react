import React from 'react'
import './Card.css'

const HIDDEN_SYMBOL = '❓',
// contante Card (non natif) = fonction card, feedback => 
 Card = ({ card, feedback }) => (
    // la class est variable de card a feedback. card est un string, {feedback} une variable : incrustaion dynamique
    <div className={`card ${feedback}`}>
      <span className="symbol">
          {/*si feedback est caché alors affiché le symbole ? sinon affiché la carte*/}
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )

export default Card
