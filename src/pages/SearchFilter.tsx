import React, { useState } from 'react';

type Item = {
  id: number;
  name: string;
  category: string;
};

const mockData: Item[] = [
  { id: 1, name: 'Apple', category: 'Fruit' },
  { id: 2, name: 'Carrot', category: 'Vegetable' },
  { id: 3, name: 'Banana', category: 'Fruit' },
  { id: 4, name: 'Broccoli', category: 'Vegetable' },
  { id: 5, name: 'Orange', category: 'Fruit' },
];

const SearchFilter: React.FC = () => {
  const [query, setQuery] = useState('');
  

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredItems = mockData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase())); 

  return (
    <div>
      <h2>Search Filter</h2>
      <input 
        type="text" 
        placeholder="Search items..." 
        value={query} 
        onChange={handleSearch} 
      />
      <ul>
        {filteredItems.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
