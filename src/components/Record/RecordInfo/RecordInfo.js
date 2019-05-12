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

    render() {
        return (
            <React.Fragment>
                {this.props.saved ?
                <div className='next' style={{marginBottom: '127px' }}>
                    <span>Good job,</span>
                    <br/>
                    Next One!
                </div> : 
                <div className='record__info'>
                    <div id="record_container" className="record__container"></div>
                </div>            
                }
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
