// src/utils/validateInput.ts
import { KYCRequest } from "../models/kyc";

export const validateKYCRequest = (data: KYCRequest) => {
  if (!data.userId) {
    throw new Error("userId is required");
  }
};
