import {MagnifyingGlass } from "@phosphor-icons/react"


export function Header() {
  return (
    <header className="w-full h-12 py-3 pr-12 flex justify-end gap-2">
      <MagnifyingGlass size={32} color="#d21e90"/>
      <p className="font-bold">TRACK APP</p>
    </header>
  )
}