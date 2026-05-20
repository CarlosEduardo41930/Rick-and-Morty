import { useQuery } from '@tanstack/react-query'
import { Commet } from 'react-loading-indicators'
import axios from 'axios'
import Personagem from "./Personagem"

function Api() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['personagens'],
    queryFn: async () => {
  await new Promise(resolve => setTimeout(resolve, 3000)) // espera 3 segundos
  const res = await axios.get('https://rickandmortyapi.com/api/character?page=1')
  return res.data.results
    }
  })

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading ? (<Commet color="#cc3131" size="large" text="" textColor="" />) : (data.map((personagem) => (
        <Personagem key={personagem.id} personagem={personagem} />
      )))}
      {error && <p>Ocorreu um erro: {error.message}</p>}
      </div>
    </>
  )
}

export default Api