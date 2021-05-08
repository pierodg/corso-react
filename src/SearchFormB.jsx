import React, { Component } from 'react'

export class SearchFormB extends Component {

constructor(props) {
    super()
    this.state = {ck1: false, ck2: false}
}

    onChangeCk = (e) => {
        console.log("Click su checkbox: " + e.target.name)
        this.setState({[e.target.name] : e.target.checked})
    }

    render() {
        return (
            <div>
                <input type="checkbox" name="ck1" value={this.state.ck1} onChange={this.onChangeCk} /> Campo 1
                <input type="checkbox" name="ck2" value={this.state.ck2} onChange={this.onChangeCk} /> Campo 2
            </div>
        )
    }
}

export default SearchFormB
