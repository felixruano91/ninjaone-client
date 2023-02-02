import { render } from '@testing-library/react';
import App from './App';
import { AppProvider } from "@/providers";
import { expect } from "vitest";

describe('App', () => {
  it('should render application', () => {
    const component = render(
      <AppProvider>
        <App />
      </AppProvider>
    );
    expect(component).toBeTruthy();
  });
});