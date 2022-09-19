import { useMsal } from "@azure/msal-react";
import { SimpleAuthenticationProvider, Client, getGraphRestSDKClient, GraphRestSDKClient } from "@microsoft/microsoft-graph-client";
import { useCallback } from "react";

const useGraphClient = (scopes: string[]): GraphRestSDKClient => {
    const msal = useMsal();
    const provideClient =  useCallback(() => {
    const simpleAuthenticationProvider = new SimpleAuthenticationProvider(async () => {
        const token = await msal.instance.acquireTokenSilent({ scopes });
        return token.accessToken;
    });
    const client = Client.init({
        authProvider: simpleAuthenticationProvider,
    });

    return getGraphRestSDKClient(client);

    }, [msal.instance, scopes]);
    return provideClient();
};

export { useGraphClient };
