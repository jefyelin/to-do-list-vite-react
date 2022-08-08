import { ClipboardText } from 'phosphor-react'

export function EmptyTasks() {
  return (
    <section
      className='flex flex-col items-center rounded-t-lg border border-x-0 border-b-0 
      border-t-gray-400 px-6 py-16'
      aria-live='polite'
    >
      <ClipboardText size={56} className='text-gray-300' alt='Ícone de um papel com texto' />
      <div className='mt-4 text-center text-gray-250'>
        <p>
          <strong>Você ainda não tem tarefas criadas</strong>
        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </section>
  )
}
