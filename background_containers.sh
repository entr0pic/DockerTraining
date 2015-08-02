docker kill docker-cleanup
docker rm docker-cleanup
docker run -d  -v /var/run/docker.sock:/var/run/docker.sock:rw --restart=always --name docker-cleanup  meltwater/docker-cleanup:latest
docker kill rancher-server
docker rm rancher-server
docker run -d --restart=always -p 8080:8080 --name rancher-server rancher/server
