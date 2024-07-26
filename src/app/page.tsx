"use client";

import { useState } from "react";
import styles from "./page.module.css";
import "/Users/ayushmansatpathy/ai-project-management/src/app/globals.css"

import { closestCorners, DndContext } from "@dnd-kit/core";

import { Column } from "./components/Column/Column";

export default function Home() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Add pages to text" },
    { id: 2, title: "Go and switch off the AC" },
    { id: 3, title: "Remember August 1st is an important day" }
  ]);

  return (
    <div>
      <div className="grid place-items-center">
        <h1 className="text-3xl font-bold my-10">Hello World</h1>
        <DndContext collisionDetection={closestCorners}>
          <Column tasks={tasks} />
        </DndContext>
      </div>
    </div>

  );
}
