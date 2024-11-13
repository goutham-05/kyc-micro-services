import { sns } from "../../config/awsConfig";

export const sendNotification = async (message: string) => {
  const params = {
    Message: message,
    TopicArn: process.env.SNS_TOPIC_ARN
  };

  try {
    await sns.publish(params).promise();
    return { message: "Notification sent" };
  } catch (error) {
    console.error("Error sending notification:", error);
    throw new Error("Failed to send notification");
  }
};
