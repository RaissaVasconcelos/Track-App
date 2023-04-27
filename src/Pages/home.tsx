import { History } from "../Componentes/History";
import { Input } from "../Componentes/Input";
import { ContextTrack } from '../Context/context'

export function Home(){
  const { track } = ContextTrack();
  console.log('trackzao', track)
  return (
    <div>
      <Input />
      {/* { track.codObj && <History /> } */}
      <History />
    </div>
  )
}