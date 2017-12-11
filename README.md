# **alerts microservice**
this service is listening to a queue of alerts, the queue is managed via AMQ,
if ther an alert for one of the stocks in the portfolioit will be shown in the browser screen.

# **Run the App**:
docker run -d --hostname <my-server> --name ocp-rabbitmq -p 8090:5672 docker-base.artifactory.restest.bank/rabbitmq:3.6.10
