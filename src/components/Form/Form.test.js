import { Form } from './index';
import { screen, render } from '@testing-library/react';

describe('display form', () => {
    beforeEach(() => {
        render(<Form />);
    })

    test('renders form',() => {
        let label = screen.getByText('Enter your GitHub username:');
        expect(label).toBeTruthy();

        let nameField = screen.getByRole('textbox');
        expect(nameField).toBeTruthy();

        let button = screen.getByText('Get repos');
        expect(button).toBeTruthy();
    })
})