import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (

        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto'}}>
            <CardTitle className="cardImageOne" style={{ color: '#fff', height: '176px' }}>M-E-N Stack Fitness App</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github Repo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto'}}>
            <CardTitle className="cardImageTwo" style={{ color: '#fff', height: '176px' }}>Welcome</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
              <Button colored>Github Repo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}

        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1> This is NodeMySQL </h1>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1> This is NodeExpress</h1>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1> This is HTML/CSS </h1>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Mongo/Express/Node</Tab>
          <Tab>Node/MySQL</Tab>
          <Tab>Node/Express</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}
            </div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;