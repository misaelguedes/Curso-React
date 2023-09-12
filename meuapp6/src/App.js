import { useState } from "react"

export default function App() {

  const [email, setEmail] = useState({
    email: ''
})

  const [senha, setSenha] = useState({
    senha: ''
  })

  const [sexo,setSexo] = useState({
    sexo: 'masculino'
  })

const trocaEmail = (e) => {
  const novoEmail = e.target.value;
  setEmail({email: novoEmail})
}

const trocaSenha = (e) => {
  const novaSenha = e.target.value;
  setSenha({senha: novaSenha})
}

const trocaSexo = (e) => {
  const trocouSexo = e.target.value
  setSexo({sexo: trocouSexo})
}

  return (
    <div>
      <h2>Login</h2>
      E-mail:
      <input type="email" name="email" value={email.email} onChange={trocaEmail}/> <br/><br/>
      Senha:
      <input type="password" name="senha" value={senha.senha} onChange={trocaSenha}/> <br/><br/>
      Sexo:
      <select name="sexo" value={sexo.sexo} onChange={trocaSexo}>
        <option value='masculino'>Masculino</option>
        <option value='feminino'>Feminino</option>
      </select>
      <div>
        <h3>{email.email}</h3>
        <h3>{senha.senha}</h3>
        <h3>{sexo.sexo}</h3>
      </div>
    </div>
  )
}