import './App.css';
import { IPublicClientApplication } from '@azure/msal-browser';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react'
import { SignInButton } from './SignInButton';
import { Groups } from './Groups';

type AppProps = {
  pca: IPublicClientApplication
};
function App({ pca }: AppProps) {
  return (
    <MsalProvider instance={pca}>
      <div className="App">
        <main className="App-main">
          <AuthenticatedTemplate>
            <p>Here are the groups</p>
            <Groups />
          </AuthenticatedTemplate>
          <UnauthenticatedTemplate>
            <p>You are not signed in! Please sign in.</p>
            <SignInButton />
          </UnauthenticatedTemplate>
        </main>
      </div>
    </MsalProvider>
  );
}

export default App;
