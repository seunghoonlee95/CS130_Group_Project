import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserCard from "../components/profile_components/UserCard.js"
import InProgressCard from "../components/profile_components/InProgressCard.js"
import MyPostingsCard from "../components/profile_components/MyPostingsCard.js"
import SkillsCoursesCard from "../components/profile_components/SkillsCoursesCard.js"
import {MDBCol, MDBContainer, MDBRow} from 'mdb-react-ui-kit';

//DONE profile reference: https://mdbootstrap.com/docs/react/extended/profiles/
//DONE divs: avatar, avg stars, skills & courses, tasks in progress, my postings
//TODO After user logs in, in Navbar, change '/loginsignup' to '/profilepage'
//TODO to profile owner, show everything (toggles showing states); to others, show only those the owner allows to show
     //booleans: isPageOwner, showMyPostings, showTasksInProgress, showContact
        //if isPageOwner, show everything and the edit buttons
        //else
          //if showMyPostings, show MyPostingsCard
          //if showTasksInProgress, show InProgressCard
//TODO Conditionally render the user-uploaded courses and skills in a loop. 
    //For each of courses or skills, if user chooses to show it by ticking the checkbox in the user profile page, it's shown to others.
    //Whether user chooses to show is stored in an attribute corresponding to this particular course or skill.

function Profile(props) {

  return(
    <React.Fragment>
      <Navbar />
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">
          
          <MDBRow>
            <MDBCol lg="4">
              <UserCard isOwner={props.isOwner}/>
            </MDBCol>
            <MDBCol lg="8">
              <SkillsCoursesCard />
              <MDBRow>
                <MDBCol md="6">
                  <InProgressCard isOwner={props.isOwner}/>
                </MDBCol>
                <MDBCol md="6">
                  <MyPostingsCard isOwner={props.isOwner}/>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default Profile;