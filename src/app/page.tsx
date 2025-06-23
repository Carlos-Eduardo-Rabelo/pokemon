export default function Home() {
  return(
    <div className=" h-[60vh] bg-white content-center">
      <div className="m-auto w-100 h-100 bg-red-300 rounded-xl">
        <h1 className="p-5 m-auto w-100 h-30 text-center text-2xl content-center font-bold bg-red-400 rounded-t-xl">
          Bem-vindo ao Meu Poke!
        </h1>
        <h2 className="p-5 m-auto h-40 w-100 text-xl text-center content-center">
          Aqui você pode encontrar informações sobre os Pokémons e suas habilidades.
        </h2>
        <div className="m-auto h-30 content-center">
          <ul className=" flex flex-row justify-evenly">
            <li className="font-semibold bg-white w-30 text-center text-lg content-center rounded-lg">Pokemóns</li>
            <li className="font-semibold bg-white w-30 text-center text-lg content-center rounded-lg">Girar</li>
            <li className="font-semibold bg-white w-30 text-center text-lg content-center rounded-lg">Perfil</li>
          </ul>

        </div>
      </div>
    </div>
    
  )
}