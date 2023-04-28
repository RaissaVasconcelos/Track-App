interface ITypePostal {
  categoria: string
  descricao: string
  sigla: string
}

interface IEndereco {
  endereco: {
    cidade: string
    uf: string
    nome?: string,
  }
  nome?: string
  tipo: string
}

export interface IEventos {
  codigo: string
  descricao: string
  dtHrCriado: string
  unidade?: IEndereco
  unidadeDestino?: IEndereco
}

export interface IDataTrack {
  codObj: string
  datPrevista: string
  tipoPostal: ITypePostal
  eventos: IEventos[]
}
