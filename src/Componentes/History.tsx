// import { ContextTrack } from '../Context/context'
import { Card } from './Card'
import { arrEventos } from '../mock'

export function History() {
  // const { track } = ContextTrack();

  // const arrEventsReverse = track.eventos.reverse();
  const arr = arrEventos.reverse();

  return (
    <div className="w-full flex flex-col">
      <h1 className='text-2xl font-bold justify text-center my-8'>Acompanhe seu pedido</h1>
      { arr.reverse().map((item: any, index: number) => (
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