import React from 'react';
import {connect} from 'react-redux';
import SiriWave9 from '../../../lib/waves';

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

    hideRec = {opacity: 0, visibility: 'hidden', bottom: '-100%', position: 'absolute' }
    render() {
        return (
            <React.Fragment>
                
                <div className={this.props.saved ? 'next' : 'next next-hidden'}>
                    <span>Good job,</span>
                    <br/>
                    <span>Next One !</span>
                </div>
                <div className={this.props.saved ?  'record__info record__info--saved' : 'record__info' }>
                    <div id="record_container" className="record__container"></div>
                    {this.props.isSaving &&
                        <a href="#" className='rec rec--submit' onClick={this.props.toggle}>Submit</a>
                    }
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
