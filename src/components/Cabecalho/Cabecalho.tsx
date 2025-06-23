import Menu from "../Menu/Menu";

export default function Cabecalho(){
    return(
        <div className="items-center bg-red-500 h-[20vh] flex flex-row justify-evenly">
            <h1 className="text-2xl text-white">Poké</h1>
            <Menu/>
        </div>
        
    )
}