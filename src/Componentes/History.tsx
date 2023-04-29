import { ContextTrack } from '../Context/context'
import { Card } from './Card'
// import { arrEventos } from '../mock'

export function History() {
  const { track } = ContextTrack();

  const arrEventsReverse = track.eventos.reverse();

  return (
    <div className="w-full flex flex-col">
      <h1 className='text-2xl font-bold justify text-center my-8'>Acompanhe seu pedido</h1>
      { arrEventsReverse.map((item: any, index: number) => (
        <Card
          key={index}
          descricao={item.descricao}
          dtHrCriado={item.dtHrCriado}
          unidade={item.unidade}
          unidadeDestino={item.unidadeDestino}
        />
      )) }
    </div>
  )
}