import { nanoid } from 'nanoid'
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form'
import { Task, TASK_STATUS } from '../../../model/task'
import { CreateButton } from '../../button/create'
import { InputText } from '../../input/input-text'

type FormInputs = {
  task: string
}

interface CreateTaskFormProps {
  onCreateTask: (task: Task) => void
}

export function CreateTaskForm({ onCreateTask }: CreateTaskFormProps) {
  const { control, handleSubmit, resetField } = useForm<FormInputs>({
    defaultValues: {
      task: '',
    },
    mode: 'all',
  })
  const { isValid } = useFormState({ control })

  const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
    const { task: taskInputValue } = data

    const newTask: Task = {
      description: taskInputValue,
      id: nanoid(),
      status: TASK_STATUS.OPEN,
    }

    onCreateTask(newTask)
    resetField('task')
  }

  return (
    <form
      className='grid w-full grid-flow-col grid-cols-1 gap-2'
      id='task-form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name='task'
        rules={{ required: true }}
        render={({ field: { onChange, name, value } }) => (
          <InputText
            name={name}
            placeholder='Adicione uma nova tarefa'
            onChange={onChange}
            value={value}
          />
        )}
      />
      <CreateButton aria-labelledby='task-form' aria-label='Criar a tarefa' disabled={!isValid} />
    </form>
  )
}
