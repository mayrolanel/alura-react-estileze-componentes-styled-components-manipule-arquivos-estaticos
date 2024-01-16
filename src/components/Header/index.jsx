import {styled} from "styled-components";

const HeaderEstilizado  = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212;
    }
`

function Cabecalho ({children}) {
    return(<HeaderEstilizado >
            <img src="/imagens/logo.png" alt="cabeçalho" />
            {children}
        </HeaderEstilizado >)
}

export default Cabecalho ;