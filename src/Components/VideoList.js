import React from 'react'
import VideoCard from './VideoCard'

class VideoList extends React.Component{
    render(){
        const vlist = this.props.videos.map(v => <VideoCard clickHandler={this.props.clickHandler} key={v.id.videoId} video = {v} />)
        return (
            <div className='video-container-item video-list ui relaxed divided list'>
                {this.props.videos.length > 0 ? <div> Search Results:</div>:null}
                {vlist}
            </div>
        )
    }
}

export default VideoList