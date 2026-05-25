import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import axios from 'axios'
import translate from "translate"
import { Commet } from 'react-loading-indicators'

translate.key = null

function Detalhes() {
  const { id } = useParams()

  const { data, isLoading, error } = useQuery({
    queryKey: ['personagem', id],
    queryFn: async () => {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
      return res.data
    }
  })

  const [nomeTraduzido, setNomeTraduzido] = useState('')
  const [especieTraduzida, setEspecieTraduzida] = useState('')
  const [generoTraduzido, setGeneroTraduzido] = useState('')
  const [statusTraduzido, setStatusTraduzido] = useState('')
  const [localizacaoTraduzida, setLocalizacaoTraduzida] = useState('')

  useEffect(() => {
    if (data) {
      translate(data.name, { from: 'en', to: 'pt' }).then(setNomeTraduzido)
      translate(data.species, { from: 'en', to: 'pt' }).then(setEspecieTraduzida)
      translate(data.gender, { from: 'en', to: 'pt' }).then(setGeneroTraduzido)
      translate(data.status, { from: 'en', to: 'pt' }).then(setStatusTraduzido)
      translate(data.location.name, { from: 'en', to: 'pt' }).then(setLocalizacaoTraduzida)
    }
  }, [data])

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#111111]">
        <Commet color="#10b981" size="large" text="" textColor="" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#111111]">
        <p className="text-red-400">Erro ao carregar personagem</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#111111] py-8">
      <div className="container mx-auto px-4">
        <Link to="/" className="mb-6 inline-block text-emerald-400 hover:text-emerald-300">
          ← Voltar
        </Link>

        <div className="max-w-2xl rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-6">
          <img
            src={data.image}
            alt={nomeTraduzido || data.name}
            className="mb-4 h-[400px] w-full rounded-lg object-cover"
          />
          <h1 className="mb-4 text-3xl font-bold text-zinc-100">{nomeTraduzido || data.name}</h1>
          <div className="space-y-2 text-zinc-300">
            <p><span className="font-semibold">Espécie:</span> {especieTraduzida || data.species}</p>
            <p><span className="font-semibold">Gênero:</span> {generoTraduzido || data.gender}</p>
            <p><span className="font-semibold">Status:</span> {statusTraduzido || data.status}</p>
            <p><span className="font-semibold">Localização:</span> {localizacaoTraduzida || data.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detalhes