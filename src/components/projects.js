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
          {/* MEN Stack apps - Project 1 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageOne" style={{ color: '#fff', height: '300px' }}>M-E-N Workout Tracker App</CardTitle>
            <CardText>
              The user can log multiple exercises in a workout on a given day. You can also track the name, type, weight, sets, reps, and duration of exercise.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/WorkoutTracker' target='_blank' rel="noopener noreferrer">Github Repo</Button>
              <Button colored href='https://larryworkouttracker.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Application</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageTwo" style={{ color: "black", height: '300px' }}>Budget Tracker App</CardTitle>
            <CardText>
              This Online Banking App gives users a fast and easy way to track their money, but allowing them to access that information anytime is even more important.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/OnlineOffLineBudgetTracker' target='_blank' rel="noopener noreferrer">Github Repo</Button>
              <Button colored href='https://larrylaconi-budget-tracker.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Application</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Node MySQL apps Project 1 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageThree" style={{ color: "black", height: '300px' }}>EatDaBurger App</CardTitle>
            <CardText>
              EatDaBurger is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. You add a new burger to your own 'menu' and then you get to Eat It whenever you want! The app connects to an MySQL/SQL database to manage the user entries.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/EatDaBurger' target='_blank' rel="noopener noreferrer">Github Repo</Button>
              <Button colored href='https://infinite-cove-96527.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Application</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageFour" style={{ color: '#fff', height: '300px' }}>Employee Tracker App</CardTitle>
            <CardText>
              EmployeeTracker is a command line app that uses Node.js, mySQL and Inquirer to create, view and add to an employee database.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/EmployeeTracker' target='_blank' rel="noopener noreferrer">Github Repo</Button>

            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (

        <div className="projects-grid">
          {/* Node Express apps Project 1 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageFive" style={{ color: '#fff', height: '300px' }}>Employee Template Generator</CardTitle>
            <CardText>
              This app will build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/EmployeeTemplateEngine' target='_blank' rel="noopener noreferrer">Github Repo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageSix" style={{ color: "black", height: '300px' }}>NoteTaker</CardTitle>
            <CardText>
              This application will use an express backend and save and retrieve note data from a JSON file.For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/NoteTaker' target='_blank' rel="noopener noreferrer">Github Repo</Button>
              <Button colored href='https://larrys-note-taker.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Application</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* HTML/CSS apps Project 1 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageSeven" style={{ color: '#fff', height: '300px' }}>Free To Me!</CardTitle>
            <CardText>
              'Free to Me' is an application to provide the user with information regarding if the movie they're considering is already available in one of the users' current video subscriptions. The user simply enters the movie they'd like to watch, after checking off their current subscriptions to online video services, and they will be presented with viewing options that are already free to them.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/MovieFinder' target='_blank' rel="noopener noreferrer">Github Repo</Button>
              <Button colored href='https://crystajeffcoat.github.io/MovieFinder/' target='_blank' rel="noopener noreferrer">Deployed Application</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={0} style={{ width: '600px', margin: 'auto' }}>
            <CardTitle className="cardImageEight" style={{ color: '#fff', height: '300px' }}>Book Crawler</CardTitle>
            <CardText>
              A full stack application that uses a database to store usernames and passwords to login and uses google books api to search for books.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/soverylarry/book-crawler' target='_blank' rel="noopener noreferrer">Github Repo</Button>
              <Button colored href='https://infinite-cove-96527.herokuapp.com/' target='_blank' rel="noopener noreferrer">Deployed Application</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
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