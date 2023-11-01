import { useState } from 'react'
import './App.css'
import { MemorizedHeader } from './Header';

/* import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório!"),
  email: z.string("Digite um e-mail válido.").nonempty("O campo e-mail é obrigatório!"),
  username: z.string().min(3, "O username deve ter pelo menos 3 caracteres.").max(10, "O username deve ter no máximo 10 caracteres.").nonempty("O campo username é obrigatório!")
}) */

function App() {

  /* USANDO USEREF

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const usernameRef = useRef(null)

  function handleSave(e){
    e.preventDefault();

    console.log({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      username: usernameRef.current?.value,
    })
  }

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(schema)
  })

  function handleSave(data) {
    console.log(data)
  } */

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="container">
      <h1>React</h1>
      <MemorizedHeader name={name}/>

      <p>Nome:</p>
      <input placeholder='Digite seu nome...' value={name} onChange={(e) => setName(e.target.value)}/>

      <br/>

      <p>E-mail:</p>
      <input placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
  )
}

export default App

/* <form className="form" onSubmit={handleSubmit(handleSave)}>
        <input
          type="text"
          placeholder="Digite seu nome..."
          className="input"
          {...register("name")}
          id='name'
        />
        {errors.name && <p className='error'>{errors.name.message}</p>}

        <input
          type="text"
          placeholder="Digite seu email..."
          className="input"
          {...register("email")}
          id='email'
        />
        {errors.email && <p className='error'>{errors.email.message}</p>}

        <input
          type="text"
          placeholder="Digite seu username..."
          className="input"
          {...register("username")}
          id='username'
        />
        {errors.username && <p className='error'>{errors.username.message}</p>}

        <button className="button" type="submit">Enviar</button>
      </form> */