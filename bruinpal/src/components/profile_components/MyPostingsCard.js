import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardHeader,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

// profile reference: https://mdbootstrap.com/docs/react/extended/profiles/
//star rating reference: https://www.npmjs.com/package/react-star-ratings, https://juejin.cn/post/6844903858523783176
//TODO make clear: is it good practice to separate the cards as different components

function MyPostingsCard() {
  return (
    <MDBCard className="mb-4 mb-md-0">
      <MDBCardBody>
        <MDBCardText className="mb-4"><span className="text-primary font-italic me-1">My Postings</span>Should put tasklist rows here</MDBCardText>
        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Web Design</MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={80} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Website Markup</MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={72} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>One Page</MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={89} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Mobile Template</MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={55} valuemin={0} valuemax={100} />
        </MDBProgress>

        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Backend API</MDBCardText>
        <MDBProgress className="rounded">
          <MDBProgressBar width={66} valuemin={0} valuemax={100} />
        </MDBProgress>
      </MDBCardBody>
    </MDBCard>
  );
}

export default MyPostingsCard;
