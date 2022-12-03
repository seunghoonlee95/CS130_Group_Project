import React from "react";
import { render,getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import Home from '../../pages/Home';
import {createMemoryHistory} from 'history';    //ref: https://bobbyhadz.com/blog/react-cannot-read-property-pathname-of-undefined#:~:text=The%20error%20%22Cannot%20read%20properties,Link%20component%20in%20React%20router.
                                                //ref: https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
                                                //ref: https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library

test('renders the home page', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Home />
        </Router>
    );
    expect(getByTestId(document.documentElement, 'home-navbar'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'home-banner'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'home-services'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'home-trust'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'home-loginsignup'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'home-footer'),).toBeInTheDocument();

  });