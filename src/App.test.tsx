import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { msalInstance } from './msal-instance';


test('renders anonymous template', async () => {
  render(<App pca={msalInstance} />)
  await waitFor(() => {
    const linkElement = screen.getByText(/You are not signed in! Please sign in/i);
    expect(linkElement).toBeInTheDocument();
  });
});
