---
layout: default
title: Documento de Arquitetura
category: MDS
---

# Documento de Arquitetura

**Versão 1.0**

### Histórico de Revisão

| Data | Versão | Descrição | Autor |
|  :-: |   :-:  |    :-:    |  :-:  |
|19/03/2018| 0.1 | Criação do Documento | Filipe Toyoshima|
|24/03/2018| 0.2 | Tradução para Português| Samuel Borges|
|24/03/2018| 0.3 | Metas e Restrições de Arquitetura| Rossicler Júnior|
|24/03/2018| 0.4 | Representação da Arquitetura | Lucas Vitor|
|28/03/2018| 0.5 | Representação da Arquitetura | Rossicler Junior, Eduardo Lima|
|28/03/2018| 0.6 | Representação da Arquitetura | Érico Bandeira, Lucas Vitor|
|29/03/2018| 0.7 | Representação da Arquitetura | Érico Bandeira, Samuel Borges|

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
| 01 | Documentation | 24/03/2018 | https://docs.djangoproject.com/pt-br/2.0/faq/general/

## 2. Representação da Arquitetura

Para o desenvolvimento do sistema VoxPop será utilizado o framework web de alto nível Django, escrito em Python, que utiliza um padrão semelhante ao MTV (Model-View-Template), onde:

A **Model** é a camada responsável pela manipulação (leitura e escrita) dos dados e informações acerca dos mesmos, ou seja, interface com o banco de dados;

A **View** é camada responsável pela implementação das regras de apresentação e negócio entre a model e a template, cadastrando e tratando os dados vindos da model para serem posteriormente retornados para a template;

A **Template** é camada responsável pela visualização dos dados para o usuário, geralmente compostas por HTML, CSS ou Javascript para apresentação.

É importante ressaltar que as resoluções das rotas das URLs, responsabilidade comumente dada à **Controller** do MVC(Model-View-Controller) é uma tarefa já feita pela própria framework do Django.

Abaixo é apresentada uma imagem do modelo MVT:

![MVC-Django](https://4.bp.blogspot.com/-NEcYwo9PBC4/V8MrvCyN_bI/AAAAAAAAKWA/UXlkbAFd4gwgWmfWBeTFur7W9TtN39KWQCLcB/s1600/MTV.png)

Será utilizada a arquitetura de microserviços, que é um arquitetura de software onde uma grande aplicação é modularizada em serviços independentes. Cada serviço possui um escopo definido e pode se comunicar, entre eles, para realizar tarefas mais complexas.
Dessa forma cada serviço pode ser implementado e ajustado de forma independente sem comprometer a integridade do aplicativo.

Para o desenvolvimento do front-end, iremos utilizar o framework Angular 2, utilizando o TypeScript. O Angular 2 segue um modelo **MV***, onde não existe um modelo padrão, porém iremos utilizar uma abordagem muito parecida com o modelo **MVVM** (Model, View, ViewModel).

O modelo **MVVM** é representado por:

A **Model** encapsula a lógica de negócios e os dados. O Modelo nada mais é do que o Modelo de domínio de uma aplicação, ou seja, as classes de negócio que serão utilizadas em uma determinada aplicação. O Modelo também contém os papéis e também a validação dos dados de acordo com o negócio, cuja aplicação em questão visa atender.

A **View** é a que define a aparência ou estrutura que o usuário vê na tela. O ideal é que o codebehind da view, contenha apenas a chamada ao método InitializeComponent dentro do construtor, ou em alguns casos, código que manipule os controles visuais, ou crie animações. A View se liga ao ViewModel, através da propriedade DataContext que é setada para a classe ViewModel correspondente à aquela View.

A **ViewModel** é aquela que disponibiliza para a View uma lógica de apresentação. A View Model não tem nenhum conhecimento específico sobre a view, ou como ela implementada, nem o seu tipo, ela implementa propriedades e comandos, para que a View possa preencher seus controles e notificar a mesma, caso haja alteração de estado, seja através de eventos ou notificação de alteração. A ViewModel é peça fundamental no MVVM, por que é ela quem vai coordenar as iterações da View com o Model, haja vista, ambos não terem conhecimento um do outro.

Abaixo é apresentado uma imagem que representa o modelo MVVM:

![MVVM](http://www.devmedia.com.br/imagens/articles/233575/MVVMOverview.png)

O front-end se comunica com o back-end com requisições HTTP de maneira explícita e representativa, através de uma API REST. O front-end recebe um input do usuário e manda a requisição HTTP necessária para que o back-end a processe e retorne um resultado. Após isso , o resultado é tratado pelo front-end e exibido para o usuário.


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
