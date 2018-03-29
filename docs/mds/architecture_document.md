# Documento de Arquitetura

**Versão 1.0**

### Histórico de Revisão

| Data | Versão | Descrição | Autor |
|  :-: |   :-:  |    :-:    |  :-:  |
|19/03/2018| 0.1 | Criação do Documento | Filipe Toyoshima|
|24/03/2018| 0.2 | Tradução para Português| Samuel Borges|
|24/03/2018| 0.3 | Metas e Restrições de Arquitetura| Rossicler Júnior|
|24/03/2018| 0.4 | Representação da Arquitetura | Lucas Vitor|

## Sumário
1. [Introdução](#1-introdu%C3%A7%C3%A3o)   
    1.1 [Referências](#11-referencias)
2. [Representação da Arquitetura](#2-representa%C3%A7%C3%A3o-da-arquitetura)  
3. [Metas e Restrições da Arquitetura](#3-metas-e-restri%C3%A7%C3%B5es-da-arquitetura)
4. [Visão Lógica](#5-vis%C3%A3o-l%C3%B3gica)
    4.1 [Visão geral](#15-vis%C3%A3o-geral)    
5. [Visão de Implementação](#6-vis%C3%A3o-de-implementa%C3%A7%C3%A3o)   

***
## 1. Introdução

Nesse documento serão apresentados os principais detalhes da arquitetura proposta para o projeto. Isso tem como objetivo cobrir os aspectos técnicos mais importantes do desenvolvimento até a implementação do sistema. A principal função disso é formalizar as decisões estruturais sobre o stack de desenvolvimento, implantação, e teste do projeto.

### 1.1. Referências

|**ID**|**Nome**|**Data**|**Disponível em**|
| :---: | --- | --- | --- |
| 01 | Documentation | 24/03/2018 | https://docs.djangoproject.com/pt-br/2.0/faq/general/ |
| 02 | O que é MVC? | 24/03/2018 | https://tableless.com.br/mvc-afinal-e-o-que/ |

## 2. Representação da Arquitetura

Para o desenvolvimento do sistema VoxPop será utilizado o framework web de alto nível Django, escrito em Python, que utiliza um padrão semelhante ao MTV (Model-View-Templae), onde:

A **model** é a camada responsável pela manipuação (leitura e escrita) dos dados e informações acerca dos mesmos, ou seja, interface com o banco de dados;

A **view** é camada responsável pela implementação das regras de apresentação e negócio entre a model e a template, cadastrando e tratando os dados vindos da model para serem posteriormente retornados para a template;

A **template** é camada responsável pela visualisação dos dados para o usuário, geralmente compostas por HTML, CSS ou Javascript para apresentação.

![MVC-Django](https://4.bp.blogspot.com/-NEcYwo9PBC4/V8MrvCyN_bI/AAAAAAAAKWA/UXlkbAFd4gwgWmfWBeTFur7W9TtN39KWQCLcB/s1600/MTV.png)

É importante ressaltar que as resoluções das rotas das URLs, responsabilidade comumente dada à **Controller** do MVC(Model-View-Controller) é uma tarefa já feita pela própria framework do Django.

Abaixo é apresentada uma imagem do modelo MVT:





## 3. Metas e Restrições de Arquitetura

A aplicação do padrão de arquitetura para esse projeto possui algumas metas e restrições:

* Modularidade: O sistema da API deve seguir a arquitetura em micro-serviços onde cada serviço seguirá a arquitetura em camadas MTV (model, template, view), para o front-end, iremos seguir a arquitetura em camadas MVVM (model, view, viewmodel) em que um módulo define bem uma interação interna.
* Manutenibilidade: a estrutura arquitetural em módulos facilita a manutenção do software e define as interfaces de interação entre elas.
* Reusabilidade: a estrutura deve permitir a economia e o reuso de código, favorecendo a qualidade do software.
* O framework utilizado para desenvolvimento da API será o django, compatível com a linguagem python3. Para o front-end, será usado o framework Angular 2, com a linguagem TypeScript.
* A base de dados relacionais do sistema será o PostgreSQL.
* Será utilizada uma API (Interface de programação de aplicação), tendo como meta um software final REST.


## 4. Visão Lógica

### 4.1 Visão Geral

A aplicação do modelo de arquitetura MVC, no caso MVT em Django, obedece a organização do framework Python/django organizada em pacotes.

![VL](https://i.imgur.com/fgxC0zD.jpg)


## 5. Visão de Implementação

O diagrama abaixo descreve o modo como o sistema será implementado:

![VI](https://image.ibb.co/irKG4n/pao_De_Batata.jpg)
