# Docker Training Exercise

## Pre-requisites 

```
# Install Homebrew if you don't already have it
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
#Install the below packages (or at least the ones you don't already have)
brew install node
brew install docker
brew cask install docker-machine
sudo pip install pyopenssl ndg-httpsclient pyasn1 docker-compose


#Create a new docker host VM
#Use either virtualbox
docker-machine create --driver virtualbox --virtualbox-cpu-count 4 --virtualbox-memory "2048"  --virtualbox-disk-size "5000" dev-host
eval "$(docker-machine env dev-host)"

#Or Fusion if you have it installed
docker-machine create --driver vmwarefusion --vmwarefusion-boot2docker-url "https://github.com/boot2docker/boot2docker/releases/download/v1.7.1/boot2docker.iso" --vmwarefusion-cpu-count "4" --vmwarefusion-memory-size "2048"  --vmwarefusion-disk-size "5000" fusion-dev
eval "$(docker-machine env fusion-dev)"
```