import { Task } from '../../../../model/task'
import { ConcludedTasksInfo } from '../concluded-tasks'
import { OpenTasksInfo } from '../open-tasks'

interface TasksInfoProps {
  tasks: Task[]
}

export function TasksInfo({ tasks }: TasksInfoProps) {
  return (
    <section className='grid grid-flow-row justify-between gap-2 md:grid-flow-col '>
      <OpenTasksInfo id='open-tasks-info' tasks={tasks} />
      <ConcludedTasksInfo id='concluded-tasks-info' tasks={tasks} />
    </section>
  )
}
