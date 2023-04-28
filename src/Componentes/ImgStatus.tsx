import { CheckCircle, Package, Truck } from "@phosphor-icons/react"

interface ImgStatusProps {
  status: string,
}

export function ImgStatus({ status }: ImgStatusProps) {
  return (
    <div>
      { status === "Objeto postado" && <Package size={32} /> }
      { status === "Objeto em trânsito - por favor aguarde" && <Truck size={32} />}
      { status === "Objeto entregue ao destinatário" && <CheckCircle size={32} color="#6fd21e" />}
    </div>
  )
}