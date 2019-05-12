import React from 'react';
import {connect} from 'react-redux'
class Welcome extends React.Component {

    toAnotherTopic = () => {
        this.props.history.push('/topic');
    }

    render() {
        return (
            <React.Fragment>
                <div className='image__wrapper' style={{backgroundImage: 'url('+ this.props.backgroundImage + ')'}}></div>
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

const mapStateToProps = store => {
    return {
        backgroundImage: store.recordReducer.topics[store.recordReducer.selectedTopic].background,
    }
};

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

