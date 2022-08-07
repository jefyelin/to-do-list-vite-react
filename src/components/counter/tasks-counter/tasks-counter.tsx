import { Task, TASK_STATUS } from '../../../model/task'

interface TasksCounterProps {
  id: string
  tasks: Task[]
  variant: 'total' | 'concluded'
}

export function TasksCounter({ id, tasks, variant }: TasksCounterProps) {
  const total = getTheNumberOfTotalTasks(tasks)
  const concluded = getTheNumberOfConcludedTasks(tasks)

  function getTheNumberOfTotalTasks(tasks: Task[]): number {
    return tasks.length
  }

  function getTheNumberOfConcludedTasks(tasks: Task[]): number {
    const concludedTasks = tasks.reduce((total, task) => {
      if (task.status === TASK_STATUS.CONCLUDED) {
        return (total += 1)
      }
      return total
    }, 0)

    return concludedTasks
  }

  return (
    <div
      id={id}
      className='flex w-fit items-center rounded-full bg-gray-400 px-2 py-[0.125rem] text-xs 
      font-bold text-gray-200'
    >
      {variant === 'total' && <p>{total}</p>}
      {variant === 'concluded' && (
        <p>
          {concluded}
          {total > 0 && ` de ${total}`}
        </p>
      )}
    </div>
  )
}
