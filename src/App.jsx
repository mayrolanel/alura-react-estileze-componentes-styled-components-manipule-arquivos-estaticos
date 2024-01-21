import { styled } from 'styled-components'
import GlobalStyles from './components/GlobalStyles'
import Cabecalho from './components/Header'
import CampoTexto from './components/CampoTexto'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import bannerImage from './assets/banner.png'
import Galeria from './components/Galeria'
import { useEffect, useState } from 'react'
import fotos from './fotos.json'
import ModalZoom from './components/ModalZoom'

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
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoComZoom, setFotoComZoom] = useState(null)
  
  function aoAlternarFavorito(foto) {

    if (foto.id === fotoSelecionada?.id){
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
      return filtroPorTag && filtroPorTitulo;
    })
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>

        <Cabecalho>
          <CampoTexto type="search" onChange={(evento) => { setFiltro(evento.target.value) }}/>
        </Cabecalho>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>

            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerImage}
            />
            <Galeria
              fotos={fotosDaGaleria}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
              setTag={setTag}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>

      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
