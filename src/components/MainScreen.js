import React from 'react';
import {connect} from 'react-redux';

class MainScreen extends React.Component {

    toRegister = () => {
        this.props.history.push('/register');
    }
    render() {
        return (
            <React.Fragment>
                <div className="vimeo__wrapper">
                    <iframe src="https://player.vimeo.com/video/325142644?background=1&autoplay=1&loop=1&byline=0&title=0"
                            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <div className="content__wrapper content__wrapper--main">
                    <h1>Bounjour. Hello.</h1>
                    <h2>We're using AI to perform language evaluations.<br/>And we're excited for you to be our first beta testers.</h2>
                    <div className="content__wrapper__buttons">
                        <a href="#" className="button button--video"><span>Watch Video</span></a>
                        <a href="#" className="button button--lead" onClick={() => this.toRegister()}>Start Now</a>
                    </div>
                    <div className="content__wrapper__terms">Read more about why we care about the <a href="https://silverdrip.com/privacy-policy-1">security and privacy</a> of your data.</div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
};

const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
