import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { SQS, SNS } from 'aws-sdk';

const sqs = new SQS();
const sns = new SNS();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = JSON.parse(event.body || '{}');

  const sqsParams = {
    QueueUrl: process.env.SQS_QUEUE_URL!,
    MessageBody: JSON.stringify(body)
  };

  const snsParams = {
    TopicArn: process.env.SNS_TOPIC_ARN!,
    Message: JSON.stringify(body)
  };

  try {
    const sqsData = await sqs.sendMessage(sqsParams).promise();
    const snsData = await sns.publish(snsParams).promise();
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: `User created successfully ${event.body}. This is ${event.path} endpoint of user-service.`,
        sqsData,
        snsData
      })
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Failed to create order',
        error: error.message
      })
    };
  }
};
