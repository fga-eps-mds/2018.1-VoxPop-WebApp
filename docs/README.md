# VoxPop WebApp

<p align="center">
  <a href="https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp"><img src="https://img.shields.io/badge/WEB_APP-VoxPop-orange.svg" alt="VoxPop-WebApp"></a>
  <br>
  <a href="https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/tree/dev"><img src="https://img.shields.io/badge/ENV-homologation-orange.svg" alt="VoxPop-WebApp-homologation"></a>
  <a href='http://jenkins.voxpop.ml/job/webapp-build/job/dev/'><img src='http://jenkins.voxpop.ml/job/webapp-build/job/dev/badge/icon' alt="Jenkins-VoxPop-WebApp-dev"></a>
  <br>
  <a href="https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/tree/master"><img src="https://img.shields.io/badge/ENV-production-orange.svg" alt="VoxPop-WebApp-production"></a>
  <a href='http://jenkins.voxpop.ml/job/webapp-build/job/master/'><img src='http://jenkins.voxpop.ml/job/webapp-build/job/master/badge/icon' alt="Jenkins-VoxPop-WebApp-master"></a>
  <br>
  <br>
  <a href="https://github.com/fga-gpp-mds/2018.1-VoxPop-API"><img src="https://img.shields.io/badge/REST_API-VoxPop-orange.svg" alt="VoxPop-API"></a>
  <br>
  <a href="https://github.com/fga-gpp-mds/2018.1-VoxPop-API/tree/dev"><img src="https://img.shields.io/badge/ENV-homologation-orange.svg" alt="VoxPop-API-homologation"></a>
  <a href='http://jenkins.voxpop.ml/job/api-build/job/dev/'><img src='http://jenkins.voxpop.ml/job/api-build/job/dev/badge/icon' alt="Jenkins-VoxPop-API-dev"></a>
  <br>
  <a href="https://github.com/fga-gpp-mds/2018.1-VoxPop-API/tree/master"><img src="https://img.shields.io/badge/ENV-production-orange.svg" alt="VoxPop-API-production"></a>
  <a href='http://jenkins.voxpop.ml/job/api-build/job/master/'><img src='http://jenkins.voxpop.ml/job/api-build/job/master/badge/icon' alt="Jenkins-VoxPop-API-master"></a>
</p>

<p align="center">
  <a href="https://opensource.org/licenses/GPL-3.0"><img src="https://img.shields.io/badge/License-GPL-blue.svg" alt="License: GPL-3.0"></a>
  <a href="https://www.npmjs.com/package/angular2"><img src="https://img.shields.io/badge/Angular-_5_-red.svg" alt="Angular 2"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/Javascript-ECMAScript_6-yellow.svg" alt="Javascript"></a>
</p>

## Quem somos nós

O VoxPop é uma aplicação criada no contexto das disciplinas Métodos de Desenvolvimento de Software (MDS) e Engenharia de Produto de Software (EPS) da Universidade de Brasília (UnB) - Faculdade do Gama (FGA), que visa criar uma classificação pessoal de deputados com base na compatibilidade dos usuários com os parlamentares.

## E como fazemos isso?

Todo o conceito do VoxPop se baseia em cruzar dados abertos disponibilizados pela Câmara dos Deputados [confira aqui](https://dadosabertos.camara.leg.br) com dados fornecidos pelos usuários, podendo assim gerar estatísticas sobre os nossos parlamentares, sobre as proposições que são votadas por eles, e, acima de tudo, sobre a opinião do cidadão a respeito tanto dos parlamentares, quanto das proposições.

## Quais dados nós utilizamos?

Nosso sistema utiliza sempre dados recentes disponibilizados pela Câmara dos Deputados referentes aos parlamentares atuais (informações pessoais, partidárias, etc.), às proposições votadas a partir do ano de 2015, e aos votos dos parlamentares em proposições votadas a partir do ano de 2015.

## Instalação

Para instalar o projeto, deve-se configurar o ambiente tanto para o repositório do Front End [2018.1-VoxPop-WebApp](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/tree/master) quanto do Back End [2018.1-VoxPop-API ](https://github.com/fga-gpp-mds/2018.1-VoxPop-API/tree/master) para trabalharem em conjunto.

Para configurar o Front End:

Deve-se instalar o Angular 5, e para ter o Angular 5, deve-se instalar o conjunto Node.js e o seu gestor de pacotes, o npm. Primeiramente é bom instalar o nvm que é o gerenciador de versões do Node.js. Mas antes de instalar o NVM precisamos de alguns pacotes de dependências que já estão no repositório de sua distribuição Debian Based. Portanto digite no terminal do linux:

$ sudo apt-get update sudo apt-get install build-essential libssl-dev

Agora que você já tem o necessário em seu sistema instale o NVM:

$ curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh _-o installnvm.sh

O número da versão <v0.33.11> pode mudar com o tempo, então recomendo acessar a [página do projeto no GitHub](https://github.com/creationix/nvm) e procurar pela nova versão.

Execute o script com:

$ _bash installnvm.sh

O que está sendo feito aqui é o download de um script e a execução do mesmo, tudo vai ser instalado em um diretório oculto na pasta do seu usuário não é necessário utilizar o comando com sudo nesse caso.

Agora execute:

$ nvm ls-remote

Ele vai te exibir várias versões do Node e assim sabemos que o NVM está funcionando corretamente. Nós escolhemos a versão mais recente do momento a v10.1.0, você pode instala-la digitando:

$ nvm install  10.1.0

Agora vamos verificar a versão do Node para ter certeza que tudo foi instalado corretamente utilizando o comando:

$ node -v

Agora no terminal instale o npm (gerenciador de pacotes do Node.js), digitando:

$ sudo apt-get install npm

Confira se foi instalado corretamente digitando:

$ npm -v

Agora que estamos prontos, podemos passar à instalação da interface de linha de comandos do angular. Para isso basta o seguinte comando:

$ npm install @angular/cli -g

 Assim que o gestor de pacotes terminar de instalar, fazemos a verificação se foi corretamente instalado com o seguinte comando:

$ ng -v

Para trabalhar com os containers já configurados, deve-se instalar o docker compose, já que o docker Compose é o orquestrador de containers do Docker. Digite no terminal para instalar a última versão do compose:

$ sudo curl -L https://github.com/docker/compose/releases/download/1.21.2/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

Teste a instalação com:

$ docker-compose --version

Agora pelo terminal dentro da pasta do Front End, instale os pacotes com:

$ npm install

Isso consiste as instalações do Front End, já para instalar o Back End, além de já ter o docker compose instalado, deve-se instalar o python, pip and django.Instale o python pelo terminal com:

$ sudo apt-get install python3.5

Para instalar o gerenciador de pacotes pip, digite no terminal:

$ sudo apt-get install python-pip

Para instalar o framework Django, digite:

$ sudo apt-get install python-django

Pronto, o projeto está todo configurado e pronto para uso. Para rodar a API, basta na pasta do Back End digitar:

$ make start

E logo apos:

$ make up

Agora para ver o projeto executando, entre na pasta do Back End pelo terminal e digite:

$ ng serve

Por ultimo va no browser do seu computador, e digite no navegador o endereço:
http://localhost:4200

## Licença

O projeto utiliza a licença GNU General Public License v3.0, [confira aqui](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/blob/master/LICENSE)

## Mais informações

Para mais informações sobre o projeto, veja a documentação completa aqui: [VoxPop Docs](https://docs.voxpop.ml/)

## Nossos endereços

* ![Online](https://img.shields.io/badge/STATUS-Online-green.svg) **--->** [**Documentação [https://docs.voxpop.ml]**](https://docs.voxpop.ml)
* ![Online](https://img.shields.io/badge/STATUS-Online-green.svg) **--->** [**Jenkins (CI) [http://jenkins.voxpop.ml]**](http://jenkins.voxpop.ml)
* ![Online](https://img.shields.io/badge/STATUS-Online-green.svg) **--->** [**API de Homologação [https://hml.api.voxpop.ml]**](https://hml.api.voxpop.ml)
* ![Online](https://img.shields.io/badge/STATUS-Online-green.svg) **--->** [**WebApp de Homologação [https://hml.voxpop.ml]**](https://hml.voxpop.ml)
* ![Online](https://img.shields.io/badge/STATUS-Online-green.svg) **--->** [**API de Produção [https://api.voxpop.ml]**](https://api.voxpop.ml)
* ![Online](https://img.shields.io/badge/STATUS-Online-green.svg) **--->** [**WebApp de Produção [https://voxpop.ml]**](https://voxpop.ml)
