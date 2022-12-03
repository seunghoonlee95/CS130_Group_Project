import React from "react";
// import renderer from 'react-test-renderer';
import { render,getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {createMemoryHistory} from 'history';    //ref: https://bobbyhadz.com/blog/react-cannot-read-property-pathname-of-undefined#:~:text=The%20error%20%22Cannot%20read%20properties,Link%20component%20in%20React%20router.
                                                //ref: https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
                                                //ref: https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library

test('renders the navbar', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Navbar />
        </Router>
    );
    // expect(screen.getByText(/you are home/i)).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'navbar-logo'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'navbar-aboutus-navlink'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'navbar-loginsignup-navlink'),).toBeInTheDocument();
    // TODO the following tests fails when not logged in
    // expect(getByTestId(document.documentElement, 'navbar-createnewtask-navlink'),).toBeInTheDocument();
    // expect(getByTestId(document.documentElement, 'navbar-logout-navlink'),).toBeInTheDocument();
    // expect(getByTestId(document.documentElement, 'navbar-profile-navlink'),).toBeInTheDocument();
  });