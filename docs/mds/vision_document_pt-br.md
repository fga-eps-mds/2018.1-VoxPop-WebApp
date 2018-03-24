---
layout: default
title: Documento de Visão
category: MDS
---

### Revision History

| Data | Versão | Descrição | Autor |
|  :-: |   :-:  |    :-:    |  :-:  |
|14/03/2018| 0.1 | Criação do Documento| Filipe Toyoshima|
|16/03/2018| 0.1.1 | Inseridas seções 1.1, 1.2, 1.3, 1.4 e 1.5 da Introdução | Eduardo Lima, Lucas Vitor|
|17/03/2018| 0.1.2 | Inseridas seções 4.1, 4.2 da Visão Geral do Produto | Rossicler Júnior|
|03/18/2018| 0.1.3 | Seção 2.3 de Posicionamento adicionada | Lucas Vitor |
|03/23/2018| 0.2.1 | Mudanças pedidas em [pull request](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/pull/3) | Filipe Toyoshima |
|03/23/2018| 0.2.2 | Corrigida section 1.2 | Lucas Vitor |
|03/23/2018| 0.2.2.1 | Criada versão em português | Filipe Toyoshima |
|03/24/2018| 0.2.3 | Mudanças pedidas em pull request | Lucas Vitor |

# 1.	Introdução

## 1.1 Objetivo:
O objetivo desse documento é especificar em termos gerais as características da aplicação VoxPop.

## 1.2 Escopo:

A principal feature do projeto é estabilizar um sistem de raking eleitoral personalizado usando uma base de dados informacional sobre os políticos brasileiros. O ranking em é baseado em um serviço que compara as tendências políticas do usuário com o político mais compatível usando um questionário acerca de aprovações de projetos de lei.

## 1.3 Acrônimos:

|Acronym|Definition|
|:-:|:-:|
| MDS | Métodos de Desenvolvimento de Software |
| EPS | Engenharia de Produto de Software |

## 1.4 Referências:
IBM Knowledge Center - Vision Document
https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_3.0.1/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.htm. Acessado em: 14 de Março de 2018
## 1.5 Visão Geral:

Esse documento descreve os detalhes sobre a aplicação VoxPop, explicando suas principais características tais como os problemas que levaram ao seu desenvolvimento.

Explica, também, como esta proposta ataca o problema, tanto no âmbito de mercado como também para o cliente. Descreve, em detalhes, como a participação de todas as partes envolvidas irá ocorrer. Além disso, irá prover um visão geral do produto acerca de requerimentos, restrições e recursos.

# 2.	Posicionamento:
## 2.1 Oportunidade de Negócio:

A população brasileira seria beneficiada através de um auxílio na avaliação de candidatos em potencial. Já que 2018 é um alno eleitoral no Brasil, a demanda por alguma ferramenta que facilite a escolha do eleitor erá crescer ainda mais.

## 2.2 Descrição do Problema:

A baixa representatividade política é um problema que afeta a maior parte da população brasileira. Isso é agravado pela caracterísica de vodo obrigatório, que pode levar cidadãos a votar por alguém que não represente suas visões políticas. Além disso, a maior parte dos eleitores não acompanha as ações dos candidatos eleitos durante seus mandatos.

Em adendo, a maior parte dos projetos de lei em andamento no parlamento não é amplamente difundinda através da mídia mais comum, como TV, radio e jornais, o que contribui para esta visão enigmática do fluxo parlamentar.

## 2.3 Sentença de Posição do Problema:

Visando a população brasileita, cuja representatividade política é consideravelmente baixa, VoxPop é um projeto que busca melhor transparência e particidade a fim de encontrar políticos mais compatíveis com as opniões dos eleitores rastreando seus votos en projetos de lei na Câmara dos Deputados e no Senado.

Como um método para avaliar a situação atual dos políticos brasileiros, o produto compara as decisões dos políticos com as decisões dos usuários a fim de clarear a compatibilidade política entre os mesmos.

# 3. Descrição dos Envolvidos e dos Usuários.

## 3.1 Mercado de Trabalho:

O Brasil segue um modelo político de democracia indireta no qual a população elege representantes para que estes tomem as decisões que melhor representem a vontade geral da nação. Contudo, há poucas ferramentas que providem a informação necessária para que os eleitores escolham seus representantes de maneira consciente. Mesmo com a transparência obrigatória das personalidades involvidas em políticas, apenas a informação não é suficiente, é necessáiro sumarizá-las de uma maneira eficiente e imparcial. Depender da mídia, seja formal ou informal, é estar à mercê de informações manipuladas e enviesadas.

## 3.2 Descrição dos Stakeholders:

| Stakeholder | Descrição | Responsabilidades |
|:-:|:-:|:-:|
|Equipe de Desenvolvimento|Estudantes da disciplina de Médodos de Desenvolvimento de Software da Universidade de Brasília do primeiro semestre de 2018|Desenvolver o produto descrito nesse documento|
|Equipe de Gestão|Estudantes da disciplina de Engenharia de Produto de Software da Universidade de Brasília do primeiro semestre de 2018|Gestão da equipe de desenvolvimento, de maneira a minimizar os erros e impecilhos. Gestão do andamento do projeto. Desenvolvimento do ambiente de desenvolvimento.|
|Professores|Professora de ambas as disciplinas citadas acima e professores convidados|Acompanhamento da evolução do time e avaliação do trabalho|
|Coaches|Monitores das discplinas supracitadas|Monitoramento do andamento do projeto, orientação básica para o time. Faz também o papel de cliente, sugerindo assim os recursos necessários do produto.|

## 3.3 Descrição do Usuário:

O usuário pode ser qualquer um que esteja interessado nas funcionalidades do produto e tenha acesso à internet. A proposta é alcançar a maior parte da população brasileira. Isso significa pessoas com um baixo nível educacional e/ou que não estão habituadas com a web.

## 3.4 Ambiente do Usuário:

É proposta é uma aplicação web leve, que possa funcionar sem grandes problemas em máquinas com recursos limitados. Deve conter opções intuitiva, que não necessitem de um tutorial ou guia para o pleno uso, que deve acontecer através de cliques fáceis e óbvios.

O usuário deve ter à vista todas as opções mais relevantes para que ele possa rapidamente fazer uso das funcionalidades que o produto oferece, sem a necessidade de muita leitura.

## 3.5	Alternativas e Competição:

### 3.5.1 Transparência brasileira
O Brasil conta com regulamentos que fazem com que as informações sobre eventos acerca da legislação sejam sempre públicos e acessíveis pelo povo. Atualmente, qualquer pessoa com disponilidade de internet consegue acessar essas informações navegando pelo site do [Senado Federal](https://www12.senado.leg.br/hpsenado).

Mesmo com as informações disponíveis há muito para a maior parte da população brasileira, ainda não se sente representatividade nos profissionais do legislativo. A população não demonstra interesse em acessar as informações da maneira em que são dispostas.

### 3.5.2 Atlas Político

O [Atlas Político](http://www.atlaspolitico.com.br/) se trata de uma base de dados que noticia, mapeia o congresso por diretrizes políticas (governo vs oposição e direita vs esquerda) e ranqueia senadores e deputados de acordo com índices de representatividade, responsabilidade de campanhas, ativismo legislativo, fidelidade partidária e debate parlamentar. Além disso, a ferramenta conta também com um sistema de inteligência que monitora usuários em mídias sociais a fim de gerar dados sobre e indicadores sobre evoluções políticas e sobre dinâmica eleitoral.

Apesar de fazer uso de uma massiva base de dados, a aplicação ainda não supre de maneira prática e ágil a necessidade de o eleitor encontrar um canditado que de fato represente seus ideais.

### 3.5.3 Ranking dos Políticos
Na mesma ideia de ranquear políticos, o [Ranking dos Políticos](http://www.politicos.org.br/) faz uso de dados da transparência brasileira para classificar a qualidade do trabalho de deputados e senadores. A ferramente apresenta também o recurso de o usuário avaliar os parlamentares de sua preferência.

Voltando a ideia de uma ferramenta imparcial e organizada, embora o Ranking dos Políticos organize bem as decisões que cada parlamentar tomou acerca de projetos legislativos, a classificação de um voto ser favorável ou não para que o político em questão suba no ranking é decisão dos administradores da ferramenta, sendo um forte indicador de viés e impacialidade no proesso de ranqueamento.

# 4.	Visão Geral do Produto

## 4.1 Perspectiva do Produto
Atualmente há um grande número de candidatos para deputados, onde muitas vezes é difícil encontrar o parlamentar que apoia aqueles projetos que o eleitor valoriza, vendo então uma necessidade de uma maior transparência, legitimidade e praticidade de encontrar e comparar esses candidatos. Além de comparar se os votos sobre os projetos de lei do usuário tem uma similaridade com o do deputado ao qual o usuário votou. Tendo então um objetivo de fornecer aos usuários uma simples forma de encontrar e comparar os candidatos com a maior semelhança de decisões a partir de projetos de lei que foram a voto na Câmara dos Deputados.

## 4.2 Suposições e Dependências

**Requisitos mínimos do sistema:**

* Dispositivo com acesso a um browser e acesso à internet
* Certas partes do sistema requer um cadastro no sistema

# 5.	Product features

A aplicação web fornecerá as seguintes funcionalidades aos usuários:
* Cadastrar e manter um perfil, de forma que os usuários possam gerenciar suas informações de cadastro e preferências pessoais.
* Acesso a lista de todas as propostas de lei existentes e de todos os deputados.
* Acessar as informações de cada proposta de lei e de cada deputado.
* O usuário pode escolher propostas de lei que quer acompanhar, fazendo uma lista que pode ser alterada quando desejada.
* Guiar o usuário sobre suas escolhas políticas, dando informações atualizadas sobre diversas propostas de lei e de vários políticos.
* Ter acesso a estatísticas do ramo sócio-político em tempo real.
* Acompanhar todas as atualizações de projetos de leis e mandatos.
* Permitir que o usuário faça um _ranking_ de seus políticos baseado nas propostas de lei.

# 6.	Constraints
## 6.1 Licença Open Source
O projeto deve aderir a uma licença Open Source, seguindo as guidelines da comunidade, descritas [aqui](https://opensource.guide/).

## 6.2 Escopo e Tempo
O projeto deve seguir no período de 17 semanas o [escopo definido](#1.2-escopo).

[Voltar](./../)
