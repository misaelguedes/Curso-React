import {Link} from 'react-router-dom'
import { useContext } from 'react'

import {AuthContext} from '../../pages/contexts/auth'
import {FiHome, FiUser, FiSettings} from 'react-icons/fi'
import './Header.css'

import avatar from '../../assets/avatar.png'

export default function Header() {

    const {user} = useContext(AuthContext)

    return (
        <div className='sidebar'>
            <div>
                <img src={user.avatarUrl === null ? avatar : user.avatarUrl} alt='Foto do usuário'/>
            </div>

            <Link to='/dashboard'>
                <FiHome color='#FFF' size={24}/>
                Chamados
            </Link>

            <Link to='/customers'>
                <FiUser color='#FFF' size={24}/>
                Clientes
            </Link>

            <Link to='/profile'>
                <FiSettings color='#FFF' size={24}/>
                Perfil
            </Link>
        </div>
    )
}