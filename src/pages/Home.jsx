import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Company from '../components/Company'
import Banner from '../components/Banner'
import Benefits from '../components/Benefits'
import BenefitsCardsReuseable from '../components/BenefitsCardsReuseable'

const Home = () => {
  return (
    <>
    <Hero/>
    <Company/>
    <Banner/>
    <Benefits/>
    <BenefitsCardsReuseable number="01" title="Flexible Learning Schedule" description="Fit your coursework around your existing commitments and obligations."/>
    <BenefitsCardsReuseable number="02" title="Expert Instruction" description="Learn from industry experts who have hands-on experience in design and development."/>
    <BenefitsCardsReuseable number="03" title="Diverse Course Offerings" description="Explore a wide range of design and development courses covering various topics."/>
    <BenefitsCardsReuseable number="04" title="Updated Curriculum" description="Access courses with up-to-date content reflecting the latest trends and industry practices."/>
    <BenefitsCardsReuseable number="05" title="Practical Projects and Assignments" description="Develop a portfolio showcasing your skills and abilities to potential employers."/>
    <BenefitsCardsReuseable number="06" title="Interactive Learning Environment" description="Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."/>
    
    </>
  )
}

export default Home