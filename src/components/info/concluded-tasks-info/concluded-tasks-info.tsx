import { Task } from '../../../model/task'
import { TasksCounter } from '../../counter/tasks-counter'
import { EmphasisLabel } from '../../label/emphasis-label'
import { TasksInfoContainer } from '../tasks-info-container'

interface ConcludedTasksInfo {
  tasks: Task[]
  id: string
}

export function ConcludedTasksInfo({ tasks, id }: ConcludedTasksInfo) {
  return (
    <TasksInfoContainer ariaLabelledBy={`label-${id}`}>
      <EmphasisLabel htmlFor={id} id={`label-${id}`} variant='purple'>
        Concluídas
      </EmphasisLabel>
      <TasksCounter id={id} tasks={tasks} variant='concluded' />
    </TasksInfoContainer>
  )
}
