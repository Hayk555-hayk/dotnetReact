import React, { JSX } from 'react'
import Card from '../Card/Card';

interface Props {};

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
        <Card companyName='Apple' ticker='APPL' price={1000} />
        <Card companyName='Microsoft' ticker='MSFT' price={2000} />
        <Card companyName='Samsung' ticker='SMG' price={500} />
    </div>
  )
}

export default CardList;