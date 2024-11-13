// src/handlers/kycHandlers.ts
import { APIGatewayProxyHandler } from "aws-lambda";
import { checkKYCStatus } from "../services/kycService/checkKYCStatus";
import { completeKYC } from "../services/kycService/completeKYC";
import { initiateKYC } from "../services/kycService/initiateKYC";
import { sendNotification } from "../services/notificationService/sendNotification";
import { formatResponse } from "../utils/formatResponse";

export const initiateKYCHandler: APIGatewayProxyHandler = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const result = await initiateKYC(data);
  await sendNotification(`KYC initiated for user ID: ${data.userId}`);
  return formatResponse(200, result);
};

export const checkKYCStatusHandler: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters || {};
  const result = await checkKYCStatus(id || "");
  return formatResponse(200, result);
};

export const completeKYCHandler: APIGatewayProxyHandler = async (event) => {
  const data = JSON.parse(event.body || "{}");
  const result = await completeKYC(data.userId);
  await sendNotification(`KYC completed for user ID: ${data.userId}`);
  return formatResponse(200, result);
};
