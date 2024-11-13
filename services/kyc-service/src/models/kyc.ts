// src/models/kyc.ts
export interface KYCRequest {
  userId: string;
  additionalData?: string;
}

export interface KYCStatus {
  userId: string;
  status: "INITIATED" | "COMPLETED" | "FAILED";
  createdAt: string;
  updatedAt?: string;
}
