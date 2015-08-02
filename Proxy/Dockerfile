FROM base

# Install Haproxy.
RUN apk add --update haproxy
#
#RUN  sed -i 's/^ENABLED=.*/ENABLED=1/' /etc/default/haproxy
#
## Add files.
ADD haproxy/haproxy.cfg /etc/haproxy/haproxy.cfg
ADD start.sh /haproxy-start


# Define mountable directories.
VOLUME ["/haproxy-override"]

# Define working directory.
WORKDIR /etc/haproxy

# Define default command.
CMD ["sh", "/haproxy-start"]
