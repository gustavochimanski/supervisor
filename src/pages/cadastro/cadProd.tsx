import Head from "next/head";
import BarraLateral from "@/components/sidebar";
import produtos from "@/json/cadProd.json";
import { FaSearch, FaArrowRight, FaPlus, FaFilter, FaTimes } from 'react-icons/fa';
import { useState } from "react";
import Modal from "@/components/modal";

export default function CadProd() {
    const cabecalho = [
        'ID', 
        'Descrição',
        'Código de Barras','Custo','Preço de Venda', 'Estoque', 'Categoria', 
        'Oferta', 
        'Descrição PDV', 
        'NCM', 
        'Vinc Preço', 
        'Marca', 
        'Balança', 
        'Embalagem', 
        'Quant Emb', 
        'Etiquetas', 
        'Ativo', 
        'Bloqueado'
    ];
    

    const [produtoSelecionado, setProdutoSelecionado] = useState<any>(null);
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = (produto: any) => {
        setProdutoSelecionado(produto);
        setModalAberto(true)
        console.log(produto);
    };

    const fecharModal = () => {
        setProdutoSelecionado(null);
        setModalAberto(false);
    };    

    return (
        <div style={{ display: 'flex' }}>
            <Head>
                <title>Cadastro de Produtos</title>
            </Head>
            
            <div style={{zIndex: '10'}}><BarraLateral/></div>
            

            <div className="container">
                <h2>Cadastro de Produtos</h2>

                <div className="container-topo">
                    <div className="pesquisar-topo"  >
                        <div>
                            <span>Pesquisar</span>
                            <input type="text" placeholder="Digite para pesquisar..." />
                        </div>

                        <button>
                            <FaSearch />
                        </button>
                    </div>

                    <div className="btn-topo">
                        <button title="Novo">
                            <FaPlus />
                        </button>
                        <button title="Filtrar">
                            <FaFilter></FaFilter>
                        </button>
                        <button title="Enviar Carga">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="container-table">
                    <table>
                        <thead>
                            <tr>
                                {cabecalho.map((elemento) => (
                                    <th key={elemento}>{elemento}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {produtos.map((produto: any) => (
                                <tr key={produto.ID} onClick={() => abrirModal(produto)}>
                                    <td>{produto.ID}</td>
                                    <td>{produto["Descrição"]}</td>
                                    <td>{produto["Código de Barras"]}</td>
                                    <td>{produto["Custo"]}</td>
                                    <td>{produto["Preço de Venda"]}</td>
                                    <td>{produto.Estoque}</td>
                                    <td>{produto.Categoria}</td>
                                    <td>{produto.Oferta}</td>
                                    <td>{produto["Descrição PDV"]}</td>
                                    <td>{produto.NCM}</td>
                                    <td>{produto["Vinc Preço"]}</td>
                                    <td>{produto.Marca}</td>
                                    <td>{produto.Balança}</td>
                                    <td>{produto.Embalagem}</td>
                                    <td>{produto["Quant Emb Diretivas"]}</td>
                                    <td>{produto.Etiquetas}</td>
                                    <td>{produto.Ativo}</td>
                                    <td>{produto.Bloqueado}</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    

                {/* Modal */}
                {modalAberto &&  produtoSelecionado &&(
                    <Modal produto={produtoSelecionado}
                    fecharModal={fecharModal}
                    cabecalho={cabecalho}
                    setProdutoSelecionado={setProdutoSelecionado}
                    produtoSelecionado={produtoSelecionado} />
                )}
                </div>
            </div>
        </div>
    );
}
