import { History } from "../Componentes/History";
import { Input } from "../Componentes/Input";
import { ContextTrack } from '../Context/context'

export function Home(){
  const { track } = ContextTrack();
  console.log('trackzao', track)
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Rastreio de encomendas</h1>
      <Input />
      { track.codObj && <History /> }
    </div>
  )
}