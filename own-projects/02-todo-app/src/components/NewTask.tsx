import { type ChangeEvent, useState } from 'react'
import { useTasksDispatch } from '../context/TasksContext'

const NewTask: React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useTasksDispatch()

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter' && Boolean(text.trim())) {
      dispatch({
        payload: { title: text.trim() },
        type: 'add'
      })
      setText('')
    }
  }

  return (
    <section className="new-task">
      <div className="input">
        <small className="hidden">Nueva tarea</small>
        <input
          type="text"
          id="new_task"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Escriba una tarea nueva"
        />
      </div>
      <i className="fa-solid fa-pencil"></i>
    </section>
  )
}

export { NewTask }
