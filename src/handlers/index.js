
const aws = require('aws-sdk');
aws.config.update({ region: 'us-east-2' ,endpoint: 'http://192.168.99.100:8000' })
let dynamodb = new aws.DynamoDB.DocumentClient( );

exports.handler = async (event) => {
    // TODO implement
    
    const resbody = await  getItemFromDB();
    console.log(resbody);
    const response = {
        statusCode: 200,
        body: JSON.stringify(resbody)
    };
    return response;
};


 function getItemFromDB(  ) {
  const params = {
    TableName: "Orders",
    Key: {
     "OrderId":"1"
    }
  };
return dynamodb
    .get(params)
    .promise()
    .then(res => res.Item)
    .catch(err => err);
}