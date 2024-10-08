"use client";

import { useState } from "react";
import styles from "./page.module.css";
import "/Users/ayushmansatpathy/ai-project-management/src/app/globals.css"

import { closestCorners, DndContext } from "@dnd-kit/core";

import CustomKanban from "./Kanban/page";

import Request from "./Journeys/page"
import Navigation from "./Navigation/page";

export default function Home() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "Add pages to text" },
    { id: 2, title: "Go and switch off the AC" },
    { id: 3, title: "Remember August 1st is an important day" }
  ]);

  return (
    <div>
      {/* <Navigation /> */}
      <Request />
      <DndContext collisionDetection={closestCorners}>
        <CustomKanban />

      </DndContext>
    </div>

  );
}
