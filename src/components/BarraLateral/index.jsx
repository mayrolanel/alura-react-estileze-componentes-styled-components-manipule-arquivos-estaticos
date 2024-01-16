import styled from "styled-components";
import iconeAtivo from '/icones/Home - ativo.png'
import iconeInativo from '/icones/Home - inativo.png'
import ItemNavegacao from "./ItemNavegacao";
const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

function BarraLateral() {
    return(
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNavegacao iconeAtivo={iconeAtivo} iconeInativo={iconeInativo} ativo={true}>
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao iconeAtivo={iconeAtivo} iconeInativo={iconeInativo}>
                    Mais vistas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/Mais curtidas - ativo.png"
                        iconeInativo="/icones/Mais curtidas - inativo.png"
                    >
                        Mais curtidas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/Novas - ativo.png"
                        iconeInativo="/icones/Novas - inativo.png"
                    >
                        Novas
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/Surpreenda-me - ativo.png"
                        iconeInativo="/icones/Surpreenda-me - inativo.png"
                    >
                        Surpreenda-me
                    </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;