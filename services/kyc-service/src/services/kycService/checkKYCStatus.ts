// src/services/kycService/checkKYCStatus.ts
import { dynamoDb } from "../../config/awsConfig";

export const checkKYCStatus = async (userId: string) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME!,
    Key: { id: userId },
  };
  const result = await dynamoDb.get(params).promise();
  return result.Item || { message: "User not found" };
};
