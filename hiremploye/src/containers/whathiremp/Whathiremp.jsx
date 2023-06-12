import React from 'react'
import Feature from '../../components/feature/Feature';
import './whathiremp.css'
import { Link } from 'react-router-dom';

const Whathiremp = () => (
  <div className="hire__whathire section__margin">
    <div className="hire__whathire-feature">
      <Feature title="What is Hiremploye" text="Recruiters and employers often work together to identify
          and hire the best candidates for open positions. Both
          recruiters and employers have an important role to play
          in the hiring process, and they need to work together
          effectively to find and retain top talent. We help both of
          them to make the process fast by utilising our wide
          network of recruitment agencies and employer both." />
    </div>
    <div className="hire__whathire-heading">
      <h1>We assist employers and recruiters in the hiring process with our adaptive software.</h1>
      <Link to="/signupWorkforce"><p>Explore the Companies</p></Link>
    </div>
    <div className="hire__whathire-container">
      <Feature title="Verified Profiles" text="As our job consultants are screened throughly while onboarding, we leave no chance where in the resources provided by them are fake or their parameters does not match with their resume." />
      <Feature title="Quick Response" text="Since we have a large pool of consultants who have a ready resource for your requirement, you get a instant response as soon as you post any requirement." />
      <Feature title="Easy Tracking" text="Our well advanced tool enables you to easily track , manage  and utilise the resouces shared by our consultants. Our tool enables to keep the entire process of hiring from starting to end." />
    </div>
  </div>
);

export default Whathiremp