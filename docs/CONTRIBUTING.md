# Como contribuir

Nós amamos sua contribuição! E assim, queremos tornar a contribuição a esse projeto o mais fácil e transparente possível, quer seja:

* Reportar bug
* Discutir sobre o estado atual do código
* Submeter correções
* Propor novas features
* Tornar-se um mantenedor

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

Lembre-se de utilizar o nosso [template para Pull Requests](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/blob/master/docs/PULL_REQUEST_TEMPLATE.md).

<!-- P.S.: Remember increase the version numbers in any required files and in the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](https://semver.org/). -->

## **Pedidos de features**

Se você deseja propor uma feature, por favor submita via issue. Tente explicar o seu caso de uso da forma mais completa possível para nos ajudar a entender o motivo pelo qual você acha que o recurso deve ser adicionado.

É importante ainda, utilizar o nosso [template para issues](https://github.com/fga-gpp-mds/2018.1-VoxPop-WebApp/blob/master/docs/ISSUE_TEMPLATE.md).

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
