
import { S3Client } from "@aws-sdk/client-s3";

export const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME!;


// export function handleS3Error(error: unknown): Error {
//   console.error("S3 error:", error);
  
//   if (error instanceof Error) {
//     return error;
//   }
  
//   return new Error("Unknown S3 error occurred");
// }
