import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={require('../components/img/aolOffline.jpeg')} alt="mlabIsReal" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Older Bolder Coder Growing Older</h1>
                            <hr />
                            <p>HTML/CSS | MERN | Disco Dancing | Git | Javascript | React</p>

                            {/* <div className="social-links">
                                <a href="http://google.com" rel="noopeneer noreferrer" target="_blank">
                                    <i className="fa fa_linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="http://google.com" rel="noopeneer noreferrer" target="_blank">
                                    <i className="fa fa_github-square" aria-hidden="true" />
                                </a>
                                <a href="http://google.com" rel="noopeneer noreferrer" target="_blank">
                                    <i className="fa fa_free-code-camp-square" aria-hidden="true" />
                                </a>
                                <a href="http://google.com" rel="noopeneer noreferrer" target="_blank">
                                    <i className="fa fa_youtube-square" aria-hidden="true" />
                                </a>

                            </div> */}
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;