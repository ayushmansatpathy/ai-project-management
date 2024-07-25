"use client";

import React from 'react';
import styles from "./column.module.css"
import "/Users/ayushmansatpathy/ai-project-management/src/app/globals.css"
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

interface Task {
    id: number,
    title: string
}

interface Column {
    tasks: Task[]
}

export const Column = (tasks: Column) => {
    return (
        <div className="bg-midnight">
            <SortableContext items={tasks.tasks} strategy={verticalListSortingStrategy}>
                {tasks.tasks.map((task: { id: number, title: string }) => (
                    <div key={task.id}>{task.title}</div>
                ))}
            </SortableContext>
        </div>)
}