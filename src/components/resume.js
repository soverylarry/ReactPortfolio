import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid> 
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                                alt="avatar"
                                style={{height: '200px'}}/>
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Larry Laconi</h2>
                        <h4 style={{color: 'grey'}}>Bro-Coder Older</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
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
                            startYear={1990}
                            endYear={1994}
                            schoolName="Penn State University"
                            schoolDescription="An unbelievably overrated piece of farm land in the middle of hillybilly central"
                        />

                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName="UConn Coding Bootcamp"
                            schoolDescription="An unbelievably overrated piece of farm land in the middle of hillybilly central"
                        />
                        <hr style={{borderTop: '3px sold #e22947'}}/> 

                        <h2>Experience</h2>

                        <Experience
                              startYear={2015}
                              endYear={2017}
                              jobName="SeeClickFix"
                              jobDescription="An unbelievably overrated piece of CEO Bro's and digital debt in the middle of New Haven central"
                        />

                        <Experience
                              startYear={2017}
                              endYear={2020}
                              jobName="CTrides"
                              jobDescription="An unbelievably overrated piece of Public Transit horseshit in the middle of New Haven central"
                        />         
                        <hr style={{borderTop: '3px sold #e22947'}}/> 

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