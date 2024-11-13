import AWS from "aws-sdk";

// Configure AWS SDK
const options = {
  region: process.env.AWS_REGION || "us-east-1",
  endpoint:
    process.env.IS_OFFLINE === "true" ? "http://localhost:4006" : undefined // Use local endpoint if offline
};

export const dynamoDb = new AWS.DynamoDB.DocumentClient(options);
export const sns = new AWS.SNS(options);
