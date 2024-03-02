import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from "prop-types";



const GitHubRepoInfo = ({ username, repoName }) => {
    const [repoInfo, setRepoInfo] = useState(null);

    useEffect(() => {
        const fetchRepoInfo = async () => {
            try {
                const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
                setRepoInfo(response.data);
            } catch (error) {
                console.error('Error fetching repository information:', error);
            }
        };

        fetchRepoInfo().then(r => console.log(r) );
    }, [username, repoName]);

    if (!repoInfo) {
        return <div>Loading...</div>;
    }

    return (
            <li>
                <div className={"date"}></div>
                <div className={"title"}><a href={repoInfo.html_url} target="_blank" rel="noreferrer">
                    <h2>{repoInfo.full_name}</h2></a>
                </div>
                <div className={"descr"} style={{color: "white"}}>repoInfo.description</div>
                {/*    <p>Description: {repoInfo.description}</p>*/}
                {/*<p>Stars: {repoInfo.stargazers_count}</p>*/}
                {/*<p>Open Issues: {repoInfo.open_issues}</p>*/}
                {/*<p> Language : {repoInfo    .language} </p>*/}
                {/*<p> </p>*/}
                {/* Add more info as needed */}
            </li>

    );
};

GitHubRepoInfo.propTypes = {
    username: PropTypes.string.isRequired,
    repoName: PropTypes.string.isRequired
};

export default GitHubRepoInfo;
