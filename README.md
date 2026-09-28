# Site da HackerSchool em React
Este ano estamos a trabalhar em migrar o site para React com Typescript.

## Desenvolvimento

O site usa simplesmente React + Vite. Este projeto está ligado também à nova API que está a ser desenvolvido em paralelo. A API pode ser encontrada [aqui](https://github.com/HackerSchool/HS-API-Simple).

### Dependências
A única dependência do site é [Node.js](https://nodejs.org/en)

Após o Node.js estiver instaldo, é preciso instalar os packages que o site utiliza. Para tal bastar correr o seguinte comando na diretoria onde estiver o ficheiro `package.json`:
```bash
npm install
```

Após isto, para visualizar o site em tempo real basta correr
```bash
npm run dev
```

> **🔧 Nota:** Não estando ainda operacional, não há outra versão para além da de desenvolvimento.
>
> Com o site operacional, o desenvolvimento deverá ser realizado na branch `dev`. A branch `main` é utilizada apenas para o código de produção. 

## Deploy

O site é alojado no servidor siga que o Técnico oferece. 

Antes de fazer deploy, é preciso criar a versão de produção do site, para tal basta correr:
```bash
npm run build
```

A diretoria `dist/` será criada que contém os ficheiros necessários para o funcionamento do site.

O deploy é feito através de `rsync`. É recomendado correr o comando com a flag `n` para fazer um teste antes de copiar os ficheiros para o destino.

```bash
rsync -avzn dist/ <ist_id>@sigma.tecnico.ulisboa.pt:/afs/ist.utl.pt/groups/hackerschool/web
```
O campo <ist_id> deve ser substituido pelo login que é utilzado no fénix. É necessário ter o seviço `afs` ativo. Para isso basta recorrer ao serviço de self-service disponibilizado pela DSI [aqui](https://selfservice.dsi.tecnico.ulisboa.pt/)

>**Importante**: Para fazer deploy, é necessário ter permissões, quem não tem permissões deve falar com o coordenador de dev ou outro membro da direção sobre tal.

