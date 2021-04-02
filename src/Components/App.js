import React from 'react'
import SearchBar from './SearchBar'
import VideoContainer from './VideoContainer'
import youtube from './youtube'

class App extends React.Component{
    state={videos:[],player:null}
    onSearchSubmit = async (query) => {
        const response = await youtube.get('/search',{
                        params:{
                            q:query
                        }
                        })
        
        this.setState({videos:response.data.items})
    }
    render(){
        return (
            <div className='ui container'  style={{paddingTop:'10px'}}>
                <SearchBar onSearchSubmit = {this.onSearchSubmit} />
                <VideoContainer videos={this.state.videos} />
            </div>
        )
    }
}

export default App