import React from 'react'

class SearchBar extends React.Component{
    state = {term: ''}
    onFormSubmit = (e)=>{
        e.preventDefault()
        const query = this.state.term
        this.props.onSearchSubmit(query)
    }
    onInputChange = (e)=>{
        e.preventDefault();
        this.setState({term:e.target.value})
    }
    render(){
        return (
            <div className="ui segment">
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label>Search Videos</label>
                        <input 
                            onChange={this.onInputChange} 
                            value={this.state.term} type="text" 
                            placeholder="Search" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar