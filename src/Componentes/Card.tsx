import { House, Package, Truck } from "@phosphor-icons/react"

interface cardProps {
  descricao: string
  dtHrCriado: string
  enderecoUnidade: string
  ufUnidade: string
  enderecoDestino?: string
  ufDestino?: string
}

export function Card({
    descricao,
    dtHrCriado,
    enderecoUnidade,
    ufUnidade,
    enderecoDestino,
    ufDestino }: cardProps) {
  return (
    <div className="w-full py-1">
      <div className="max-w-[1000px] w-full mx-auto py-10 px-10 border-2 border-indigo-100 border-b-indigo-400 flex gap-8">
        <p className="text-1xl font-bold">{dtHrCriado}</p>
        <div className="flex flex-col gap-5">
          <p className="text-1xl font-bold">{descricao}</p>
          <div>
            { enderecoDestino ? ( 
              <div className="flex gap-3">
                <Truck size={32} />
                <div>
                  <p>{`Destino: ${enderecoDestino} - ${ufDestino} `}</p>
                  <p>{`${enderecoUnidade} - ${ufUnidade} `}</p>
                </div>
              </div>
              ) : (
                <div>
                  { descricao == 'Objeto postado' ? (
                      <div className="flex gap-3">
                        <Package size={32} />
                        <p>{`${enderecoUnidade} - ${ufUnidade} `}</p>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <House size={32} />
                        <p>{`${enderecoUnidade} - ${ufUnidade} `}</p>
                      </div>)
                  }
                </div>
              ) }
          </div>
        </div>
      </div>
    </div>
  )
}