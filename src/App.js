 

import Body1 from './components/Body1';
import Body2 from './components/Body2';
import Body3 from './components/Body3';
import Body4 from './components/Body4';

import Body51 from './components/Body51';
import Partners from './components/Partners';
import Body6 from './components/Body6';
import Body7 from './components/Body7';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Register from './components/Register';
import WhyShouldYouAttend from './components/WhyShouldYouAttend';
import OurPreviousWebinarHighlights from './components/OurPreviousWebinarHighlights';
import WhatOurClientsSayAboutUs from './components/WhatOurClientsSayAboutUs';
import WebinarTopics from './components/WebinarTopics';
import OurPreviousWebinars from './components/OurPreviousWebinars';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BeyondKnowledge from './components/BeyondKnowledge';


function App() {
  return (
    <div className="App  ">

      {/* <Webinar/> */}
      
    <Navbar/>
    <Body1/>
    <Body3/>
    <Body4/>
    
    
    <WebinarTopics/>
    
    <Body51/>
    <Partners/>
    <Register/>
    <Body2/>
    <WhyShouldYouAttend/>
    <OurPreviousWebinarHighlights/>
    <WhatOurClientsSayAboutUs/>
    <OurPreviousWebinars/>
    <Testimonials/>
    <Contact/>
    <BeyondKnowledge/>
    {/* <Body6/> */}
    {/* <Body7/> */}
    
    </div>
  );
}

export default App;
