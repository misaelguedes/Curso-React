import { useEffect, useState } from 'react'
import Api from '../../services/Api'

///movie/550?api_key=88c0c86971e06bf331ef2635f0edb21b&language=pt-BR

export default function Home() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        async function loadFilmes() {
            const response = await Api.get('movie/550', {
                params: {
                    api_key: '88c0c86971e06bf331ef2635f0edb21b',
                    language: 'pt-BR',
                    page: 1
                }
            })
            console.log(response)
        }

        loadFilmes()

    }, [])

    return (
        <div>
            <h1>Bem-vindo a Home</h1>
        </div>
    )
}