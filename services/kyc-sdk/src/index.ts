// // src/index.ts in kyc-sdk
// import axios from "axios";

// const BASE_URL = process.env.KYC_SERVICE_URL || "http://localhost:4005/dev"; // Ensure this does not have an extra /dev

export const initiateKyc = async (userId: string) => {
  console.log("initiateKyc called", userId);

  // const response = await axios.post(`${BASE_URL}/kyc/initiate`, { userId }); // Remove extra /dev here
  // return response.data;
  return {
    status: "PENDING",
    userId
  };
};

export const checkKycStatus = async (userId: string) => {
  // const response = await axios.get(`${BASE_URL}/kyc/status/${userId}`);
  // return response.data;
  console.log("checkKycStatus called", userId);

  return {
    status: "REVIEW",
    userId
  };
};

export const completeKyc = async (userId: string) => {
  console.log("completeKyc called", userId);

  // const response = await axios.post(`${BASE_URL}/kyc/complete`, { userId });
  // return response.data;
  return {
    status: "APPROVED",
    userId
  };
};
