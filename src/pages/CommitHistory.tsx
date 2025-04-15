import React, { useEffect, useState } from "react";

const CommitHistory: React.FC = () => {
    const [commits, setCommits] = useState<{ date: string; amount: number }[]>([]);
    const [maxCommits, setMaxCommits] = useState(0);


    useEffect(() => {
        async function getCommits(){
            const res = await fetch('https://api.github.com/repos/facebook/react/commits');
            const data = await res.json(); 
            const commitMap = new Map();
            for(const commit of data){
                const date = new Date(commit.commit.author.date);
                const key = date.toDateString();
                if(commitMap.has(key)){
                    commitMap.set(key, commitMap.get(key)+1);
                }
                else{
                    commitMap.set(key, 1);
                }
            } 
            const initialDate = new Date();
            const commitData = [];
            let max = 0;
            for(let i=1; i<30; i++){
                initialDate.setDate(i);
                const amount = commitMap.get(initialDate.toDateString()) || 0;
                max = Math.max(max, amount);
                console.log(max);
                const day = {
                    date: initialDate.toDateString(),
                    amount: amount, 
                }
                commitData.push(day);
            }
            setMaxCommits(max);
            setCommits(commitData);
        }
        getCommits();
    }, [])

    return (
        <div>
            {commits.map((commit) => (
                <CommitBlock key={commit.date} date={commit.date} commits={commit.amount} maxCommits={maxCommits}/>
            ))}
        </div>
    );
}

interface CommitBlockProps {
    commits: number,
    maxCommits: number,
    date: string,
}

const CommitBlock: React.FC<CommitBlockProps> = (props) => {
    const [show, setShow] = useState(false);
    const percentage = Math.floor(props.commits/props.maxCommits*100);

    let color = 'gray';
    if(!percentage)
        color = '#e6f3ec'
    else if(percentage<25)
        color = '#b5dbc6';
    else if(percentage<50)
        color = '#85c4a1';
    else if(percentage<75)
        color = '#54ac7b'
    else
        color = '#0b8943';

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{ 
                padding: '0px', 
                margin: '1px', 
                backgroundColor: color, 
                width: '15px', 
                height: '15px', 
                border: '1px',
                borderColor: 'black',
            }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >
            </div>
            {show && (
                <div
                style={{
                    position: 'absolute',
                    top: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'white',
                    color: 'black',
                    padding: '6px 10px',
                    fontSize: '12px',
                    borderRadius: '4px',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                }}
                >
                {props.date + ' / '}
                Commits: {props.commits}
                </div>
            )}
        </div>
    );
}

export default CommitHistory;