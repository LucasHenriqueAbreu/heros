# Heros

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 6.1.2.

Para ter em sua máquina, clone o projeto e instale as dependências:
```bash
git clone https://github.com/LucasHenriqueAbreu/heros.git
cd heros
npm install
```

## Server de desenvolvimento

Execute `ng serve`  para um servidor dev. Navegue até `http://localhost:4200/`. aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos.

## Gerador de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para realizar o build do projeto. Os arquivos de build serão armazenados no diretório `dist/heros`. Use a flag `--prod` para fazer o build em produção.

## GitHub Pages

Para atualizar o projeto no basta executar os seguintes comandos na pasta raíz do projeto:
```bash
ng build --prod --base-href /heros/
ngh --dir dist/heros
```
## Rodando testes unitáios

Execute `ng test` para rodar os testes unitários via [Karma](https://karma-runner.github.io).

## Rodando testes end-to-end

Execute `ng e2e` para rodar os testes end-to-end via [Protractor](http://www.protractortest.org/).

## Ajuda

Para obter mais ajuda sobre o uso do CLI Angular `ng help` ou vá conferir o [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
