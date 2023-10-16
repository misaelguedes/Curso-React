import {useContext, useState} from 'react'

import Header from '../../components/Header'
import Title from '../../components/Title'

import {FiSettings, FiUpload} from 'react-icons/fi'

import { AuthContext } from '../contexts/auth'

import avatar from '../../assets/avatar.png'

import './Profile.css'

export default function Profile() {

    const {user} = useContext(AuthContext)

    const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl)

    return (
        <div>
            <Header/>

            <div className='content'>
                <Title name='Meu perfil'>
                    <FiSettings size={25}/>
                </Title>

                <div className='container'>
                    <form className='form-profile'>
                        <label className='label-avatar'>
                            <span>
                                <FiUpload color='#FFF' size={25}/>
                            </span>

                            <input type='file' accept='image/*'/> <br/>
                            {avatarUrl === null ? (
                                <img src={avatar} alt='Foto de perfil' width={250} height={250}/>
                            ) : (
                                <img src={avatarUrl} alt='Foto de perfil' width={250} height={250}/>
                            )}
                        </label>

                        <label>Nome</label>
                        <input type='text' placeholder='Seu nome'/>

                        <label>E-mail</label>
                        <input type='email' placeholder='email@email.com' disabled={true}/>

                        <button type='submit'>Salvar</button>
                    </form>
                </div>

                <div className='container'>
                    <button className='logout-btn'>Sair</button>
                </div>

            </div>
        </div>
    )
}