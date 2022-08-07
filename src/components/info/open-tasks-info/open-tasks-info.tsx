import { Task } from '../../../model/task'
import { TasksCounter } from '../../counter/tasks-counter'
import { EmphasisLabel } from '../../label/emphasis-label'
import { TasksInfoContainer } from '../tasks-info-container'

interface OpenTasksInfo {
  tasks: Task[]
  id: string
}

export function OpenTasksInfo({ tasks, id }: OpenTasksInfo) {
  return (
    <TasksInfoContainer ariaLabelledBy={`label-${id}`}>
      <EmphasisLabel htmlFor={id} id={`label-${id}`} variant='blue'>
        Tarefas criadas
      </EmphasisLabel>
      <TasksCounter id={id} tasks={tasks} variant='total' />
    </TasksInfoContainer>
  )
}
