import React, { useRef, useState } from 'react'
import TaskList from './TaskList'
import SecondaryNavbar from './SecondaryNavbar'
import AddTaskList from './AddTaskList'


const BoardMainComponent = () => {
  const [allTaskList, setAllTaskList] = useState(
    [
      {
        "task": "Complete Project Proposal",
        "dueDate": "25 Nov",
        "list": "ToDo",
        "id": "aa0a27c7-24e1-4a42-8bd5-3fda242378ea"
      },
      {
        "task": "Grocery Shopping",
        "dueDate": "26 Nov",
        "list": "ToDo",
        "id": "2d9ec1bf-becf-4f52-b6a6-8a961d8b4b84"
      },
      {
        "task": "Send Birthday Gift",
        "dueDate": "30 Nov",
        "list": "ToDo",
        "id": "8a78b4c1-6c90-44a5-9b4d-dae5ec72b54a"
      },
      {
        "task": "Review Meeting Notes",
        "dueDate": "28 Nov",
        "list": "InProgress",
        "id": "0f81c84e-8b3d-499f-9c9b-894f7f5095a8"
      },
      {
        "task": "Submit Expense Report",
        "dueDate": "02 Dec",
        "list": "InProgress",
        "id": "f2c4e929-d9b0-4c88-9379-615607c6d1c8"
      },
      {
        "task": "Read Chapter 5",
        "dueDate": "01 Dec",
        "list": "Completed",
        "id": "501bf538-15d2-4db2-a4d5-d08d392c5a48"
      },
      {
        "task": "Call Mom",
        "dueDate": "29 Nov",
        "list": "Completed",
        "id": "0a86188a-3d3d-43b1-bc0c-56516a686a74"
      },
      {
        "task": "Plan Weekend Trip",
        "dueDate": "27 Nov",
        "list": "Pending",
        "id": "f41c0c2a-858e-4274-b1b8-4322e01e63c4"
      },
      {
        "task": "Exercise Routine",
        "dueDate": "22 Nov",
        "list": "Pending",
        "id": "aeb2a394-b13a-4e6c-8e54-68e98296d4ef"
      },
      {
        "task": "Learn New Recipe",
        "dueDate": "03 Dec",
        "list": "ToDo",
        "id": "9a2ff95a-98f2-4da0-918d-6f1f43e3b61d"
      }
    ]

  )


  const dragRef = useRef({
    dragTask: 0,
    draggeOverTask: 0,
    dragListName: "",
    draggedOverListName: "",
  });


  const [taskList, setTaskList] = useState(['ToDo', 'InProgress', 'Pending', 'Test', 'Test2','Test4','Test5','Test6'])


  const AddNewTaskList = (newTaskListName) => {
    let temp = [...taskList]
    temp.push(newTaskListName)
    setTaskList(temp)
  }
  function handleSort(isEntireList = false) {
    const allTaskListClone = isEntireList ? [...taskList] : [...allTaskList];
    let firstObjectIndex;
    let secondObjectIndex
    if (isEntireList) {
      // dragTitleListName -> Todo List Name Picked up
      // draggedOverTitleListName -> ToDo List Name to Swap with
      firstObjectIndex = allTaskListClone.findIndex(obj => obj === dragRef.current.dragTitleListName);
      secondObjectIndex = allTaskListClone.findIndex(obj => obj === dragRef.current.draggedOverTitleListName);
    }
    else {
      firstObjectIndex = allTaskListClone.findIndex(obj => obj.id === dragRef.current.dragTask);
      secondObjectIndex = allTaskListClone.findIndex(obj => obj.id === dragRef.current.draggeOverTask);
    }

    // swapping logic
    let temp = allTaskListClone[firstObjectIndex];
    if (!isEntireList) {
      // change the list for dragged task
      temp.list = dragRef.current.draggedOverListName
    }
    allTaskListClone[firstObjectIndex] = allTaskListClone[secondObjectIndex]
    allTaskListClone[secondObjectIndex] = temp;
    console.log(allTaskListClone);

    // updating the appropriate list
    isEntireList ? setTaskList(allTaskListClone) : setAllTaskList(allTaskListClone);
  }


  function AddCard(taskData) {
    const temp = [...allTaskList]
    taskData['id'] = "9a2ff95a-98f2-4da0-918d-6f1f43e3b61dd" + taskData.task
    temp.push(
      taskData
    )
    setAllTaskList(temp)

  }
  return (
    <div className="h-screen bg-green bg-fit bg-center bg-[url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2048x1194/1ae72d8a416e9a846331da7083f0d4ba/photo-1694250990115-ca7d9d991b24.jpg')]">
      <SecondaryNavbar />

      <div className='flex overflow-auto h-[559px]'>
        {taskList.map((task, index) =>
          <TaskList taskListName={task} tasks={allTaskList} key={index} ref={dragRef} handleSort={handleSort}
            AddCard={AddCard}
          ></TaskList>
        )}
        <AddTaskList
          AddNewTaskList={AddNewTaskList}
        ></AddTaskList>


      </div>
    </div>
  )
}

export default BoardMainComponent