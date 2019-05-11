import React from 'react';
import ButtonsWrapper from '../Buttons/ButtonsWrapper';

class Welcome extends React.Component {

    toAnotherTopic = () => {
        this.props.history.push('/register');
    }

    render() {
        return (
            <React.Fragment>
                <div className='image__wrapper' style={{backgroundImage: 'url('+ process.env.PUBLIC_URL + '/img/listen.png)'}}></div>
                <div className="content__wrapper content__wrapper--main content__wrapper--thanks">
                    <iframe src="https://player.vimeo.com/video/323553122" width="100%" height="360" allowfullscreen style={{border: 'none'}}></iframe>            
                    <h1>Thank you</h1>
                    <h2>Well done, thank you for your participation<br/>we will contact you soon, and you will get your recordings clips</h2>
                    <div className="content__wrapper__buttons content__wrapper__buttons--register">
                        <a href="#" className="button button--lead button--finish" onClick={() => this.toAnotherTopic()}>Start another chapter</a>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Welcome;
