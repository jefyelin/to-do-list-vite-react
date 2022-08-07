import { Task } from '../../../../model/task'
import { EmphasisLabel } from '../../../label/emphasis-label'
import { TasksCounter } from '../../counter'
import { ContainerTasksInfo } from '../container-tasks'

interface ConcludedTasksInfo {
  tasks: Task[]
  id: string
}

export function ConcludedTasksInfo({ tasks, id }: ConcludedTasksInfo) {
  return (
    <ContainerTasksInfo ariaLabelledBy={`label-${id}`}>
      <EmphasisLabel htmlFor={id} id={`label-${id}`} variant='purple'>
        Concluídas
      </EmphasisLabel>
      <TasksCounter id={id} tasks={tasks} variant='concluded' />
    </ContainerTasksInfo>
  )
}
