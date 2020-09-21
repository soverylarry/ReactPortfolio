import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={require('../components/img/LLBridgeReduced.png')}
                                alt="larry"
                                style={{ height: '300px' }} />
                        </div>

                        <h2 style={{ paddingTop: '1em' }}>Larry Laconi</h2>
                        <h4 style={{ color: 'grey' }}>Bro-Coder Older</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>I'm wrapping up six months of study at the UConn Coding Bootcamp. After that I'll be job searching while I go deep into the 'coding Dojo' to sharpen my Javascript and MERN skill set.</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>705 Quinnipiac Ave. New Haven, CT</p>
                        <h5>Phone</h5>
                        <p>203-927-0818</p>
                        <h5>Email</h5>
                        <p>soverylarry@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h2>Education</h2>

                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName="UConn Coding Bootcamp"
                            schoolDescription="Full Stack six month course covering both front end and back end development."
                        />

                        <Education
                            startYear={1990}
                            endYear={1994}
                            schoolName="Penn State University"
                            schoolDescription="An unbelievably overrated piece of farm land in the middle of hillybilly central."
                        />

                        <hr style={{ borderTop: '3px sold #e22947' }} />

                        <h2>Experience</h2>

                        <Experience
                            startYear={2015}
                            endYear={2017}
                            jobName="SeeClickFix - Government Partnership Executive"
                            jobDescription=" Negotiated Contracts for software as a service (SAAS) with municipalities.
                             Closed Qualified Leads led to $140,000 in new annual recurring revenue.
                             Qualified Leads led to $110,000 in annual recurring revenue."
                        />

                        <Experience
                            startYear={2017}
                            endYear={2020}
                            jobName="CTrides - Commuter Program Manager"
                            jobDescription=" Assist medium to large municipalities, businesses, Higher Ed and non-profits to
                            reduce employee single vehicle miles traveled within the state of Connecticut.
                             Working on behalf of CT-DOT to disseminate information on commuter options and
                            further state transportation goals."
                        />
                        <hr style={{ borderTop: '3px sold #e22947' }} />

                        <h2>Skills</h2>

                        <Skills
                            skill='Javascript'
                            progress={80}
                        />
                        <Skills
                            skill='NodeJS'
                            progress={70}
                        />
                        <Skills
                            skill='HTML/CSS'
                            progress={80}
                        />
                        <Skills
                            skill='JQeury'
                            progress={60}
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;