import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import translate from "translate"

translate.key = null

function Carde({personagem}) {
  const [nomeTraduzido, setNomeTraduzido] = useState(personagem.name)
  const [especieTraduzida, setEspecieTraduzida] = useState(personagem.species)
  const [generoTraduzido, setGeneroTraduzido] = useState(personagem.gender)

  useEffect(() => {
    translate(personagem.name, { from: 'en', to: 'pt' }).then(setNomeTraduzido)
    translate(personagem.species, { from: 'en', to: 'pt' }).then(setEspecieTraduzida)
    translate(personagem.gender, { from: 'en', to: 'pt' }).then(setGeneroTraduzido)
  }, [personagem])

    return(
        <div className="group relative w-full max-w-[280px] overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 mx-auto">

          <div className="relative overflow-hidden">
            <img
              className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={personagem.image}
              alt={`Imagem do personagem ${nomeTraduzido}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
          </div>

          <div className="p-5">
            <h2 className="mb-3 text-xl font-bold tracking-tight text-zinc-100">
              {nomeTraduzido}
            </h2>

            <div className="mb-4 flex flex-col gap-1.5 text-sm">
              <p className="text-zinc-400">
                Espécie: <span className="font-semibold text-zinc-200">{especieTraduzida}</span>
              </p>
              <p className="text-zinc-400">
                Gênero: <span className="font-semibold text-zinc-200">{generoTraduzido}</span>
              </p>
            </div>

            <Link to={`/personagem/${personagem.id}`} className="w-full rounded-lg border border-emerald-500/40 bg-emerald-500/10 py-2.5 text-sm font-semibold uppercase tracking-wider text-emerald-400 transition-all duration-300 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-lg hover:shadow-emerald-500/25">
              Detalhes
            </Link>
          </div>

        </div>
    )
}
export default Carde