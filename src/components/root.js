import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import MainScreen from './MainScreen';
import Register from './Register.js';
import Record from './Record.js'
import { connect } from "react-redux"
import {generateLevels} from '../actions/registerActions'

const Root = (props) => {
  useEffect(() => props.initApp(6), []);
  return (
    <Router>
      <Route path="/" exact component={MainScreen} />
      <Route path="/register" component={Register}/>
      <Route path="/record" component={Record}/>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  initApp: (count) => dispatch(generateLevels(count))
})

export default connect(mapStateToProps, mapDispatchToProps)(Root)