import React from 'react';
import {connect} from 'react-redux';
import { playTopic, resetAttemps, finishTopic } from '../../Redux/RecordActions';
import Plyr from 'plyr';
import Progress from './Progress/Progress';
import RecordInfo from './RecordInfo/RecordInfo';
import Recorder from '../../lib/recorder';
import * as firebase from 'firebase';

var STORAGE_ENV = process.env.NODE_ENV === "development" ? "test" : "prod";

class Record extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRecording: false,
            isSaving: false,
            seconds: '01:00',
            saved: false,
            step: 0
        }
    }
    componentDidMount() {
        this.player = new Plyr(document.getElementById('player'),);
        this.setSource();
        this.initFirebase();
        console.log(process.env.REACT_APP_TEST_LEVEL)
    }

    initFirebase = () => {
        const config = {
            apiKey: "AIzaSyAymyBRWLGMA3Lw6pHHpZyL0J0rehyq5qc",
            authDomain: "silverfr-222123.firebaseapp.com",
            databaseURL: "https://silverfr-222123.firebaseio.com",
            projectId: "silverfr-222123",
            storageBucket: "",
            messagingSenderId: "167911197192"
        };
        const fbApp = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
        this.storageRef = fbApp.storage("gs://silverfr-222123.appspot.com").ref();
    }

    setSource = () => {
        if(this.props.selectedLevel !== 0 && this.props.topics) {
            this.player.source = {
                type: 'audio',
                title: '234',
                sources: [
                    {
                        src: process.env.PUBLIC_URL + 'boc-questions-mp3/'+ this.props.selectedTopic +'/level-'+ this.props.selectedLevel +'/' + this.props.topics[this.state.step],
                        type: 'audio/mp3'
                    }
                ]
            }
        }
    }

    playSource = () => {
        if(this.player && this.player.ready) {
            if(this.props.attemps !== 0 && !this.state.isRecording) {
                if(!this.player.playing) {
                    this.props.playTopic();
                }
                this.player.play();
            }
        }
    }

    convertSeconds = (seconds) => {
        return '0' + Math.floor(seconds / 60) + ":" + (seconds % 60 ? seconds < 10 ? '0' + seconds % 60 : seconds % 60 : '00')
    }

    startTimer = () => {
        this.time = 60;
        this.timer = setInterval(() => {
            this.time = this.time - 1;
            this.setState({seconds: this.convertSeconds(this.time)})
            if (this.time == 0) {
                this.toggleRecord();
            }
        }, 1000)
    }

    toggleRecord = () => {
        if(!this.player.playing && !this.state.saved) {
            if(!this.state.isRecording && !this.state.saved) {
                this.startRecord();
                this.setState({isRecording: true});
                this.startTimer();
            } else {
                this.submit()
            } 
        }
    }

    submit = () => {
        this.stopRecord();
        this.setState({saved: true});
        this.exportRecord();
        setTimeout(() => {
            this.setState({
                saved: false,
                isRecording: false,
                isSaving: false,
                seconds: '0:59',
                attemps: 3,
                step: this.state.step +1
            });
            this.props.resetAttemps();
            this.setSource();
            if(this.state.step == this.props.topics.length) {
                this.props.finishTopic(this.props.selectedTopic);
                this.props.history.push('/finish');
            }
        }, 3000);
        this.time=0;
        clearInterval(this.timer)
    }

    toRegister = () => {
        this.props.history.push('/register')
    }

    startRecord = () => {
        const constraints = {
            audio: true,
            video: false
        }
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            const audioContext = new AudioContext();
            this.getUserMetaStream = stream;
            const streamSource = audioContext.createMediaStreamSource(stream);
            this.rec = new Recorder(streamSource, {numChannels: 1});
            this.rec.record();
        }).catch((error) => {
            console.log(error);
        })
    }

    stopRecord = () => {
        this.rec.stop();
        this.getUserMetaStream.getAudioTracks()[0].stop();
    }

    exportRecord = () => {
        this.rec.exportWAV(blob => {
            const file_location = STORAGE_ENV + "/" + this.getAudioName();
            this.storageRef.child(file_location).put(blob);
        });
    }

    getAudioName() {
        var dateString = new Date().toISOString().split(".")[0];
        var audioName = `${this.props.userInfo.userName}-${this.props.userInfo.userEmail}-${this.props.selectedTopic}-${this.props.selectedLevel}-q${this.state.step}-${dateString}.wav`;
        
        return audioName;
    }

    returnPercent = () => {
        return this.state.step < this.props.topics.length - 1 ? ((this.state.step + 1)/(this.props.topics ? this.props.topics.length : 0)) * 100 : 100
    }

    render() {
        return (
            <React.Fragment>
                { this.props.userInfo.userEmail ? 
                <React.Fragment>
                <div className={this.state.isRecording ? 'image__wrapper image__wrapper--recording': 'image__wrapper'} style={{backgroundImage: 'url('+ process.env.PUBLIC_URL + this.props.backgroundImage + ')'}}></div>

                <div style={{opacity: this.state.isRecording ? '0' : '1'}}>
                    <audio id="player" controls='{progress}' preload="auto">Your browser does not support HTML5 Audio!</audio>
                </div>
                
                <div className="content__wrapper content__wrapper--records content__wrapper--listen">
                    <div style={{opacity: this.state.isRecording ? '1' : '0'}} className={`timer ${this.time <= 10 ? 'timer--red' : ''}`}>{this.state.seconds}</div>
                    { this.state.isRecording ? 
                        <RecordInfo saved={this.state.saved}/> : ''
                    }
                    <div className="record__buttons">
                        <a href="#" className={`${this.state.saved || this.state.isRecording ? "record__button record__button--inactive" : "record__button"} play` } onClick={() => this.playSource()}>
                            <div className="text">{this.state.saved || this.state.isRecording ? '' : `Replays Remaning: ${this.props.attemps}`}</div>
                        </a>
                        <a href="#" className={this.state.isRecording && !this.state.saved ? 'record__button rec rec--active' : this.state.saved ? 'record__button record__button--inactive rec' : 'record__button rec'} onClick={() => this.toggleRecord()}>
                            <div className="text">{this.state.saved ? '' : this.state.isRecording ? 'Recording...' : ''}</div>
                        </a>
                    </div>
                    <Progress current={this.state.step} count={this.props.topics ? this.props.topics.length : 0} percent={this.returnPercent()} lastStep={this.state.step >= this.props.topics.length - 1}/>
                </div></React.Fragment>:

                <div className="content__wrapper content__wrapper--register">
                    <form action="">
                        <h2>First, let us know your information.</h2>
                        <div className="content__wrapper__buttons content__wrapper__buttons--register">
                            <a href="#" className="button button--lead" onClick={(e) => this.toRegister(e)}>Register</a>
                        </div>
                    </form>
                </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        selectedTopic: store.recordReducer.selectedTopic,
        userInfo: store.registerReducer.userInfo,
        selectedLevel: store.recordReducer.selectedTopic == 0 ? store.registerReducer.userInfo.selectedLevel : 2,
        attemps: store.recordReducer.attemps,
        backgroundImage: store.recordReducer.topics[store.recordReducer.selectedTopic ? store.recordReducer.selectedTopic : 0].background,
        topics: store.recordReducer.topics[store.recordReducer.selectedTopic ? store.recordReducer.selectedTopic : 0].levels['level-' + (store.recordReducer.selectedTopic == 0 ? store.registerReducer.userInfo.selectedLevel : 2)]
    }
};

const mapDispatchToProps = dispatch => ({
    playTopic: () => dispatch(playTopic()),
    resetAttemps: () => dispatch(resetAttemps()),
    finishTopic: (topic) => dispatch(finishTopic(topic))
})

export default connect(mapStateToProps, mapDispatchToProps)(Record);
