import ModelsCaixa from "./types";


const Caixas = (props: ModelsCaixa) => {
    return (
        <>
            <div className='bg-white m-2 p-4 rounded-2xl shadow-2xl  transition duration-300 ease-in-out transform hover:scale-105'>
                <h2 className="text-2xl text-gray-800 ">{props.matricula}</h2>
                <p className="text-lg text-gray-600">{props.name}</p>

                <button onClick={props.realizarVenda} className="bg-green-400 cursor-pointer hover:bg-green-600 p-2 rounded text-white  font-bold">Verificar</button>
            </div>
        </>
    );
}

export default Caixas;