import React, { JSX } from 'react'
import './Card.css'

interface Props {
  companyName: string;
  ticker: string;
  price: number;
};

const Card: React.FC<Props> = ({companyName, ticker, price}: Props): JSX.Element => {
  return (
    <div className='card'>
        <img src="https://wpblogassets.paytm.com/paytmblog/uploads/2022/01/row200_ATM_What-are-the-Types-of-ATM-Cards-800x500.png" alt="Image" />
        <div className='details'>
            <h2>{companyName}</h2>
            <p>${price}</p>
        </div>
        <p className='info'>{ticker} - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, quis!</p>

    </div>
  )
}

export default Card;