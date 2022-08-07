import { Task } from '../../../../model/task'
import { EmphasisLabel } from '../../../label/emphasis-label'
import { TasksCounter } from '../../counter'
import { ContainerTasksInfo } from '../container-tasks'

interface OpenTasksInfo {
  tasks: Task[]
  id: string
}

export function OpenTasksInfo({ tasks, id }: OpenTasksInfo) {
  return (
    <ContainerTasksInfo ariaLabelledBy={`label-${id}`}>
      <EmphasisLabel htmlFor={id} id={`label-${id}`} variant='blue'>
        Tarefas criadas
      </EmphasisLabel>
      <TasksCounter id={id} tasks={tasks} variant='total' />
    </ContainerTasksInfo>
  )
}
