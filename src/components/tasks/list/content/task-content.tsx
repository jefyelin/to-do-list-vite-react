import clsx from 'clsx'
import { Task, TASK_STATUS } from '../../../../model/task'
import { RemoveButton } from '../../../button/remove'
import { Checkbox } from '../../../checkbox'

interface TaskContentProps {
  content: Task
  onConcludeTaskById: (id: string) => void
  onOpenTaskById: (id: string) => void
  onRemoveTaskById: (id: string) => void
}

export function TaskContent({
  content,
  onConcludeTaskById,
  onOpenTaskById,
  onRemoveTaskById,
}: TaskContentProps) {
  const { description, id, status } = content

  const onClickCheckbox = () => {
    if (status === TASK_STATUS.OPEN) {
      onConcludeTaskById(id)
    }

    if (status === TASK_STATUS.CONCLUDED) {
      onOpenTaskById(id)
    }
  }

  const onClickRemove = () => {
    onRemoveTaskById(id)
  }

  return (
    <div className='flex rounded-lg border border-gray-400 bg-gray-500 p-4' aria-live='polite'>
      <div className='mt-[0.3125rem]'>
        <Checkbox
          ariaDescribedBy={`description-${id}`}
          checked={status === TASK_STATUS.CONCLUDED}
          onClick={onClickCheckbox}
        />
      </div>
      <p
        id={`description-${id}`}
        className={clsx({
          'w-full px-3': true,
          'text-gray-100': status === TASK_STATUS.OPEN,
          'text-gray-250 line-through': status === TASK_STATUS.CONCLUDED,
        })}
      >
        {description}
      </p>
      <div className='justify-end'>
        <RemoveButton
          ariaDescribedBy={`description-${id}`}
          ariaLabel='Remover tarefa'
          onClick={onClickRemove}
        />
      </div>
    </div>
  )
}
