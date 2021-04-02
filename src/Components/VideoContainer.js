import React from 'react'
import VideoList from './VideoList'
import VideoPlayer from './VideoPlayer'
import './VideoContainer.css'

class VideoContainer extends React.Component{
    state = {selectedVideo:null}
    clickHandler = (video)=>{
        this.setState({selectedVideo:video})
    }
    render(){
        return (
            <div className='video-container'>
                <VideoPlayer video = {this.state.selectedVideo} />
                <VideoList clickHandler={this.clickHandler} videos={this.props.videos} />
            </div>
        )
    }
}

export default VideoContainer