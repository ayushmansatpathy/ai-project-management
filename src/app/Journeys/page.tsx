"use client"

import React, { useEffect, useState } from "react"
import { CardType, Column } from "../Kanban/page"

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



export let arr: CardType[] = []

const convertToCards = (data: Project | null) => {
    let cnt = 1;
    if (data === null) {
        return
    }

    for (let stage of data.roadmap) {
        let obj: CardType = {
            "title": stage.stage,
            "column": "backlog",
            "id": cnt.toString(),
        }
        arr.push(obj)
        cnt++;
    }
    console.log(arr);
}

const Request = () => {
    const [data, setData] = useState(null);
    const [cards, setCards] = useState(arr)
    const [prompt, setPrompt] = useState('');
    const [isClient, setIsClient] = useState(false)

    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<Stage>();

    const handleItemClick = (): void => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        setCards(arr)
    }, [data])

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

    useEffect(() => {
        if (data !== null) {
            convertToCards(data);
        }
    }, [data]);

    return (isClient ?
        <div className="border-b border-gray-900/10 text-center content-center">
            <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
            <Column
                title="Backlog"
                column="backlog"
                headingColor="text-neutral-500"
                cards={cards}
                setCards={setCards}
                func={handleItemClick}
            />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your prompt here"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
                <div className="mt-6 flex items-center justify-center gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </form>

            <div>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Journey goes here'}
            </div>
        </div>
        :
        <div>

        </div>
    );
};

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="absolute inset-0 bg-gray-600 bg-opacity-50 transition-opacity"></div>
            <div className="absolute inset-y-0 right-0 max-w-full flex">
                <div className="w-screen max-w-md">
                    <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                        <div className="px-4 py-6 sm:px-6">
                            <div className="flex items-start justify-between">
                                <button onClick={onClose} className="ml-3 h-7 flex items-center">
                                    <span className="sr-only">Close panel</span>
                                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="relative flex-1 px-4 sm:px-6">
                            <div className="absolute inset-0 px-4 sm:px-6">
                                <div className="h-full border-2 border-dashed border-gray-200" aria-hidden="true">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Request;