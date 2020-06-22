

docker run --network=lambda-local --name dynamo -p 8000:8000 amazon/dynamodb-local

>sam build

>sam local invoke GetFunction --docker-network lambda-local

