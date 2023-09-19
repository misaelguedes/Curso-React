import axios from 'axios'

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/550?api_key=88c0c86971e06bf331ef2635f0edb21b&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api