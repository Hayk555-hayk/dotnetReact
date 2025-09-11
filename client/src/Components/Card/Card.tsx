import React from 'react'
import './Card.css'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <img src="https://wpblogassets.paytm.com/paytmblog/uploads/2022/01/row200_ATM_What-are-the-Types-of-ATM-Cards-800x500.png" alt="Image" />
        <div className='details'>
            <h2>AAPL</h2>
            <p>$100</p>
        </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis!</p>

    </div>
  )
}

export default Card;