import React from "react";
import { render,getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router } from 'react-router-dom';
import Profile from '../../pages/Profile';
import {createMemoryHistory} from 'history';    //ref: https://bobbyhadz.com/blog/react-cannot-read-property-pathname-of-undefined#:~:text=The%20error%20%22Cannot%20read%20properties,Link%20component%20in%20React%20router.
                                                //ref: https://stackoverflow.com/questions/66747556/react-js-error-uselocation-may-be-used-only-in-the-context-of-a-router-com
                                                //ref: https://www.digitalocean.com/community/tutorials/how-to-test-a-react-app-with-jest-and-react-testing-library

test('renders the profile page', () => {
    const history = createMemoryHistory();
    render(
        <Router location={history.location} navigator={history}>
            <Profile />
        </Router>
    );
    //DONE TestingLibraryElementError: Unable to find an element by: [data-testid="aboutus-navbar"]
         //This is because react-testing-library won't grab custom components for some reason.
         //Workaround: wrap the custom component with <div>
         //Which, however, is not recommended by a r-t-l's contributor for "it's not a good testing practice".
         //Yet he didn't mention what IS the good testing practive regarding custom components.
         //So I'll use the workaround for now.
    expect(getByTestId(document.documentElement, 'profile-navbar'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'profile-usercard'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'profile-skillscoursescard'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'profile-inprogresscard'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'profile-mypostingscard'),).toBeInTheDocument();
    expect(getByTestId(document.documentElement, 'profile-footer'),).toBeInTheDocument();
  });