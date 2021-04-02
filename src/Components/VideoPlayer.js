import React from 'react'

class VideoPlayer extends React.Component{
    render(){
        const video = this.props.video;
        let jsxToRender = <div></div>
        let iframe = <div></div>
        if(video !== null){
            iframe = (<div className='iframe ui embed'><iframe 
                             src={`https://www.youtube.com/embed/${video.id.videoId}`}
                             title={video.snippet.title}
                             /></div>)
            jsxToRender = (<div className='video-details ui segment'>
                            <h3 className='ui header'>
                                {video.snippet.title}
                            </h3>
                            <div className='video-description'>
                                {video.snippet.description}
                            </div>
                        </div>);
        }
        return (
            <div className='video-container-item video-player'>
                {iframe}
                {jsxToRender}
            </div>
        )
    }
}
export default VideoPlayer