import React from 'react'

class VideoCard extends React.Component{
    constructor(props){
        super(props)
        this.videoRef = React.createRef()

    }
    componentDidMount(){
        this.videoRef.current.addEventListener('click',this.clickEventListener)
    }
    clickEventListener = () =>{
        this.props.clickHandler(this.props.video)
    }

    render(){
        const video = this.props.video.snippet;
        return (
            <div ref={this.videoRef} className='ui video-card'>
                <img 
                  className='ui avatar' 
                  alt={video.description} 
                  src={video.thumbnails.medium.url} />
                <div className='video-title'>
                    {video.title}
                </div>
            </div>
        )
    }
}

export default VideoCard