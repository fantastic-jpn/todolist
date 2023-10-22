import { useRef, useState } from "react"
import {Card} from "./components/card"

import {Alldata} from "./allData"



function App() {
  const [data, setData] = useState(Alldata)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      ToDoList for all of us!!
    </h1>

    <div className="all-container flex space-around">

    {data.map((section) => (
        <div className="container 
          border-solid 
          border-green-500 
          border-4 
          bg-green-300
        "
            key={section.id}
        >
          {section.username}'s task

          {
            section.task.map((tsk) => (
              <Card id={tsk.id} name={tsk.title} key={tsk.id}/>
            ))
          }
        </div>
        ))}

    </div>
    
    
    


    </>


  )
}

export default App
