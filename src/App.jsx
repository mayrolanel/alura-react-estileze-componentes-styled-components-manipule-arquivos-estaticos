import { styled } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Cabecalho from './components/Header'
import CampoTexto from './components/CampoTexto'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import bannerImage from './assets/banner.png' 
import Galeria from './components/Galeria'
import { useState } from 'react'
import fotos from './fotos.json'

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1
`

function App() {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>

        <Cabecalho>
          <CampoTexto type="search"/>
        </Cabecalho>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
           
            <Banner 
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerImage}
            />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
          
        </MainContainer>
        
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
