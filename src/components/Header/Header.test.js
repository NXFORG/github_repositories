import { Header } from './index';
import { screen, render } from '@testing-library/react';

describe('Header', () => {
    beforeEach(() => {
        render(<Header />)
    })

    test('renders header', () => {
        let header = screen.getByRole('header');
        expect(header.textContent).toContain('GitHub Repo Tracker');
    })
})
