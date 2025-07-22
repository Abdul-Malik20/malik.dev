// GitHubProjects.jsx
import React, { useEffect, useState } from "react";
import { BottomLine } from "./atoms";

const GitHubProjects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/Abdul-Malik20/repos")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data
                    .filter((repo) => !repo.fork)
                    .sort((a, b) => b.stargazers_count - a.stargazers_count);
                setRepos(sorted.slice(0, 6)); // Top 6 projects
            });
    }, []);

    return (
        <div className="my-10 mx-4 lg:mx-20">
            <h3 className="text-center text-neutral">📂 Featured </h3>
            <h1 className="text-4xl font-semibold text-center">
                 <span className="text-primary">GitHub Repositories</span>
            </h1>
            <BottomLine />
            <br/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-[#ECF8F9]  border rounded-lg hover:shadow-md transition"
                    >
                        <h3 className="text-lg font-bold text-[#22092C]">{repo.name}</h3>
                        <p className="text-sm text-[#640D5F] mt-1">
                            {repo.description || "Check My GitHub Account"}
                        </p>
                        <div className="mt-2 flex justify-between text-xs text-[#22092C]">
                            <span>⭐ {repo.stargazers_count}</span>
                            <span>🍴 {repo.forks_count}</span>
                            <span>🔤 {repo.language}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default GitHubProjects;
