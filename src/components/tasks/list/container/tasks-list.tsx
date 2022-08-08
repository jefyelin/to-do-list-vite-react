import { Task } from '../../../../model/task'
import { TaskContent } from '../content'

interface TasksListProps {
  tasks: Task[]
  onConcludeTaskById: (id: string) => void
  onOpenTaskById: (id: string) => void
  onRemoveTaskById: (id: string) => void
}

export function TasksList({
  tasks,
  onConcludeTaskById,
  onOpenTaskById,
  onRemoveTaskById,
}: TasksListProps) {
  return (
    <section>
      <ul className='grid grid-flow-row gap-3'>
        {tasks.map((task: Task) => (
          <li key={task.id} id={task.id}>
            <TaskContent
              content={task}
              onConcludeTaskById={onConcludeTaskById}
              onOpenTaskById={onOpenTaskById}
              onRemoveTaskById={onRemoveTaskById}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
