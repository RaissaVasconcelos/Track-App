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
    <div>
      <h3 className="text-3xl font-bold underline">{descricao}</h3>
      <p>{dtHrCriado}</p>
      <div>
        <p>{`${enderecoUnidade} - ${ufUnidade} `}</p>
        { enderecoDestino && <p>{`Destino: ${enderecoDestino} - ${ufDestino} `}</p> }
      </div>
    </div>
  )
}