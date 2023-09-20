import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Api from '../../services/Api'
import './Filme-info.css'
import {toast} from 'react-toastify'

export default function Filme() {

    const {id} = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

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
                navigate('/', {replace: true})
                return
            })
        }

        loadFilme()

        return () => {
            console.log('Componente desmontado!')
        }
    }, [navigate, id])

    function salvarFilme() {
        const minhaLista = localStorage.getItem('@primeflix')

        let filmesSalvos = JSON.parse(minhaLista) || []

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if (hasFilme) {
            toast.warn('Este filme já está salvo em sua lista!')
            return
        }

        filmesSalvos.push(filme)
        localStorage.setItem('@primeflix', JSON.stringify(filmesSalvos))
        toast.success('Filme salvo com sucesso!')
    }

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

            <div className='area-buttons'>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target='blank' rel='external' href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}