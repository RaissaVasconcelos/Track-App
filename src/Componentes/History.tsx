import { ContextTrack } from '../Context/context'
import { Card } from './Card'

export function History() {
  const { track } = ContextTrack();

  const arrEventsReverse = track.eventos.reverse();  

  return (
    <div>
      <h1>Acompanhe seu pedido</h1>
      <p></p>
      { arrEventsReverse.map((item, index) => (
        <Card
          key={index}
          descricao={item.descricao}
          dtHrCriado={item.dtHrCriado}
          enderecoUnidade={item.unidade.endereco.cidade}
          ufUnidade={item.unidade.endereco.uf}
          enderecoDestino={item.unidadeDestino?.endereco.cidade}
          ufDestino={item.unidadeDestino?.endereco.uf}
        />
      )) }
    </div>
  )
}