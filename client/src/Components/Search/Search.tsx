import React, { useState } from 'react'
import './Search.css';
import { JSX } from 'react/jsx-runtime';


type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>();
    const onClick = (e: any) => {setSearch(e.target.value); console.log(e)}
  return (
    <div>
        <input value={search} onChange={(e) => onClick(e)} type="text" />
    </div>
  )
}

export default Search;