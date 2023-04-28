export const arrEventos = [
  {
    codigo: "PO",
    descricao: "Objeto postado",
    dtHrCriado: "2023-03-28T16:26:27",
    unidade: {
        endereco: {},
        nome: "CHINA",
        tipo: "País"
    },
  },
  {
    codigo: 'PAR',
    descricao: 'Objeto recebido pelo brasil',
    dtHrCriado: '2023-03-30T16:22:44',
    unidade: {
      endereco: {
        cidade: 'Curitiba',
        uf: 'PR'
      },
      tipo: 'Unidade Logistica Integrada',
    },
  },
  {
    codigo: 'PAR',
    descricao: 'Fiscalização Aduaneira finalizada',
    dtHrCriado: '2023-03-30T16:22:44',
    unidade: {
      endereco: {
        cidade: 'Curitiba',
        uf: 'PR'
      },
      tipo: 'Unidade Logistica Integrada',
    },
    unidadeDestino: {
      endereco: {
        cidade: 'Itajai',
        uf: 'SC'
      },
      tipo: 'Sedex',
    }
  },
  {
    codigo: 'PAR',
    descricao: 'Objeto em transito - por favor aguarde',
    dtHrCriado: '2023-03-30T16:22:44',
    unidade: {
      endereco: {
        cidade: 'Manaus',
        uf: 'AM'
      },
      tipo: 'Unidade de tratamento',
    },
    unidadeDestino: {
      endereco: {
        cidade: 'Manaus',
        nome: 'CDD Aleixo',
        uf: 'AM'
      },
      tipo: 'Sedex',
    }
  },
]