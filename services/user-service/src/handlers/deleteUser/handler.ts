import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userId = event.pathParameters?.id;
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `User with ID: ${userId} deleted successfully. This is ${event.path} endpoint of user-service.`
    })
  };
};
