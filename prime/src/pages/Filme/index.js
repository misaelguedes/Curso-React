import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../services/Api'

export default function Filme() {

    const {id} = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await Api.get(`/movie/${id}`, {
                params: {
                    api_key: '88c0c86971e06bf331ef2635f0edb21b',
                    language: 'pt-BR'
                }
            })
            .then((response) => {
                setFilme(response.data)
                setLoading(false)
            })
            .catch(() => {
                console.log('Filme não encontrado!')
            })
        }

        loadFilme()

        return () => {
            console.log('Componente desmontado!')
        }
    }, [])

    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return (
        <div className='filme-info'>
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average.toFixed(1)} / 10</strong>
        </div>
    )
}