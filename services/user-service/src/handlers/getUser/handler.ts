import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId = event.pathParameters?.id;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Get user with ID: ${userId}. This is ${event.path} from user-service. This is awesome. This is working.`,
      success: true
    })
  };
};
