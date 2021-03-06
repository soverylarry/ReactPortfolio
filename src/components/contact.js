import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Larry Laconi</h2>
                        <img src={require('../components/img/toastyElon.jpg')}
                            alt="avatar"
                            style={{ height: '250px' }} />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>I didn't inhale...but by god I should have!</p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        203-927-0818</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                        @soverylarry</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        soverylarry@gmail.com</ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-github" aria-hidden="true" />
                                        https://github.com/soverylarry</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;