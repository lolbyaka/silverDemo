import React from 'react';
import {connect} from 'react-redux';
import { selectLevel, nextStep } from '../../Redux/RegisterActions';
import InputGroup from './InputGroup/InputGroup';
import LevelButton from './LevelButton/LevelButton';
import{RegisterErrors} from './RegisterErrors/RegisterErrors';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.name = React.createRef();
        this.email = React.createRef();

        this.state = {
            formErrors: {email: '', name: '', level: 'Level not selected'},
            emailValid: false,
            nameValid: false,
            levelValid: false,
            formValid: false,
            showErrors: false
        }
    }

    selectLevel = (level) => {
        this.setState({selectedLevel: level, levelValid: true, formErrors: {level: '', email: this.state.formErrors.email, name: this.state.formErrors.name}});
        this.props.selectLevel(level);
    }

    renderLevels = () => {
        if(this.props.levels.length) {
            return this.props.levels.map((level, i)=> {
                return <LevelButton active={level.active} number={level.text} select={() => this.selectLevel(i)} key={i} />
            })
        }   
    }

    handleUserInput = (e) => {
        const name = e.current.name;
        const value = e.current.value;
        this.setState({[name]: value}, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let nameValid = this.state.nameValid;
        let levelValid = this.state.nameValid;
    
        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid.';
                break;
            case 'name':
                nameValid = value.length >= 2;
                fieldValidationErrors.name = nameValid ? '': ' is too short.';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors, emailValid: emailValid, nameValid: nameValid}, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.nameValid});
    }
    
    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }
    
    nextStep = (e) => {
        e.preventDefault();
        if(this.state.formValid) {
            this.props.nextStep({name: this.name.current.value, email: this.email.current.value})
            this.props.history.push('/record');
        } else {
            this.validateForm();
            this.setState({showErrors: true})
        }
    }

    render() {
        return (
            <div className="content__wrapper content__wrapper--register">
                <div className="panel panel-default">
                    <RegisterErrors formErrors={this.state.formErrors} showErrors={this.state.showErrors} />
                </div>
                <form action="">
                    <h2>First, let us know your information.</h2>
                    <div className="input__wrapper">
                        <InputGroup type="text" name="name" text="Your name" ref={this.name} validationClass={this.state.nameValid ? 'valid' : ''} changeCallback={() => this.handleUserInput(this.name)}/>
                        <InputGroup type="email" name="email" text="Your email address" ref={this.email} validationClass={this.state.emailValid ? 'valid' : ''} changeCallback={() => this.handleUserInput(this.email)}/>
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
