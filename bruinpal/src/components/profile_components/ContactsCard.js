import React from "react";
import {MDBCol, MDBRow, MDBCard, MDBCardText, MDBCardBody,} from 'mdb-react-ui-kit';


function ContactsCard() {
  return (
    <MDBCard className="mb-4">
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Email</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">pbruin@g.ucla.edu.test</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Phone</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Twitter</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">@polar_bruin</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Website</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">http://www.polarbruin.com</MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}

export default ContactsCard;
