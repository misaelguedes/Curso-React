import React, {useState, useEffect, useMemo, useCallback} from "react"

export default function App() {

  const [tarefas, setTarefas] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas')

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }

  }, [])
  
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput('')
  }, [input, tarefas])

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <h3>Adicione as suas tarefas:</h3>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  )
}