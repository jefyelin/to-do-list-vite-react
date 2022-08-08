import { Check } from 'phosphor-react'

interface CheckboxProps {
  checked: boolean
  ariaDescribedBy: string
  onClick: () => void
}

export function Checkbox({ checked, ariaDescribedBy, onClick }: CheckboxProps) {
  return (
    <>
      {!checked && (
        <button
          type='button'
          role='checkbox'
          aria-label='Checkbox da tarefa a ser concluída'
          aria-checked={checked}
          aria-describedby={ariaDescribedBy}
          className='flex h-[1.0906rem] min-h-[1.0906rem] w-[1.0906rem] min-w-[1.0906rem] 
          cursor-pointer rounded-full border border-blue transition duration-75 ease-linear 
          hover:bg-blue hover:bg-opacity-20 focus:bg-blue focus:bg-opacity-20'
          onClick={onClick}
        />
      )}
      {checked && (
        <button
          type='button'
          role='checkbox'
          aria-label='Checkbox da tarefa concluída'
          aria-checked={checked}
          aria-describedby={ariaDescribedBy}
          className='flex h-[1.0906rem] min-h-[1.0906rem] 
          w-[1.0906rem] min-w-[1.0906rem] cursor-pointer items-center justify-center rounded-full
          border border-purple-dark bg-purple-dark transition duration-75 ease-linear 
          hover:border-purple hover:bg-purple focus:border-purple focus:bg-purple'
          onClick={onClick}
        >
          <Check
            weight='bold'
            size={13}
            className='text-gray-100'
            alt='Ícone com simbolo de verificado'
          />
        </button>
      )}
    </>
  )
}
