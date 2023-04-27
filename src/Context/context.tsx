import { createContext, ReactNode, useContext, useState } from 'react';
import { IDataTrack, IEventos } from '../Interfaces/IDataTrack'
import { InputCode } from '../Interfaces/InputCode'
import { api } from '../Service/api'

interface TrackProviderProps {
  children: ReactNode
}

interface TrackContextType {
  track: IDataTrack
  inputCode: (data: InputCode) => Promise<void>
}

const TrackContext = createContext<TrackContextType>({} as TrackContextType)

export function TrackProvider({ children }: TrackProviderProps) {
  const [track, setTrack] = useState<IDataTrack>({} as IDataTrack)
  
  const inputCode = async (data: InputCode) => {
    const response = await api.post('/rastreio', data);
    const responseTrack = response.data.response.objetos[0];
    const responseEvento = response.data.response.objetos[0].eventos;
    // criar um objeto com o formato de IDataTrack
    const objData = {
      codObj: responseTrack.codObjeto,
      datPrevista: responseTrack.dtPrevista,
      tipoPostal: {
        categoria: responseTrack.tipoPostal.categoria,
        descricao: responseTrack.tipoPostal.descricao,
        sigla: responseTrack.tipoPostal.sigla,
      },
      eventos: responseEvento.map((event: IEventos) => {
        return { 
          codigo: event.codigo,
          descricao: event.descricao,
          dtHrCriado: event.dtHrCriado,
          unidade: {
            endereco: {
              cidade: event.unidade.endereco.cidade,
              uf: event.unidade.endereco.uf,
            },
            tipo: event.unidade.tipo
          },
          unidadeDestino: {
            endereco: {
              cidade: event.unidadeDestino?.endereco.cidade,
              uf: event.unidadeDestino?.endereco.uf,
            },
            nome: event.unidadeDestino?.nome,
            tipo: event.unidadeDestino?.tipo
          },
         }
      })
    }
    // atualizar o state de track
    setTrack(objData);
  }

  return (
    <TrackContext.Provider
      value={{
        track,
        inputCode
      }}
    >
      {children}
    </TrackContext.Provider>
  );
}


export function ContextTrack() {
  const context = useContext(TrackContext)
  return context
}


