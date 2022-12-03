import React from "react";
import { render,getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import AboutUs from '../../pages/AboutUs';
import {createMemoryHistory} from 'history';    //ref: https://bobbyhadz.com/blog/react-cannot-read-property-pathname-of-undefined#:~:text=The%20error%20%22Cannot%20read%20properties,Link%20component%20in%20React%20router.
                                                //ref: https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
                                                //ref: https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library

test('renders the aboutus page', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <AboutUs />
        </Router>
    );
    expect(getByTestId(document.documentElement, 'aboutus-navbar'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'aboutus-container'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'aboutus-footer'),).toBeInTheDocument();
  });