import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Config } from "sst/node/config";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            version: Config.VERSION,
        }),
    };
};
