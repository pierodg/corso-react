import React, { Component } from 'react'

export class SearchFormA extends Component {

    constructor(props) {
        super();
        this.state = {azione: ''}
    }

    selectAzione = (e) => {
        console.log(e.target.value);
        this.setState({azione: e.target.azione})
    }

    render() {
        return (
            <div>
                <select name="azioni" value={this.state.azione} onChange={this.selectAzione}>
                    <option value="-">Seleziona</option>
                    <option value="Apple">Apple</option>
                    <option value="Google">Google</option>
                </select>
            </div>
        )
    }
}

export default SearchFormA
