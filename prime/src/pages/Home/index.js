import { useEffect, useState } from 'react'
import Api from '../../services/Api'
import {Link} from 'react-router-dom'
import './home.css'

export default function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await Api.get('movie/now_playing', {
                params: {
                    api_key: '88c0c86971e06bf331ef2635f0edb21b',
                    language: 'pt-BR',
                    page: 1
                }
            })

            setFilmes(response.data.results.slice(0, 10))

        }

        loadFilmes()
        setLoading(false)

    }, [])

    if (loading) {
        return (
            <div className='loading'>
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='lista-filmes'>
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}