import { AuthContext } from "../contexts/auth"
import { useContext } from "react"

import Header from "../../components/Header"
import Title from '../../components/Title'
import {FiPlus, FiMessageSquare, FiSearch, FiEdit2} from 'react-icons/fi'

import { Link } from "react-router-dom"

import './Dashboard.css'

export default function Dashboard() {

    const {logout} = useContext(AuthContext)

    async function handleLogout() {
        await logout()
    }

    return (
        <div>
            <Header/>

            <div className="content">
                <Title name='Tickets'>
                    <FiMessageSquare size={25}/>
                </Title>

                <>
                    <Link to='/new' className="new">
                        <FiPlus color="#FFF" size={25}/>
                        Novo chamado
                    </Link>

                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Cliente</th>
                                <th scope="col">Assunto</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cadastrado em</th>
                                <th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label='Cliente'>Mercado Esquina</td>
                                <td data-label='Assunto'>Suporte</td>
                                <td data-label='Status'>
                                    <span className="badge" style={{backgroundColor: '#999'}}>Em aberto</span>
                                </td>
                                <td data-label='Cadastrado'>31/05/2023</td>
                                <td data-label='#'>
                                    <button className="action" style={{backgroundColor: '#3583f6'}}>
                                        <FiSearch color="#FFF" size={17}/>
                                    </button>
                                    <button className="action" style={{backgroundColor: '#f6a935'}}>
                                        <FiEdit2 color="#FFF" size={17}/>
                                    </button>
                                </td>
                            </tr>


                            <tr>
                                <td data-label='Cliente'>Informática TECH</td>
                                <td data-label='Assunto'>Suporte</td>
                                <td data-label='Status'>
                                    <span className="badge" style={{backgroundColor: '#999'}}>Em aberto</span>
                                </td>
                                <td data-label='Cadastrado'>31/05/2023</td>
                                <td data-label='#'>
                                    <button className="action" style={{backgroundColor: '#3583f6'}}>
                                        <FiSearch color="#FFF" size={17}/>
                                    </button>
                                    <button className="action" style={{backgroundColor: '#f6a935'}}>
                                        <FiEdit2 color="#FFF" size={17}/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>

            </div>

        </div>
    )
}