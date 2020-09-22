import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Footer extends Component {
    render() {
        return (
            <div className='footer-body'>
                <Grid>
                    <Cell col={12}>
                        <p style={{ color: 'white', fontSize: '20px', fontWeight: 'bold', textAlign: "center" }}>React Portfolio 2020</p>
                        <a href='https://github.com/bpr59' target='_blank' rel="noopener noreferrer" alt='github'>
                            
                        </a>
                        <a href='https://www.linkedin.com/in/albert-colon-51156311/' target='_blank' rel="noopener noreferrer" alt='linkedIn'>
                            
                        </a>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Footer;