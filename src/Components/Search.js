import React, { Component } from 'react';

class Search extends Component {
    searchChange = (e) =>{
        this.props.searchChange(e)
    }
    selectChange = (e) =>{
        this.props.selectChange(e)
    }
    
    render() {
        return (
            <div>
                <input
                    className='input pa1 ba b--grey bg-black'
                    type='search'
                    placeholder='Search Client'
                    onChange={this.searchChange} />
                <select onChange={this.selectChange}>
                    <option value="Name">Name</option>
                    <option value="Country">Country</option>
                    <option value="Sold">Sold</option>
                    <option value="Owner">Owner</option>
                </select>
            </div>
        )
    }
}

export default Search;