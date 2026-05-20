function Personagem({personagem}) {
    return(
        <>
        <div className="bg-gray-500 flex flex-col items-center justify-center p-4 rounded-xl">
            <div> <div className="">
                <img className="rounded-xl" src={personagem.image} alt={`Image do personagem ${personagem.name}`} />
            </div>
            <div>
                <h1>Nome: <b>{personagem.name}</b></h1>
                <p>Espécie: <b>{personagem.species}</b></p>
                <p>Gênero: <b>{personagem.gender}</b></p>
                <button>detalhes</button>
            </div></div>
               
            </div>
        </>
    )
}
export default Personagem