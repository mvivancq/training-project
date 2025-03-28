import React, { useRef, useState } from 'react';

const mockData = [
  { id: 1, name: 'Notebook' },
  { id: 2, name: 'Pen' },
  { id: 3, name: 'Pencil' },
  { id: 4, name: 'Eraser' },
  { id: 5, name: 'Ruler' },
];

const useDebounce = () => {
    const [query, setQuery] = useState('');
    const timer = useRef<any | null>(null);

    const data = mockData.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(timer.current)
            clearTimeout(timer.current);
        timer.current = setTimeout(() => setQuery(e.target.value), 1000);
    }

    return { handleQuery, data }
}

const DebouncedSearch: React.FC = () => {
    const { handleQuery, data } = useDebounce()

    return (
        <div>
            <h2>Debounced Search</h2>
            <input type="text" onChange={handleQuery} placeholder="Search..." />
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DebouncedSearch;
