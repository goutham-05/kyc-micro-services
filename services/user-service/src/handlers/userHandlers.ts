// user-service/src/userHandlers.ts
import "dotenv/config";
import { initiateKyc, checkKycStatus, completeKyc } from "@goutham-05/kyc-sdk";

export const handleKycProcess = async (event: any) => {
  // Correctly extract userId from the path parameters
  const userId = event.pathParameters?.userId;

  try {
    // Initiate KYC
    const initiationResponse = await initiateKyc(userId);
    console.log("KYC Initiated FROM user service:", initiationResponse);

    // Check KYC status
    const statusResponse = await checkKycStatus(userId);
    console.log("KYC Status FROM status service:", statusResponse);

    // Complete KYC
    const completionResponse = await completeKyc(userId);
    console.log("KYC Completed:", completionResponse);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "KYC process completed successfully",
        initiationResponse,
        statusResponse,
        completionResponse
      })
    };
  } catch (error) {
    console.error("Error in KYC process:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error in KYC process" })
    };
  }
};
