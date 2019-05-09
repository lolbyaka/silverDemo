import React from 'react';
import {connect} from 'react-redux';
import { selectLevel, nextStep } from '../actions/registerActions';
import InputGroup from './inputGroup'
import LevelButton from './levelButton'

class Register extends React.Component {

    constructor(props) {
        super(props)

        this.name = React.createRef();
        this.email = React.createRef();
    }
    selectLevel = (level) => {
        this.props.selectLevel(level);
    }

    renderLevels = () => {
        if(this.props.levels.length) {
            return this.props.levels.map((level, i)=> {
                return <LevelButton active={level.active} number={level.text} select={() => this.selectLevel(i)} key={i} />
            })
        }   
    }

    nextStep = (e) => {
        e.preventDefault();
        this.props.nextStep({name: this.name.current.value, email: this.email.current.value})
        this.props.history.push('/record')
    }
    render() {
        return (
            <div className="content__wrapper content__wrapper--register">
                <form action="">
                    <h2>First, let us know your information.</h2>
                    <div className="input__wrapper">
                        <InputGroup type="text" text="Your name" ref={this.name}/>
                        <InputGroup type="email" text="Your email address" ref={this.email} />
                    </div>
                    <h2>And your current level.</h2>
                    <div className="level__buttons">
                        { this.renderLevels() }
                    </div>
                    <div className="content__wrapper__buttons content__wrapper__buttons--register">
                        <a href="#" className="button button--lead" onClick={(e) => this.nextStep(e)}>Next Step</a>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        levels: store.registerReducer.levels
    }
};

const mapDispatchToProps = dispatch => ({
    selectLevel: (number) => dispatch(selectLevel(number)),
    nextStep: (data) => dispatch(nextStep(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Register);
