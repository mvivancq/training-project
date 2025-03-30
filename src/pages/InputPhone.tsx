import React, {useState} from 'react';

const PhoneInput: React.FC = () => {
    const [number, setNumber] = useState('');

    const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const parsedInput = input.replace(/\D/g, '');
        let displayText = ''
        if(parsedInput.length > 0)
            displayText = '(' + parsedInput.slice(0, 3);
        if(parsedInput.length > 3)
            displayText = displayText + ')' + parsedInput.slice(3, 6);
        if(parsedInput.length > 6)
            displayText = displayText + '-' + parsedInput.slice(6, 10);
        setNumber(displayText);
    }

    return (
        <div>
            <h2>Phone Input</h2>
            <input type="text" onChange={handlePhone} value={number} placeholder="(123) 456-7890" />
        </div>
    );
};

export default PhoneInput;
