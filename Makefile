docker_status := $(shell systemctl is-active docker)
docker_enabled := $(shell systemctl is-enabled docker)
environment := "dev"

help:
	@echo "Utilize: make <comando> [<argumentos>]"
	@echo
	@echo "Comandos disponíveis:"
	@echo
	@echo "Gerenciar docker"
	@echo "	docker-start	Inicia o serviço do docker"
	@echo "	docker-stop	Para o serviço do docker"
	@echo "	docker-enable	Faz docker iniciar automaticamente ao iniciar o sistema"
	@echo "	docker-disable	Faz docker não iniciar automaticamente ao iniciar o sistema"
	@echo
	@echo "Gerenciar containers da aplicação:"
	@echo "	up		Efetua build da imagem, (re)cria e inicia todos os containers da aplicação"
	@echo "	build		Efetua (re)build da imagem da aplicação"
	@echo "	start		Inicia todos os containers da aplicação (já devem ter sido criados)"
	@echo "	stop		Interrompe todos os containers da aplicação"
	@echo "	remove		Remove todos os containers da aplicação"
	@echo "	status		Exibe o status dos containers da aplicação"
	@echo "	logs		Exibe os logs da aplicação"
	@echo "	bash		Abre um bash dentro do container da aplicação"
	@echo "	cmd		Executa um comando dentro do container da aplicação"
	@echo "			Exemplo: make cmd command=\"npm start\""

# Gerenciar docker

docker-start:
ifeq (${docker_status}, inactive)
	@sudo systemctl start docker
	@echo "VoxPop: Serviço do Docker iniciado com sucesso!"
else
	@echo "VoxPop: Serviço do Docker já está ativo!"
endif

docker-stop:
ifeq (${docker_status}, active)
	@sudo systemctl stop docker
	@echo "VoxPop: Serviço do Docker interrompido com sucesso!"
else
	@echo "VoxPop: Serviço do Docker já está inativo!"
endif

docker-enable:
ifeq (${docker_enabled}, disabled)
	@sudo systemctl enable docker
	@echo "VoxPop: Serviço do Docker agora iniciará junto com o sistema!"
else
	@echo "VoxPop: Serviço do Docker já inicia junto com o sistema!"
endif

docker-disable:
ifeq (${docker_enabled}, enabled)
	@sudo systemctl disable docker
	@echo "VoxPop: Serviço do Docker deixará de iniciar junto com o sistema!"
else
	@echo "VoxPop: Serviço do Docker já não inicia junto com o sistema!"
endif

# Gerenciar containers da aplicação

up:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml up -d --force-recreate
	@echo "VoxPop: Containers (re)criados e iniciados com sucesso!"
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

build:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml build
	@echo "VoxPop: (Re)build de imagem efetuado com sucesso!"
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

start:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml start
	@echo "VoxPop: Containers da aplicação iniciados com sucesso!"
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

stop:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml stop
	@echo "VoxPop: Containers da aplicação interrompidos com sucesso!"
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

remove:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml rm
	@echo "VoxPop: Containers da aplicação removidos com sucesso!"
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

status:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml ps
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

logs:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml logs -f
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

bash:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml exec webapp bash
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif

cmd:
ifeq (${docker_status}, active)
	@sudo docker-compose -f provision/dev/docker-compose.yml exec webapp ${command}
else
	@echo "VoxPop: Serviço do Docker está inativo!"
endif
