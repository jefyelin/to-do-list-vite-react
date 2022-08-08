import { useState } from 'react'
import { EmptyTasks } from '../../components/tasks/empty'
import { CreateTaskForm } from '../../components/tasks/form'
import { TasksInfo } from '../../components/tasks/info/tasks-info'
import { TasksList } from '../../components/tasks/list/container'
import { Task, TASK_STATUS } from '../../model/task'

type ChangeTaskStatus = {
  id: string
  newStatus: TASK_STATUS
  tasks: Task[]
}

export function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([])

  const onCreateTask = (task: Task) => {
    setTasks((previousTasks) => [...previousTasks, task])
  }

  const onConcludeTaskById = (id: string) => {
    const newTasks = getTasksWithChangedTaskStatusById({
      id,
      newStatus: TASK_STATUS.CONCLUDED,
      tasks,
    })
    setTasks(newTasks)
  }

  const onOpenTaskById = (id: string) => {
    const newTasks = getTasksWithChangedTaskStatusById({
      id,
      newStatus: TASK_STATUS.OPEN,
      tasks,
    })
    setTasks(newTasks)
  }

  const onRemoveTaskById = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id)

    setTasks(newTasks)
  }

  const getTasksWithChangedTaskStatusById = ({
    id,
    newStatus,
    tasks,
  }: ChangeTaskStatus): Task[] => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: newStatus,
        }
      }

      return task
    })

    return newTasks
  }

  return (
    <main
      className='mx-auto mt-[-1.6875rem] flex w-full max-w-[48rem] flex-col justify-center 
      px-4'
    >
      <CreateTaskForm onCreateTask={onCreateTask} />
      <div className='mt-12 mb-6 md:mt-16'>
        <TasksInfo tasks={tasks} />
      </div>
      {tasks.length === 0 && (
        <div>
          <EmptyTasks />
        </div>
      )}
      {tasks.length > 0 && (
        <div>
          <TasksList
            tasks={tasks}
            onConcludeTaskById={onConcludeTaskById}
            onOpenTaskById={onOpenTaskById}
            onRemoveTaskById={onRemoveTaskById}
          />
        </div>
      )}
    </main>
  )
}
