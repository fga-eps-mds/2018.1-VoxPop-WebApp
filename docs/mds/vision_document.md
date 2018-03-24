---
layout: default
title: Documento de Visão  (inglês)
category: MDS
---

### Revision History

| Date | Version | Description | Author |
|  :-: |   :-:  |    :-:    |  :-:  |
|03/14/2018| 0.1 | Document Creation| Filipe Toyoshima|
|03/16/2018| 0.1.1 | Sections 1.1, 1.2, 1.3, 1.4 e 1.5 of the Introduction added | Eduardo Lima, Lucas Vitor|
|03/17/2018| 0.1.2 | Sections 4.1, 4.2 of the Product Overview added | Rossicler Júnior|
|03/18/2018| 0.1.3 | Section 2.3 of Positioning added | Lucas Vitor |
|03/20/2018| 0.2 | Translated document | Eduardo Lima, Filipe Toyoshima, Lucas Vitor, Érico Bandeira, Rossicler Júnior |
|03/23/2018| 0.2.1 | Requested changes in [pull request](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/pull/3) | Filipe Toyoshima |
|03/23/2018| 0.2.2 | Corrected section 1.2 | Lucas Vitor |
|03/24/2018| 0.2.3 | Requested changes in pull request | Lucas Vitor |

# 1.	Introduction

## 1.1 Purpose:
The purpose of this document is to specify in general terms the characteristics of the VoxPop application.

## 1.2 Scope:
The project's main features are to stabilish a personal electoral ranking system by using a linked information database regarding brazillian politicians. The ranking is based on a service which compares the user's political tendencies with the most compatible politician by using a legislation project approval questionnaire.

## 1.3	Definitions, acronyms and abbreviations:

|Acronym|Definition|
|:-:|:-:|
| MDS |Software Development Methods |
| EPS |Software Product Engineering|

## 1.4	References:
IBM Knowledge Center - Vision Document
https://www.ibm.com/support/knowledgecenter/pt-br/SSWMEQ_3.0.1/com.ibm.rational.rrm.help.doc/topics/r_vision_doc.htm. Accessed in: 14th of march 2018
## 1.5	Overview:
This document describes the details about the VoxPop application, explaining it's main characteristics as well the problems that led to it's development.

This document explains how this proposal tackles the problem, to the market as well as the customer. And describes in details how the participation of all parties invlolved will occur. Furthermore, it provides an overview of the product, through the description of the requirements, restrictions and product resources.

# 2.	Posicioning
## 2.1	Business opportunity:
The Brazillian population would be benefited by being helped at potential candidates evaluation. Since 2018 is a electin year in Brazil, the demand for some tool to facilitate the elector choice will grow even more.

## 2.2	Problem Statement:
The low political representativeness is a problem that affects the whole Brazilian population. This is aggravated by the mandatory characteristic of the votes in Brazilian elections, which may lead citizens to vote for someone who does not really represent their political views. Furthermore, most parts of the electorate don't tend to keep up with their elected candidates' actions during their term of office.

As an addendum, most law projects in motion on the parliament are not widely spread through common media, such as TV, radio, and newspapers, which contributes to this cryptic view of the parliamentary flow.

## 2.3	Problem Positioning:
Aimed at the brazilian population, which has a considerably low political representation. VoxPop is a project that pursues better transparency and practicity in order to find politicians who are more compatible with the elector's opinions by tracking their votes on the Deputy Chamber's law projects and the Senate's corroboration on these matters.

As a method to assess the current situation of brazilian politics, our product compares the politician's decisions with the user's in order to shed light on the political compatibility between them.

# 3. Descrição dos Envolvidos e dos Usuários.

## 3.1 Market Demographics:

Brazil follows a political model of indirect democracy in which the population elects representants so that they take the decisions and actions that best represent the general will of the nation. However, there are few tools that provide the necessary information for each voter to consciously choose their representant. Even with the mandatory transparency of the personalities involved in politics, only the information is not sufficient, it is necessary to summarize them in an efficient and impartial manner. Depending on the media, whether formal or informal, is to be vulnerable to manipulated or skewed information.

## 3.2	Stakeholders Descriptions:

| Stakeholder | Description | Responsabilities |
|:-:|:-:|:-:|
| Development team | Students of the Software Development Methods course at the University of Brasília during the first semester of 2018 | Develop the product described in this document |
| Management Team | Students of the Software Product Engineering discipline at the University of Brasília during the first semester of 2018 | Management of the development team in a way that minimizes errors and impediments. Management of project progress. Create and support the development environment. |
| Professors | Professor of both disciplines mentioned above and invited professors | Follow-up of team evolution and rating the work is done |
| Coaches | Monitors od the abovementioned disciplines | Monitoring the progress of the project, basic orientation to the team. It also plays the role of customer, thus suggesting the necessary features of the product. |

## 3.3 User Description:

The user may be anyone who has the interest in the project features and has access to the internet. The purpose is to reach major part of the Brazillian population. This means people with a low education level and/or not so used to the web.

## 3.4 User Environment:

The proposal is a fast web application, able to work without major problems on devices with limited resources. It should contain intuitive options, which do not require a tutorial or guide for full use, which should happen by easy and obvious clicks.

The user must have in view all the most relevant options so that he can quickly enjoy the features that the product offers, without the need to read many texts.

## 3.5 Alternatives and Competition:

### 3.5.1 Brazilian Transparency

Brazil has regulations that make information about events about legislation always public and accessible by the people. Currently, anyone with internet availability can access this information by browsing the website of the [Federal Senate](https://www12.senado.leg.br/hpsenado).

Even with the information available a long time ago for most of the Brazilian population, it still does not feel representative of the professionals of the legislature. The population does not show interest in accessing the information in the way it is arranged.

### 3.5.2 Atlas Político

The Political Atlas ([Atlas Político](http://www.atlaspolitico.com.br/)) is a database that notices, maps the Congress by political guidelines (government vs. opposition and right vs. left) and ranks senators and deputies of according to indices of representativeness, campaign responsibility, legislative activism, partisan loyalty and parliamentary debate. In addition, the tool also has an intelligence system that monitors users in social media in order to generate data on and indicators on political developments and on electoral dynamics.

In spite of making use of a massive database, the application still does not provide in a practical and agile way the need for the voter to find a candidate who in fact represents his ideals.

### 3.5.3 Ranking dos Políticos

In the same idea of ranking politicians, the web application [Ranking dos Políticos](http://www.politicos.org.br/) makes use of data of Brazilian transparency to classify the quality of the work of deputies and senators. The tool also presents the user's ability to rate the parliamentarians of the user's preference.

Although the Ranking of Politicians organizes well the decisions that each parliamentarian has made about legislative projects, the classification of a vote is favorable or not so that the politician in question rises in the ranking is the decision of the administrators of the application, being a strong indicator of bias and impartiality in the ranking process.

# 4.    Product Overview

## 4.1  Product Perspective

Nowadays, Brazillian has a vast number of candidates for deputy, most of the time it is hard to find the deputy that support the projects that the voter care. With that in mind, we saw the need for a better transparancy, legitimacy and practicality to find and compare candidates. Furthermore, it will be possible to compare votes about the projects of the user with the deputy votes, then you can see if you have a similarity with the deputy that you voted and find the similarity with the others. The objective is to provide for the user a easy way to find and compare the similarity of the user decisions with those deputies about the projects of law that were voted on the Câmara dos Deputados.

## 4.2 Assumptions and Dependencies

**Minimal system requirements:**

* Device with a browser and acess to the internet
* Somes features need the user to login on the website

# 5.	Product features

The web application will provide the following features to users:
* Register and maintain a profile so that users can manage their registration information and personal preferences.
* Access to the list of all existing proposed legislations and all deputies.
* Access to information of each proposed legislation and each deputy.
* The user can choose the proposed legislation that they want to follow by making a list that can be changed when desired.
* Guide the user about their policy choices by giving constantly updated information on all proposed legislation and all deputies.
* Have access to socio-political statistics in real time.
* Track all updated proposed legislation and terms of office.
* Allow the user to rank his or her chosen deputies based on his or her favorite proposed legislations.
# 6.	Constraints
## 6.1 Open Source Licence
The Project must adhere to an Open Source Licence, following the comunity guidelines described [here](https://opensource.guide/).
## 6.2 Time and Scope
The project must be follow the [defined scope](#1.2-escopo) during a period of 17 weeks.

# 7.	Quality ranges
Define the quality ranges for performance, robustness, fault tolerance, usability, and similar characteristics that the feature set does not describe.

[Voltar](./../)
