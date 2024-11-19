import React from "react";
import { FaPlus, FaPen, FaFilter, FaTimes, FaTrash } from 'react-icons/fa';


interface ModalProps {
    produto:any;
    fecharModal: () => void;
    cabecalho: string[];
    setProdutoSelecionado: (produto: any) => void;
    produtoSelecionado: any;
}
export default function Modal({
    fecharModal,
    cabecalho,
    setProdutoSelecionado,
    produtoSelecionado
}: ModalProps) {

    // Função para gerar o nome da chave a partir do cabeçalho
    const getChave = (elemento: string) => {
        return elemento
    };
    return(
        <div>
            <div className="modal">
            <button className="close-modal" onClick={fecharModal}>×</button>
                <div className="modal-container">
                    <h3>Detalhes do Produto</h3>

                    <div className="modal-container-corpo">
                        {cabecalho.map((elemento) => {
                            const chave = getChave(elemento);

                            return (
                                <div key={elemento} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label>{elemento}</label>
                                    <input type="text" 
                                    value={produtoSelecionado ? produtoSelecionado[chave] || "" : ""}
                                    onChange={(e) =>
                                        setProdutoSelecionado({
                                            ...produtoSelecionado, [chave]: e.target.value,
                                        })
                                    }/>
                                </div> 
                            )
                        })}
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <div className="modal-btns-functions">
                        <button> <FaPlus></FaPlus></button>
                        <button><FaFilter></FaFilter></button>
                        <button><FaTimes></FaTimes></button>
                        <button><FaTrash></FaTrash></button>
                        <button><FaPen></FaPen></button>
                    </div>
                </div>    
            </div>
        </div>
    )
}