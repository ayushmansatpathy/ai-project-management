import { useState } from "react";
import styles from "./page.module.css";

import { closestCorners, DndContext } from "@dnd-kit/core";

export default function Home() {

  const [tasks, setTasks] = useState([
    { id: 1, title: "eifhsohgsf" },
    { id: 2, title: "efsef" },
    { id: 3, title: "snrgnrgisr" }
  ]);

  return (
    <div>
      <div className={styles.container}>
        <h1>Hello World</h1>
        <DndContext collisionDetection={closestCorners}>

        </DndContext>
      </div>
    </div>

  );
}
