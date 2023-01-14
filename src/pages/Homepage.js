import React, { useState, useEffect } from 'react';
import CardList from '../components/card-list/card-list'
import SearchBox from '../components/search-box/search-box'

const Homepage = () => {
    const [monster, setMonster] = useState([]);
    const [searchString, setSearchString] =useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monster)
    

    useEffect(() => {
        async function fetchAPI() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data =await response.json();
                setMonster(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchAPI();
    }, [])

    useEffect(() => {
        const newFilteredMonsters = (monster.filter((monster) => {
            return monster.name.toLowerCase().includes(searchString)
        }));
        setFilteredMonsters(newFilteredMonsters)
    }, [monster, searchString])

    const change = (event) =>{
        const searchField =event.target.value.toLowerCase();
        setSearchString(searchField)
    }


    return (
        <>
            <a href='https://christopherhile.com/'>Return to Christopher Hile</a>
            <h1>Monster Rolodex</h1>
            <SearchBox 
                className = 'searchMonsters'
                onChangeHandler = {(change)} 
                placeholder='search monsters'
            />            
            <CardList monsters={filteredMonsters} />
        </>
    )
}
export default Homepage;