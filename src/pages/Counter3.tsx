import React, {useState} from "react";

const CountDown: React.FC = () => {
    const [count, setCount] = useState(0);
    const [error, setError] = useState(false);

    const startCount = () => {
        console.log('start')
        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 0) {
                    clearInterval(interval);
                    return 0; 
                }
                return prevCount - 1;
            });              
        }, 1000)
    }

    const validateCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if(value >= 0 && value <= 100){
            setError(false);
            setCount(value);
        }
        else{
            setError(true);
        }
    }

    return(
        <div>
            <label>Enter count:{" "}</label>
            <input type="number" value={count} onChange={validateCount}/>
            {error && <p style={{color: 'red'}}>Number should be between 0 and 100</p>}
            <br/><br/>
            <button onClick={startCount}>Start</button>
            <h3>Count: {count}</h3>
        </div>
    )
}

export default CountDown;