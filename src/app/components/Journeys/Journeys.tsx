import React, { useEffect, useState } from "react"

interface Stage {
    stage: string,
    description: string,
    duration: string,
    resources: Resource[]
}

interface Resource {
    link: string,
    name: string
}

interface Project {
    project: string,
    roadmap: Stage[],
    timeline: string
}

export const Request = () => {
    const [data, setData] = useState(null);
    const [prompt, setPrompt] = useState('');

    const url = "http://127.0.0.1:5000/response";

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const requestData = {
            prompt: prompt
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(json => setData(json["result"]))
            .catch(error => console.error('Error:', error));

    };



    return (
        <div className="border-b border-gray-900/10 text-center content-center">
            <div>
                <h2 className="content-center">Profile</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="Enter your prompt here"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                </form>
                <div>
                    {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Journey goes here'}
                </div>
            </div>


            <div className="mt-6 flex items-center justify-center gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>

        </div>
    );
};