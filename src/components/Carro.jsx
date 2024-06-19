import React from "react";

const Carro = ({ carro }) => {
    const { modelo } = carro;
    
    return (
        <div className="w-72 p-0 shadow-md">
            <img src={modelo.imagem} className="w-full" alt={modelo.nome} />
            <div className="p-4">
                <h5 className="text-xl font-bold">{modelo.nome}</h5>
                <div className="flex gap-2">
                    <a href="#" className="text-blue-500 hover:underline">Editar</a>
                    <a href="#" className="text-blue-500 hover:underline">Detalhes</a>
                </div>
            </div>
        </div>
    );
};

export default Carro;
