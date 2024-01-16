import { styled } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Cabecalho from './components/Header'
import CampoTexto from './components/CampoTexto'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import bannerImage from './assets/banner.png' 

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {

  return (
    <FundoGradiente>
      <GlobalStyles />
      <Cabecalho>
        <CampoTexto type="search"/>
      </Cabecalho>
      <BarraLateral />
      <Banner 
        texto="A galeria mais completa de fotos do espaço!"
        backgroundImage={bannerImage}
      />
    </FundoGradiente>
  )
}

export default App
