import React from 'react';
import {connect} from 'react-redux';
import { selectLevel, nextStep  } from '../../Redux/RegisterActions';
import {selectTopic} from '../../Redux/RecordActions'
import TopicsWrapper from './TopicsWrapper/TopicsWrapper';

class Topics extends React.Component {

    nextStep = (e) => {
        e.preventDefault();
        this.props.history.push('/record');

    }

    render() {
        return (
            <div className="content__wrapper content__wrapper--register">
                <form action="">
                    <h2>Which chapter do you want to start your assessment from?</h2>
                    <TopicsWrapper topics={this.props.topics} selectTopic={(num) => {
                        this.props.selectTopic(num);
                    }} />
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
        topics: store.recordReducer.topics
    }
};

const mapDispatchToProps = dispatch => ({
    selectTopic: (number) => dispatch(selectTopic(number)),
    nextStep: (data) => dispatch(nextStep(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Topics);
