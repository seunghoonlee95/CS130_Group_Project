import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserCard from "../components/profile_components/UserCard.js"
import InProgressCard from "../components/profile_components/InProgressCard.js"
import MyPostingsCard from "../components/profile_components/MyPostingsCard.js"
import ContactsCard from "../components/profile_components/ContactsCard.js"
import {MDBCol, MDBContainer, MDBRow, MDBBreadcrumb, MDBBreadcrumbItem} from 'mdb-react-ui-kit';

//DONE profile reference: https://mdbootstrap.com/docs/react/extended/profiles/
//DONE divs: avatar, avg stars, skills & courses, tasks in progress, my postings
//TODO After user logs in, in Navbar, change '/loginsignup' to '/profilepage'

function Profile() {
  return (
    <React.Fragment>

      <Navbar />
      <section style={{ backgroundColor: '#eee' }}>
        <MDBContainer className="py-5">

          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem>
                  <a href='#'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem>
                  <a href="#">User</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg="4">
              <UserCard />
            </MDBCol>
            <MDBCol lg="8">
              <ContactsCard />
              <MDBRow>
                <MDBCol md="6">
                  <InProgressCard />
                </MDBCol>
                <MDBCol md="6">
                  <MyPostingsCard />
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
