import React, { Component } from 'react'

export class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = { cerca : 'Apple', note: ''}
    }

    searchIn = (e) => {
        console.log(e.target.value)
        this.setState({cerca: e.target.value})
    }

    noteIn = (e) => {
        console.log(e.target.value)
        this.setState({note: e.target.value})
    }

    invioIn = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.cerca);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.invioIn}>
                    <input type="text" name="stock" value={this.state.cerca} onChange={this.searchIn} />
                    <textarea name="note" placeholder="Scrivi qui..." value={this.state.note} onChange={this.noteIn} />

                    <input type="submit" value="Invio" />
                </form>
            </div>
        )
    }
}

export default SearchForm
