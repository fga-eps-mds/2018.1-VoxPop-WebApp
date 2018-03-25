# Documento de Arquitetura

**Versão 1.0**

### Histórico de Revisão

| Data | Versão | Descrição | Autor |
|  :-: |   :-:  |    :-:    |  :-:  |
|19/03/2018| 0.1 | Criação do Documento | Filipe Toyoshima|
|24/03/2018| 0.2 | Tradução para Português| Samuel Borges|
|24/03/2018| 0.3 | Metas e Restrições de Arquitetura| Rossicler Júnior|
|24/03/2018| 0.4 | Representação da Arquitetura | Lucas Vitor|


# Introdução

Nesse documento são apresentados os principais detalhes da arquitetura proposta para o projeto. Isso tem como objetivo cobrir os aspectos técnicos mais importantes do desenvolvimento e implementação do sistema. A principal função disso é formalizar as decisões estruturais sobre o stack de desenvolvimento, implantação, e teste do projeto.

## Referências

|**ID**|**Nome**|**Data**|**Disponível em**|
| :---: | --- | --- | --- |
| 01 | Documentation | 24/03/2018 | https://docs.djangoproject.com/pt-br/2.0/faq/general/ |
| 02 | O que é MVC? | 24/03/2018 | https://tableless.com.br/mvc-afinal-e-o-que/ |



# Representação da Arquitetura

Para o desenvolvimento do sistema VoxPop será utilizado o framework web de alto nível Django, escrito em python, que utiliza um padrão semelhante ao MVC (Model View Controller), onde:

**Model** é a responsável pela manipuação (leitura e escrita) dos dados, ou seja, interface com o banco de dados;

**View** é a responsável pela interação direta com o usuário (por meio de html, css, javaScript etc), basicamente, sua função é a exibição dos dados;

**Controller** é a responsável por receber e processar requisições e controlar qual model e qual view será mostrada ao usuário.

Abaixo está uma imagem representativa do modelo MVC:

![MVC](https://imgur.com/DCbCeGg.png)

Mais especificamente,  o Django utiliza o MVT (Model View Template), onde a model continua sendo a model, a view se chama template e a controller se chama view.

Abaixo é apresentada uma imagem do modelo MVT:

![MVC-Django](https://4.bp.blogspot.com/-NEcYwo9PBC4/V8MrvCyN_bI/AAAAAAAAKWA/UXlkbAFd4gwgWmfWBeTFur7W9TtN39KWQCLcB/s1600/MTV.png)



# Metas e Restrições de Arquitetura

A aplicação do padrão de arquitetura para esse projeto possui algumas metas e restrições:

* Modularidade: O sistema da API deve seguir a arquitetura em micro-serviços onde cada serviço seguirá a arquitetura em camadas MTV (model, template, view), para o front-end, iremos seguir a arquitetura em camadas MVVM (model, view, viewmodel) em que um módulo define bem uma interação interna.
* Manutenibilidade: a estrutura arquitetural em módulos facilita a manutenção do software e define as interfaces de interação entre elas.
* Reusabilidade: a estrutura deve permitir a economia e o reuso de código, favorecendo a qualidade do software.
* O framework utilizado para desenvolvimento da API será o django, compatível com a linguagem python3. Para o front-end, será usado o framework Angular 2, com a linguagem TypeScript.
* A base de dados relacionais do sistema será o PostgreSQL.
* Será utilizada uma API (Interface de programação de aplicação), tendo como meta um software final REST.


# Visão Lógica

## Visão Geral

A aplicação do modelo de arquitetura MVC, no caso MVT em Django, obedece a organização do framework Python/django organizada em pacotes.

![VL](http://i.imgur.com/vUfAbhp.png)


# Visão de Implementação

O diagrama abaixo descreve o modo como o sistema será implementado:

![VI](http://i.imgur.com/naHkKZj.jpg)
