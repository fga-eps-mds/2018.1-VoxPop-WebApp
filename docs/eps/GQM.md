---
layout: default
title: Plano de Medição
category: EPS
---

# Introdução



## 1.1 Contexto

O VoxPop é uma aplicação criada no contexto das disciplinas Métodos de Desenvolvimento de Software (MDS) e Engenharia de Produto de Software (EPS) da Universidade de Brasília (UnB) - Faculdade do Gama (FGA), que visa criar uma classificação pessoal de deputados com base na compatibilidade dos usuários com os parlamentares.



## 1.2 Problema

Para melhorar e garantir qualidade em um determinado projeto de software é necessário primeiramente entender e definir os processos, produtos e recursos envolvidos neste projeto, sendo assim o Plano de Medição é de grande ajuda para definir os pontos positivos que devem ser mantidos e os pontos que podem melhorar e devem ser alterados no projeto. Considerando todos estes fatores a equipe de EPS precisa gerenciar a equipe de desenvolvimento e se ater aos prazos e requisitos da matéria além de manter o nível de qualidade.



## 1.3 Objetivo

Elaborar um Plano de Medição utilizando através da abordagem GQM de forma que permita à equipe de gerência do projeto ter controle sobre o nível de qualidade produto de software a ser gerado e garantir que o mesmo atenda aos padrões de qualidade do mercado, e atendendo às necessidades do público alvo.


# 2 Plano de medição - Conceitual
## 2.1 Código

|-----------------------|-------------------------------|
|Analisar				|o código						|
|para					|entender e garantir			|
|os pontos				|manutenabilidade e eficácia	|
|pelo ponto de vista	|de desenvolvedor				|
|sob o contexto			|do projeto VoxPop				|


## 2.2 Equipe

|-----------------------|-------------------------------|
|Analisar				|a equipe de desenvolvimento	|
|para					|entender e garantir			|
|os pontos				|produtividade e eficiência		|
|pelo ponto de vista	|da equipe gestão				|
|sob o contexto			|do projeto VoxPop				|

# 3 Plano de medição - Operacional

#### 3.1 Código
 - Quão manutenível é o código?
 - Quão fiel o código é às boas práticas de programação?
 - Qual o nível de garantia de eficácia do código?

#### 3.2 Equipe
 - Quão engajada é a equipe?
 - Quão produtiva é a equipe?

# 4 Plano de medição - Quantitativo

### 4.1 Quão manutenível é o código?
 - Erros do flake8 por arquivo.
 - Métodos com alto número de argumentos.
 - Arquivos com alto número de linhas.
 - Blocos de código idênticos.
 - Blocos de código semelhantes.
 - Classes com alto número de métodos.
 - Métodos com alto número de linhas.
 - Quantidade de estruturas de decisão muito aninhadas.

### 4.2 Quão fiel o código é às boas práticas de programação?
 - Erros do flake8 por arquivo.
 - Blocos de código idênticos.
 - Blocos de código semelhantes.
 - Métodos com alto número de linhas.
 - Métodos com vários 'return'.

### 4.3 Qual o nível de garantia de eficácia do código?
 - Cobertura de teste.

### 4.4 Quão engajada é a equipe?
 - Nível de conhecimento.
 - Horas trabalhadas por semana.
 - Entregas ao longo do tempo (Burndown chart).

### 4.5 Quão produtiva é a equipe?
 - Velocity.
 - Entregas ao longo do tempo (Burndown chart).


# Métricas

| **Métrica**           | **Erros do flake8 por arquivo** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a simplicidade na leitura do código|
| **Obtenção**             | A ferramenta de integração contínua executa o flake8 nos arquivos do projeto sempre que código é mandado ao reprositório|
| **Escala**              | Absoluta  |
| **Análise**             | Caso ocorra ao menos um erro deverá haver uma refatoração do código |

<br>

| **Métrica**           | **Métodos com alto número de argumentos** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a modularidade|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Arquivos com alto número de linhas** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a modularidade do código|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Blocos de código idênticos** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a simplicidade de leitura do código|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Blocos de código semelhantes** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a simplicidade de leitura do código|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Classes com alto número de métodos** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a visibilidade das classes|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Métodos com alto número de linhas** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a visibilidade dos métodos|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Quantidade de estruturas de decisão muito aninhadas** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a simplicidade de leitura do código|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Métodos com vários 'return'** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a simplicidade de leitura do código|
| **Obtenção**             | O code climate gera alertas para cada ocorrência|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso ocorra ao menos uma issue deverá haver uma refatoração do código|

<br>

| **Métrica**           | **Velocity** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir a entrega das atividades pela equipe|
| **Obtenção**             | A quantidade de pontos queimados divididos pela quantidade de sprints corridas|
| **Escala**              | Racional  |
| **Análise**             | Caso o velocity esteja mais baixo que a quantidade total de pontos do product backlog dividido pela quantidade de sprints disponíveis é sinal de que o velocity não está alto o suficiente e deve haver um replanejamento com a equipe |

<br>

| **Métrica**           | **Nível de conhecimento** |
|---------------------|---------- |
| **Objetivo de Medição** | Garantir que todos os membros estajam nivelados e evoluíndo|
| **Obtenção**             | Os membros da equipe devem fornecer através de uma planilha no drive|
| **Escala**              | Ordinal  |
| **Análise**             |  Caso os membros estejam desbalanceado é necessário rever os pareamentos e rotações de funções, e caso os membros não evoluam é necessáio alertar esse membro e fornecer os insumos para que ele mude este quadro|

<br>

| **Métrica**           | **Horas trabalhadas por semana** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir que a equipe está cumprindo com com a quantidade de horas semanais que se comprometeram|
| **Obtenção**             | As horas são obtidas através do aplicativo toptracker|
| **Escala**              | Absoluta  |
| **Análise**             |  Caso as horas de algum membre estajem muito altas é necessário redividir o trabalho, e caso estejam muito baixas é necessáio alertar esse membro para que mude sua conduta|

<br>

| **Métrica**           | **Entregas ao longo do tempo** |
|---------------------|----------|
| **Objetivo de Medição** | Garantir que as entregas do projeto sejam contínuas.  |
| **Obtenção**             | O Burndown é gerado pelo zenhub|
| **Escala**              | Racional        |
| **Análise**              | Quando a equipe executa tarefas rápido de mais é necessário um replanejamento da sprint, e caso a equipe não queime todos os pontos é necessária uma revisão da pontuação e replanejamento com a equipe|


[Voltar](./../)
