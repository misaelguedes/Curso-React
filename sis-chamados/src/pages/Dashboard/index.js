import { AuthContext } from "../contexts/auth"
import { useContext } from "react"

import Header from "../../components/Header/indx"

export default function Dashboard() {

    const {logout} = useContext(AuthContext)

    async function handleLogout() {
        await logout()
    }

    return (
        <div>
            <Header/>

            <h1>Página Dashboard</h1>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    )
}