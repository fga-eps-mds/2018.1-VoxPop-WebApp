---
layout: default
title: Como Contribuir
category: Geral
---

# Como contribuir

Nós amamos sua contribuição! E assim, queremos tornar a contribuição a esse projeto o mais fácil e transparente possível, quer seja:

* Reportar bug
* Discutir sobre o estado atual do código
* Submeter correções
* Propor novas features
* Tornar-se um mantenedor

## Comandos para desenvolvimento

Nós possuímos Makefiles em ambos os repositórios automatizando todos os comandos necessários para o desenvolvedor. Para visualizar a lista de comandos, abra o terminal na raiz do projeto, e execute:

```
make help
```

Comandos da API:
```
Utilize: make <comando> [<argumentos>]

Comandos disponíveis:

Gerenciar docker
	docker-start	Inicia o serviço do docker
	docker-stop	Para o serviço do docker
	docker-enable	Faz docker iniciar automaticamente ao iniciar o sistema
	docker-disable	Faz docker não iniciar automaticamente ao iniciar o sistema

Gerenciar containers da aplicação:
	up		Efetua build da imagem, (re)cria e inicia todos os containers da aplicação
	build		Efetua (re)build da imagem da aplicação
	start		Inicia todos os containers da aplicação (já devem ter sido criados)
	stop		Interrompe todos os containers da aplicação
	remove		Remove todos os containers da aplicação
	status		Exibe o status dos containers da aplicação
	logs		Exibe os logs da aplicação
	bash		Abre um bash dentro do container da aplicação
	cmd		Executa um comando dentro do container da aplicação
			Exemplo: make cmd command="python3 manage.py shell"

Executar comandos do Django:
	startapp	Cria um novo app. Argumentos necessários: name
			Exemplo: make startapp name=auth
	makemigrations	Gerar migrations para o projeto
	migrate		Aplicar migrations ao banco
	test		Roda os testes da aplicação
	collectstatic	Coletar arquivos estáticos
```

Comandos do WebApp:
```
Utilize: make <comando> [<argumentos>]

Comandos disponíveis:

Gerenciar docker
	docker-start	Inicia o serviço do docker
	docker-stop	Para o serviço do docker
	docker-enable	Faz docker iniciar automaticamente ao iniciar o sistema
	docker-disable	Faz docker não iniciar automaticamente ao iniciar o sistema

Gerenciar containers da aplicação:
	up		Efetua build da imagem, (re)cria e inicia todos os containers da aplicação
	build		Efetua (re)build da imagem da aplicação
	start		Inicia todos os containers da aplicação (já devem ter sido criados)
	stop		Interrompe todos os containers da aplicação
	remove		Remove todos os containers da aplicação
	status		Exibe o status dos containers da aplicação
	logs		Exibe os logs da aplicação
	bash		Abre um bash dentro do container da aplicação
	cmd		Executa um comando dentro do container da aplicação
			Exemplo: make cmd command="npm start"
```

## Qualidade de código

Para garantir qualidade de código, nós utilizamos a análise estática Flake8. Para rodar a análise estática antes de enviar código para o respositório, execute:

```
flake8 --exclude='manage.py, voxpopapi/settings.py, migrations, templates, */models.py, */tests.py, */admin.py, provision, nginx, docs, setup.py' .
```

## **Pull Requests**

Nós usamos uma adaptação do [GitHub Flow](https://guides.github.com/introduction/flow/index.html), um processo leve, baseado em branches, que oferece suporte a equipes e projetos nos quais as implantações são feitas regularmente. Porém, o nosso uso desse processo se apoia em uma pequena adaptação, onde se adiciona uma branch `dev`, que serve como base para o código-fonte do nosso ambiente de homologação.

Como nos embasamos no GitHub Flow, todas as mudanças em nosso código ocorrem através de Pull Requests. Basicamente, nós trabalhamos desta maneira:

1. Criar uma branch a partir de `dev` (branch default)
2. Adicionar commits com mudanças
3. Abrir um Pull Request para `dev`
4. Discutir e revisar o código
5. Realizar deploy para ambiente de homologação (PR aceito)
6. Verificar ambiente de homologação
7. Abrir um Pull Request para `master`
8. Discutir e revisar o código
9. Realizar deploy para ambiente de produção (PR aceito)

Lembre-se de utilizar o nosso [template para Pull Requests](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/blob/master/docs/PULL_REQUEST_TEMPLATE.md):

```
# US%% - Nome da User Story
<!-- O que este pull request adiciona ao projeto? O que foi alterado?-->
## Descrição
Adciona ao projeto a funcionalidade %%; resolve o problema %%;

<!-- Onde encontro a documentação da issue?-->
<!-- Ex: [Test Issue](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/issues/1)-->
[US%% US Name](US issue link)

<!-- O que este pull request adiciona ao projeto? -->
## Status
<!-- Ex:
- [x] 21/04 Validação correta de senha.
- [x] 20/04 Remover do administrador e adicionar ao usuário .
- [ ] DD/MM Confirmar sucesso da operação.
- [x] 19/04 Exibir popup correta ao usuário.
-->
- [ ] Critério não alcançado.
- [x] Critério alcançado.

<!-- Fecha a issue caso tenha sido finalizada(todos os critérios de aceitação alcançados)-->
<!-- ATENÇÃO!!! Apague essa linha caso não tenha finalizado a issue-->
<!-- ATENÇÃO!!! Confira se o número da issue resolvida é o da ISSUE NO GITHUB -->
<!-- Ex: resolve #1  -->
resolve #Número_da_Issue
```

<!-- P.S.: Remember increase the version numbers in any required files and in the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](https://semver.org/). -->

## **Pedidos de features**

Se você deseja propor uma feature, por favor submita via issue. Tente explicar o seu caso de uso da forma mais completa possível para nos ajudar a entender o motivo pelo qual você acha que o recurso deve ser adicionado.

É importante ainda, utilizar o nosso [template para issues](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/blob/master/docs/ISSUE_TEMPLATE.md):

```
<!-- Escolha apenas UMA das opções abaixo -->
# US%% - Nome da User Story
# TS%% - Nome da Technical Story
# BF%% - Nome da Issue de Bug Fix

<!-- O que essa issue adiciona ao projeto? O que vai ser alterado?-->
### Descrição:
Eu como %% desejo %% para %%.

<!--- Descrição em linguagem natural do que deve acontecer -->
## Comportamento esperado

<!--- Descrição em linguagem natural do que está acontecendo -->
## Comportamento atual

<!-- Opcional, porém recomendado mesmo que seja superficial -->
<!--- Descrição em linguagem natural do que fazer para resolver a issue -->
## Possível solução
<!-- -->

<!--- Descrição em linguagem natural do que fazer para reproduzir essa ação ou erro -->
## Como reproduzir
<!--- Forneça informação extra com prints se necessário-->
1.
2.
3.
4.

<!-- O que é necesário para que a issue seja finalizada?-->
## Critérios de aceitação
<!-- Ex:
- [x] 21/04 Validação correta de senha.
- [x] 20/04 Remover do administrador e adicionar ao usuário .
- [ ] DD/MM Confirmar sucesso da operação.
- [x] 19/04 Exibir popup correta ao usuário.
-->
- [ ] Critério não alcançado.
- [x] Critério alcançado.
```

## **Reportar bug**

Um bug é um _problema demonstrável_ que é causado pelo código no repositório.
Bons relatórios de bugs são extremamente úteis - agradecemos desde já! :)

Diretrizes para reportar bugs:

1. **Use o mecanismo de buscas de issues do GitHub** &mdash; verifique se a issue já foi reportada.
2. **Verifique se a issue já foi resolvida** &mdash; tente reproduzir o ambiente utilizando a última versão da branch `master` do repositório.
2. **Isole o problema** &mdash; um bom relatório de bug não deve deixar os outros precisarem de você para obter mais informações. Por favor, tente ser o mais detalhado possível no seu relatório. Qual é o seu ambiente? Quais etapas irão reproduzir o problema? Quais navegadores e sistemas operacionais são atingidos pelo problema? O que você esperaria ser o resultado? Todos esses detalhes ajudarão as pessoas a corrigir possíveis bugs.

_P.S.: O mesmo [template para issues](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/blob/master/docs/ISSUE_TEMPLATE.md) citado na sessão referente a pedidos de features também é válido para reportar bugs._

## **Licença**

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a `GNU General Public License v3.0`.

[Voltar](./../)
