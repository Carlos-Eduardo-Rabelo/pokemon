export default function Menu(){
    return(
        <nav>
            <ul className="flex flex-col md:flex-row m-auto">
                <li className="m-2 md:m-5 bg-white w-40 h-10 rounded-xl text-center content-center text-xl">Inicio</li>
                <li className="m-2 md:m-5 bg-white w-40 h-10 rounded-xl text-center content-center text-xl">Giros</li>
                <li className="m-2 md:m-5 bg-white w-40 h-10 rounded-xl text-center content-center text-xl">Pokemóns</li>
            </ul>
        </nav>
    )
}