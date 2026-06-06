import { render } from '@testing-library/react';
import Home from '../app/page';

describe('Home page smoke test', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });
});
