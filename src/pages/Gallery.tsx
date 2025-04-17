import React, { useState, useEffect } from "react";

interface Characters {
    name: string,
    image: string,
    isAlive: boolean
}

const Gallery: React.FC = () => {
    const [characters, setCharacters] = useState<Characters[]>([]);
    const [charfilter, setCharfilter] = useState('all');

    const displayCharacters = characters.filter((character) => {
        if(charfilter === 'all'){
            return true;
        }
        else if(charfilter === 'death'){
            return !character.isAlive
        }
        else{
            return character.isAlive;
        }
    })

    useEffect(() => {
        const getData = async () => {
            const request = await fetch('https://rickandmortyapi.com/api/character');
            const data = await request.json();
            setCharacters(data.results.map((character: any) => (
                {
                    name: character.name,
                    image: character.image,
                    isAlive: character.status === "Alive"
                }
            )))
        }

        getData()
        
    }, []);

    const setSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setCharfilter(selectedValue);
    }

    return (
        <div>
            <select onChange={(e) => setSelection(e)} name="status">
                <option value="all">All</option>
                <option value="death">Death</option>
                <option value="alive">Alive</option>
            </select>
            <ul>
                {displayCharacters.map((character) => (
                    <li key={character.name}>
                        {character.name}
                        <br/>
                        <img src={character.image} style={{height:'60px', margin:'10px'}}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Gallery;