import React, { Component } from 'react';
import { Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import API from './utils/API';


class App extends Component {
  state = {
    wineries: []
  };

  componentDidMount(){
    this.getWineries();
  }

  getWineries = () => {
    API.getWineries()
    .then(res => this.setState({'wineries': res.data}))
    .catch(err => console.log(err))
  };


  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-light">
          <span class="navbar-brand mb-0 h1">WineLION</span>
        </nav>
        <br/>

        {/* <button className="btn btn-primary">Hello</button> */}

        <div className="container">
          <Row>
            {this.state.wineries.map(winery => (
              <Col sm="6">
                <Card body>
                  <CardTitle>{winery.name}</CardTitle>
                  <CardText>{winery.region}</CardText>
                  <Button><a href={winery.winery_url} target="_blank">DRINK HERE</a></Button>
                </Card>
              </Col>
            ))}
          </Row>

        </div>



      </div>
    );
  }
}

export default App;
