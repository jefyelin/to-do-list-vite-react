import { useState } from 'react'
import { CreateTaskForm } from '../../components/form/create-task-form'
import { ConcludedTasksInfo } from '../../components/info/concluded-tasks-info'
import { OpenTasksInfo } from '../../components/info/open-tasks-info'
import { Task, TASK_STATUS } from '../../model/task'

export function TasksPage() {
  const [tasks] = useState<Task[]>([
    {
      description: 'Limpar o quarto',
      id: '1',
      status: TASK_STATUS.OPEN,
    },
    {
      description: 'Fazer projeto',
      id: '2',
      status: TASK_STATUS.CONCLUDED,
    },
  ])

  return (
    <main
      className='mx-auto mt-[-1.6875rem] flex w-full max-w-[48rem] flex-col justify-center 
      px-4'
    >
      <CreateTaskForm />
      <div className='mt-12 grid grid-flow-row justify-between gap-2 md:mt-16 md:grid-flow-col '>
        <OpenTasksInfo id='open-tasks-info' tasks={tasks} />
        <ConcludedTasksInfo id='concluded-tasks-info' tasks={tasks} />
      </div>
    </main>
  )
}
