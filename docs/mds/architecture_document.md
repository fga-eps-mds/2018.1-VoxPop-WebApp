# Documento de Arquitetura

**Versão 1.0**

### Revision History
| Data | Versão | Descrição | Autor |
|  :-: |   :-:  |    :-:    |  :-:  |
|19/03/2018| 0.1 | Criação do Documento| Filipe Toyoshima|
|24/03/2018| 0.1 | Tradução para Português| Samuel Borges|

# Introdução

Nesse documento são apresentados os principais detalhes da arquitetura proposta para o projeto. Isso tem como objetivo cobrir os aspectos técnicos mais importantes do desenvolvimento e implementação do sistema. A principal função disso é formalizar as decisões estruturais sobre o stack de desenvolvimento, implantação, e teste do projeto.

## Referências

|**ID**|**Nome**|**Data**|**Disponível em**|
| :---: | --- | --- | --- |



# Representação da Arquitetura

O padrão arquitetural utilizado no desenvolvimento do sistema SAAP será o MVC (Model-View-Controller). Esse padrão de arquitetura divide a aplicação em camadas: Controladores (Controller) que tratam o fluxo da aplicação, a camada Modelo (Model) que provê as principais funcionalidades do sistema e a camada Visão (View) que mostra ao usuário as informações. O objetivo é separar dados ou lógica de negócios (Model) da interface do usuário (View) e do fluxo da aplicação (Controller).


![MVC](http://i.imgur.com/bggVjec.png)


Na utilização do Django, framework web de alto nível escrito em Python, o padrão arquitetural MVC será respeitado, porém o nome dado às camadas sofrem modestas alterações. A camada de Controle chama-se View, a camada de Visão chama-se Template e a camada de Modelo chama-se Model. A interação entre as camadas permanece a mesma, apesar da mudança nominal.  


![MVC-Django](https://2.bp.blogspot.com/-Q0ERCQLUfdU/V8r7RUQLryI/AAAAAAAABaE/oaQo_TmYfW4sYHjEx2P-WCrnZNOcm_wEwCLcB/s640/DjangoGeneral.png)


#Metas e Restrições de Arquitetura

A aplicação do padrão de arquitetura para esse projeto possui algumas metas e restrições:

* Modularidade: O sistema deve seguir a arquitetura em camadas MVC (model, view, controller), em que um módulo define bem uma interação interna.
* Manutenibilidade: a estrutura arquitetural em módulos facilita a manutenção do software e define as interfaces de interação entre elas.
* Reusabilidade: a estrutura deve permitir a economia e o reuso de código, favorecendo a qualidade do software.
* O framework utilizado será o django 1.10, compatível com a linguagem python3.
* A base de dados relacionais do sistema será o PostgreSQL.
* Será utilizada uma API (Interface de programação de aplicação), tendo como meta um software final RESTful.

# Visão de Casos de Uso

**Atores**

Os atores do sistema estão representados na figura abaixo. A seguir, haverá a descrição das ações de cada um.

![imagemAtores](http://i.imgur.com/HQ5TtTc.png)

* Administrador do Sistema:

O administrador do sistema é o responsável por criar, exibir, atualizar e deletar um gabinete dentro do sistema. Além disso, ele designa qual usuário será o administrador do gabinete criado.

* Administrador do gabinete:

O administrador do gabinete pode criar e enviar boletins eletrônicos ou documentos; pode também gerenciar e responder tickets que são recebidos do ator Cidadão. Além disso, poderá importar e exportar os dados do gabinete. Designa organizador de contato e agenda.

* Organizador de Contato

Gerencia e cadastra todos os contatos do seu respectivo gabinete.

* Organizador de Agenda

Gerencia e cadastra todos os eventos e tarefas do seu respectivo gabinete.

* Cidadão

Responsável por criar, visualizar, editar e deletar seu próprio cadastro. Pode enviar um ou mais tickets a um administrador de gabinete.

# Visão Lógica

## Visão Geral

A aplicação do modelo de arquitetura MVC, no caso MVT em Django, obedece a organização do framework Python/django organizada em pacotes.

![VL](http://i.imgur.com/vUfAbhp.png)


#Visão de Implementação

O diagrama abaixo descreve o modo como o sistema será implementado:

![VI](http://i.imgur.com/naHkKZj.jpg)
