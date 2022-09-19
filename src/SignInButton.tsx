import { useMsal } from "@azure/msal-react";
import config from "./Config";
import { IPublicClientApplication } from "@azure/msal-browser";

function handleLogin(instance: IPublicClientApplication) {
    instance.loginPopup({ scopes: config.scopes}).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <button onClick={() => handleLogin(instance)}>Sign in using Popup</button>
    );
}