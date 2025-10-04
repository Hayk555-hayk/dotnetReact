import React, { useState, SyntheticEvent } from 'react'
import './Search.css';
import { JSX } from 'react/jsx-runtime';


type Props = {}

const Search : React.FC<Props> = (props: Props) : JSX.Element => {
    const [search, setSearch] = useState<string>();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {setSearch(e.target.value); console.log(e)}

    const onClick = (e: SyntheticEvent) => {}

  return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)} type="text" />
        <button onClick={(e) => onClick(e)} />
    </div>
  )
}

export default Search;