"use client";

import { useState } from "react";
import styles from "./page.module.css";
import "/Users/ayushmansatpathy/ai-project-management/src/app/globals.css"

import { closestCorners, DndContext } from "@dnd-kit/core";

import { Column } from "./components/Column/Column";

export default function Home() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "eifhsohgsf" },
    { id: 2, title: "efsef" },
    { id: 3, title: "snrgnrgisr" }
  ]);

  return (
    <div>
      <div className="bg-midnight">
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <DndContext collisionDetection={closestCorners}>
          <Column tasks={tasks} />
        </DndContext>
      </div>
    </div>

  );
}
