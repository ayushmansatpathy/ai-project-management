import "/Users/ayushmansatpathy/ai-project-management/src/app/globals.css"
import React from 'react';
import { CSS } from "@dnd-kit/utilities";

interface Task {
    id: number,
    title: string
}

import { useSortable } from "@dnd-kit/sortable";

export const Task = (task: Task) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return <div ref={setNodeRef} {...attributes} {...listeners} style={style} className="flex bg-white p-5">
        <input type="checkbox" />
        {task.title}
    </div>
}
