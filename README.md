# Track-App

### Criar um rastreador de pacotes de correios

### Objetivo: Criar um rastreador de pacotes de correio e ira aparecer o historico de pacotes

[Req Funcional]

 - Deve ser possível o usuario obter historico do pacote a partir de um código
 
[Regras de Negocio]

 - O código de rastreio deve ter um limite de 20 caracteres
 - O código deve ser composto de 4 letras (Maiusculas) e 9 numeros
 - O código deve ter suas primeiras letras com as seguintes siglas
   PAC são EC, PD, PI, PJ e PL e o Sedex são SQ e SR
 - O código deve ter suas ultimas letras com o pais de origem ex: BR


## Retorno API 

``` RastreioResult = {
  sucesso: boolean; // sucesso no rastreio
  rastreio: string; // código de rastreio
  entregue?: boolean; // se o objeto foi entregue
  // array de eventos do rastreio
  type?: string; // tipo do pacote, por exemplo: PAC, SEDEX, etc.
  eventos?: {
    status: string; // status do evento
    data: string; // data do evento
    hora: string; // hora do evento
    origem?: string; // origem do evento (se existir)
    destino?: string; // destino do evento (se existir)
    local?: string; // local do evento (se existir)
  }[];
}
```
