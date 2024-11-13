// src/services/kycService/completeKYC.ts
import { dynamoDb } from "../../config/awsConfig";

export const completeKYC = async (userId: string) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE_NAME!,
    Key: { id: userId },
    UpdateExpression: "set #status = :status, #updatedAt = :updatedAt",
    ExpressionAttributeNames: {
      "#status": "status",
      "#updatedAt": "updatedAt",
    },
    ExpressionAttributeValues: {
      ":status": "COMPLETED",
      ":updatedAt": new Date().toISOString(),
    },
    ReturnValues: "ALL_NEW",
  };
  const result = await dynamoDb.update(params).promise();
  return result.Attributes;
};
