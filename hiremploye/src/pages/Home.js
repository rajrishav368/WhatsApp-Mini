import React from 'react';

import { Footer, Blog, Possibility, Features, Whathireemp, Header} from '../containers';
import { CTA, Brand, Navbar } from '../components';

import './Home.css';

const Home = () => {


  return (
    <div className="App">
      <div className="hero-image">
        <Navbar />
        <Header />
      </div>  
      <Brand />
      <Whathireemp />
      <Features />
      {/*<Possibility />*/}
      <CTA />
      {/*<Blog />*/}
      <Footer/>
    </div>
  )
}

export default Home