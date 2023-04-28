import { House, Package, Truck } from "@phosphor-icons/react"

interface IUnidade {
    endereco: {
      cidade: string,
      uf: string,
      nome_d?: string,
    },
    nome?: string,
    tipo: string,
}

interface cardProps {
  descricao: string
  dtHrCriado: string
  unidade: IUnidade,
  unidadeDestino?: IUnidade,
}

export function Card({
    descricao,
    dtHrCriado,
    unidade,
    unidadeDestino }: cardProps) {

    const data = dtHrCriado.slice(0, 10);
    const hora = dtHrCriado.slice(11, 20);
    
  return (
    <div className="w-full py-1">
      <div className="max-w-[1000px] w-full mx-auto py-10 px-10 border-2 border-indigo-100 border-b-indigo-400 flex gap-8">
        <div>
          <p className="text-1xl font-bold">{data}</p>
          <p className="text-1xl">{hora}</p>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-1xl font-bold">{descricao}</p>
          <div>
            { unidadeDestino ? ( 
              <div className="flex gap-3">
                <Truck size={32} />
                <div className="flex flex-col gap-3">
                  <p className="font-bold">{`Destino: ${unidadeDestino.endereco.cidade}/${unidadeDestino.endereco.uf}`}</p>
                  <p>{`${unidade.tipo} - ${unidade.endereco.cidade}/${unidade.endereco.uf}`}</p>
                </div>
              </div>
              ) : (
                <>
                  { descricao == 'Objeto postado' ? (
                      <div className="flex gap-3">
                        <Package size={32} />
                        <p>{`${unidade?.tipo} - ${unidade?.endereco?.cidade}/${unidade?.endereco?.uf}`}</p>
                        <p>{unidade?.nome}</p>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <House size={32} />
                        <p>{`${unidade.tipo} - ${unidade.endereco.cidade}/${unidade.endereco.uf}`}</p>
                      </div>)
                  }
                </>
              ) }
          </div>
        </div>
      </div>
    </div>
  )
}