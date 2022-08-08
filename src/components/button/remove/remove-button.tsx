import { Trash } from 'phosphor-react'

interface RemoveButton {
  ariaLabel: string
  ariaDescribedBy: string
  onClick: () => void
}

export function RemoveButton({ ariaLabel, ariaDescribedBy, onClick }: RemoveButton) {
  return (
    <button
      type='button'
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className='min-w-8 min-h-7 flex h-7 w-8 cursor-pointer items-center justify-center
      rounded-md text-gray-300 hover:bg-gray-400 hover:text-danger
      focus:bg-gray-400 focus:text-danger'
      onClick={onClick}
    >
      <Trash size={20} alt='Ícone de lata de lixo' />
    </button>
  )
}
