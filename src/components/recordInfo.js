import React from 'react';
import {connect} from 'react-redux';
import { playTopic } from '../actions/recordActions';
import Plyr from 'plyr';
import Progress from './Progress';
import SiriWave9 from '../waves';
class RecordInfo extends React.Component {

    componentDidMount() {
        this.waves = new SiriWave9({
            width: 640,
            height: 100,
            speed: 0.04,
            container: document.getElementById('record_container'),
            autostart: true,
        });
    }

    componentDidUpdate(prevProps, nextProps) {
        // if(prevProps.isSaving) {
        //     if(this.waves.getState) {
        //         this.waves.stop();
        //     }
        // } else {
        //     if(!this.waves.getState) {
        //         this.waves.start();
        //     }
        // }
    }

    hideRec = {opacity: 0, visibility: 'hidden', bottom: '-100%', position: 'absolute' }
    render() {
        return (
            <React.Fragment>
                
                <div className={this.props.saved ? 'next' : 'next next-hidden'}>
                    <span>Good job,</span><br/>
                    Next One !
                </div>
                <div className={this.props.saved ?  'record__info record__info--saved' : 'record__info' }>
                    <div id="record_container" className="record__container"></div>
                    <a href="#" className={this.props.isSaving ? 'rec rec--submit' : 'rec'} onClick={this.props.cancel}>{this.props.isSaving ? 'Submit' : 'Cancel'}</a>
                </div> 
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
    }
};

const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(RecordInfo);
