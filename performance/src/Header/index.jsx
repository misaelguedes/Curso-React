import { memo } from "react"

export function Header({name}) {
  return (
   <h3>Bem-vindo(a) {name}</h3>
  )
}

export const MemorizedHeader = memo(Header)