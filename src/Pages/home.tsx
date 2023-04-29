import { Header } from "../Componentes/Header";
import { History } from "../Componentes/History";
import { Input } from "../Componentes/Input";
import { ContextTrack } from '../Context/context'
import { FileSearch } from "@phosphor-icons/react"

export function Home(){
  const { track } = ContextTrack();

  return (
    <div>
      <Header/>
      <Input />
      { track.codObj ? 
        <History /> :
        <div className="flex justify-center py-12"><FileSearch size={250} color="#ebe7e7" /></div> }
    </div>
  )
}