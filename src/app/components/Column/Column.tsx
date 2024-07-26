"use client";

import React from 'react';
import styles from "./column.module.css"
import "/Users/ayushmansatpathy/ai-project-management/src/app/globals.css"
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task } from '../Task/Task';


interface task {
    id: number,
    title: string
}

interface Column {
    tasks: task[]
}

export const Column = (tasks: Column) => {
    return (
        <div className='flex flex-col w-8/12 my-5 bg-slate-100 p-8 gap-y-5 text-left'>
            <SortableContext items={tasks.tasks} strategy={verticalListSortingStrategy}>
                {tasks.tasks.map((task: { id: number, title: string }) => (
                    <Task id={task.id} title={task.title} key={task.id} />
                ))}
            </SortableContext>
        </div>)
}