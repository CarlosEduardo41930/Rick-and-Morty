import { useQuery } from '@tanstack/react-query'
import { Commet } from 'react-loading-indicators'
import axios from 'axios'
import Personagem from "./Carde"

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
<main className="min-h-screen bg-[#111111] py-8">
      <div className="container mx-auto px-4">
        {isLoading ? (
          <div className="flex h-[60vh] items-center justify-center">
            <Commet color="#10b981" size="large" text="" textColor="" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-8">
            {data?.map((personagem) => (
              <Personagem key={personagem.id} personagem={personagem} />
            ))}
          </div>
        )}
        {error && (
          <div className="mt-8 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center">
            <p className="text-red-400">Ocorreu um erro: {error.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}

export default Api