# Docker Training Exercise

## What is Docker

Docker is currently leading the charge in containers. Want to know more check with Docker themselves: [https://www.docker.com/whatisdocker](https://www.docker.com/whatisdocker)

## Docker toolsets

[Docker Engine](https://www.docker.com/docker-engine) is the the core of docker, providing the runtime for building and running containers. It provides a REST API as well as a CLI.

[Docker Machine](https://www.docker.com/docker-machine) is a tool to create docker hosts and inject the docker engine into them. It works with almost all major cloud providers (AWS, Google, Azure, DigitalOcean and many more) and can create host docker VM's on your local machine too.

[Docker Compose](https://www.docker.com/docker-compose) creates a layer of abstraction above the docker API to create and manager multi container applications with additional tools for scaling.

[Docker Swarm](https://www.docker.com/docker-swarm) can create scale out docker hosts while allowing you to interact with the docker engine API as if it was a single host.

[Docker Registry](https://www.docker.com/docker-registry) is basically like git for docker contianers. It stores images (the base of a contianer before it's instantiated) in a central repository.

## What we'll be looking at

We'll be going through an example of how we can use docker to build a simple scalable web application.

We'll use:
  - docker engine
  - docker machine
  - docker compose

## Pre-requisites 
Install Homebrew if you don't already have it
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Install the below packages (or at least the ones you don't already have)
```
brew install git
brew install node
brew install docker
brew cask install docker-machine
sudo pip install pyopenssl ndg-httpsclient pyasn1 docker-compose
```

# Setup a Docker Host

##Create a new docker host VM
Use either virtualbox:
```
docker-machine create --driver virtualbox --virtualbox-cpu-count 4 --virtualbox-memory "2048"  --virtualbox-disk-size "5000" dev-host
eval "$(docker-machine env dev-host)"
```
Or VMWare Fusion if you have it installed:
```
docker-machine create --driver vmwarefusion --vmwarefusion-cpu-count "4" --vmwarefusion-memory-size "2048"  --vmwarefusion-disk-size "5000" fusion-docker
eval "$(docker-machine env fusion-docker)"

```
You can access the machines directly via IP (```docker-machine ip dev-host```) or add a host to your hosts file:

```
echo `docker-machine ip dev-host` dev-host >> /etc/hosts
```

# Instructions

Pull this repo locally
```
git clone http://git.servian.com/adam.parker/dockertraining.git DockerTraining
```
Check that docker is running

```
docker ps
# Should return
CONTAINER ID        IMAGE                             COMMAND                CREATED             STATUS              PORTS                              NAMES
```

Now lets take a look at the [docker-compose.yml](dockertraining/blob/master/docker-compose.yml) file
