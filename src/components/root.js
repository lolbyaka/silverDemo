import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import Register from './Register/Register';
import Record from './Record/Record.js'
import Finish from './Finish/Finish'
import {connect} from "react-redux"
import {generateLevels} from '../Redux/RegisterActions'
import Topics from './Topics/Topics';

class Root extends React.Component {
  componentDidMount() {
    console.log(process.env.NODE_ENV);
    this.props.initApp(6);
  }

  render() {
    return (
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/register" component={Register}/>
        <Route path="/topic" component={Topics}/>
        <Route path="/record" component={Record}/>
        <Route path="/finish" component={Finish}/>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  initApp: (count) => dispatch(generateLevels(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)