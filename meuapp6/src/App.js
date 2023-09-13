import { useState } from "react"

export default function App() {

  const [nome, setNome] = useState('')

  const [email, setEmail] = useState('')

  const [senha, setSenha] = useState('')

  const [sexo,setSexo] = useState('masculino')

  return (
    <div>
      <h2>Login</h2>
      Nome:
      <input type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)}/> <br/><br/>
      E-mail:
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br/><br/>
      Senha:
      <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/> <br/><br/>
      Sexo:
      <select name="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
        <option value='masculino'>Masculino</option>
        <option value='feminino'>Feminino</option>
      </select>
      <div>
        <h3>{nome}</h3>
        <h3>{email}</h3>
        <h3>{senha}</h3>
        <h3>{sexo}</h3>
      </div>
    </div>
  )
}