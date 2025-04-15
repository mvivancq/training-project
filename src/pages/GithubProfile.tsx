import React, {useState} from "react";

const GithubProfile: React.FC = () => {
    const [uname, setUname] = useState('');
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [repoAmount, setRepoAmount] = useState(0);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getInformation = async () => {
        try{
            setError(false);
            setLoading(true);
            const res = await fetch(`https://api.github.com/users/${uname}`);
            const data = await res.json(); 
            const resRepos = await fetch(`https://api.github.com/users/${uname}/repos`);
            const dataRepos = await resRepos.json(); 
            setRepos(dataRepos.slice(0, 5).map((repo: any) => repo.name));
            setName(data.name);
            setAvatar(data.avatar_url);
            setBio(data.bio);
            setRepoAmount(data.public_repos);
            setLoading(false);
        }
        catch {
            setError(true);
        }
    }

    return (
        <div>
            <label>Username: </label>
            <input onChange={(e) => setUname(e.target.value)} type="text"/>
            <button onClick={getInformation}>Search</button>
            { (!error && !loading) &&
                <div>
                    <img src={avatar} alt="avatar" style={{ height:'40px'}}/>
                    <br/>
                    Name: {name}
                    <br/>
                    {bio}
                    <br/>
                    Repos: {repoAmount}
                    <br/>
                    Top 5:
                    <ul>
                    {repos.map((repo) => (
                        <li key={repo}>
                            {repo}
                        </li>
                    ))}
                    </ul>
                </div>
            }
            { (loading) &&
                <div style={{color: 'Green'}}>
                    Loading...
                </div>
            }
            { (error) &&
                <div style={{color: 'Red'}}>
                    Error, try again
                </div>
            }

        </div>
    );
}

export default GithubProfile;