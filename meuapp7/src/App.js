import { useState } from "react";

export default function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function cadastrar() {

    if (nome !== '' && email !== '' && senha !== '') {
      alert(`
      Nome: ${nome} 
      E-mail: ${email}
      Senha: ${senha}`
      )
    } else {
      alert('Por favor, preencha todos os dados!')
    }
  }

  return (
    <div>
      <h1>Novo Usuário</h1>

      <form onSubmit={cadastrar}>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/> <br/><br/>
        <label>E-mail:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br/><br/>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/> <br/><br/>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  )
}