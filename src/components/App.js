import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { simpleAction } from '../actions/simpleAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  goToRegister = () => {
    this.props.history.push('/register');
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.goToRegister()}>Test redux please</button>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
