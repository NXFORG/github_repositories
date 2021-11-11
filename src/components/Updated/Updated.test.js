import { Updated } from './index';
import { screen, render } from '@testing-library/react';

describe('display date', () => {
    let date;

    beforeEach(() => {
        date = "2021-03-09T12:28:48Z";
        render(<Updated date={date}/>);
    })

    test('renders date', () => {
        let newDate = screen.getByText(/Updated/g);
        expect(newDate.textContent).toContain('ago');
    })
})
