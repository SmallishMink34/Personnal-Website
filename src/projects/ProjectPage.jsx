import RepoComponent from "./RepoComponent.jsx";
import axios from 'axios';
import {useEffect, useState} from "react";

export function ProjectPage(){
    const [repos, setRepos] = useState([]);
    const username = "SmallIshMink34";
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${username}/repos`);
                const sortedRepos = response.data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

                setRepos(sortedRepos);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        };

        fetchRepos().then(r => console.log(r)   );
    }, [username]);


    return(
        <div>
            {repos.map((repo, index) => (
                <RepoComponent key={index} username={"SmallIshMink34"} repoName={repo.name} />
            ))}
        </div>
    );
}