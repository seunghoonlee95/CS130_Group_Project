import React from "react";
// import renderer from 'react-test-renderer';
import { render,getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import {createMemoryHistory} from 'history';    //ref: https://bobbyhadz.com/blog/react-cannot-read-property-pathname-of-undefined#:~:text=The%20error%20%22Cannot%20read%20properties,Link%20component%20in%20React%20router.

test('renders the navbar', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Navbar />
        </Router>
    );
    // expect(screen.getByText(/you are home/i)).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'navbar-logo'),).toBeInTheDocument();
  });