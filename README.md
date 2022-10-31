# Cartas Nada Assustadoras
![Pagina de boa vindas](https://i.imgur.com/XwSqCkY.png)

## Instruções de setup e inicialização

Para executar o projeto o primeiro passo e **baixar o zip do projeto** e descompacta ou fazer o **clone pelo git.**

Alguns **requisitos necessários** para rodar o projeto na sua máquina são o **node e yarn.**

Com o node e o yarn devidamente instalado entre na pasta do projeto e rode o comando `yarn install` para poder **baixar todas as dependerias necessárias**

Feito Tudo isso agora você pode **iniciar o projeto** para isso rode o comando `yarn start`

## Historia

Estando próximo do Halloween pensei em fazer um site para mostrar cartas, mas eu não gosto de coisas assustadoras então essas cartas não serão assustadoras e sim fofas e divertidas como por exemplo um “fantasma assustado” e entre outras então visite o site não se assuste.

No projeto terão 2 telas a primeira e uma de boas vindas onde o usuário deve informar seu nome. Em seguida ele será redirecionado para a tela que ele poderá visualizar as cartas.

## Requisitos Funcionais

- Será utilizado a api do notion para obter os dados das cartas
    - As cartas devem conter nome, descrição, imagem e um valor de 0 a 10 obtido de forma aleatória
- Deve conter uma pagina de boas vindas onde usuário informa o nome
- Um botão na tela de boas vindas onde a ação será redirecionar para a pagina de visualização de cartas
    - botão só deve ser ativo se nome for preenchido
- Deve conter uma pagina de visualização de cartas
    - Esse tela deve mostrar o nome digitado na tela de boas vindas
        - nome será exibido no canto superior direito
    - Inicialmente deve mostrar 5 cartas
    - Todas as cartas devem ser obtidas de forma aleatória
    - Deve conter um botão de adicionar mas cartas
        - limitar a adição de 3 cartas totalizando 8 no final
        - botão deve ser desabilitado após os 3 usos
        
## Requisitos não funcionais

Conteudo será fornecido pela api do notion ([https://developers.notion.com/docs/getting-started](https://developers.notion.com/docs/getting-started))

Frontend será desenvolvido com versão 17 do ReactJS([https://pt-br.reactjs.org/](https://pt-br.reactjs.org/))

Estilização vai ser criada com styled components ([https://styled-components.com/](https://styled-components.com/))
        
## Protótipo

![Pagina de boa vindas](https://i.imgur.com/bfb1fCx.png)
![Pagina de boa vindas](https://i.imgur.com/tY4PAtF.png)
