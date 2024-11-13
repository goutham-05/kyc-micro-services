// src/services/kycService/initiateKYC.ts
import { dynamoDb } from "../../config/awsConfig";
import { KYCRequest } from "../../models/kyc";

export const initiateKYC = async (data: KYCRequest) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME!,
    Item: {
      id: data.userId,
      status: "INITIATED",
      createdAt: new Date().toISOString(),
    },
  };
  await dynamoDb.put(params).promise();
  return { message: "KYC initiated", userId: data.userId };
};
