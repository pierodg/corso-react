import React, { Component } from 'react'
import './Stock.css';

export class Stock extends Component {
    constructor(props) {
        super(props);
        const {nome, quotazione} = this.props.datistock;
        this.state = {quotazione, eta: this.props.eta, start: false};
        console.log('1f) FIGLIO - Creo istanza ' + nome);

        this.hobby = ['Calcio', 'Tennis'];
    }

    componentDidMount() {
        console.log('3f) FIGLIO - DidMount ' + this.props.datistock.nome);
    }

    componentDidUpdate(prevProps) {
        console.log('4f) FIGLIO - DidUpdate ' + this.props.datistock.nome);
    }
    
    aggiornoStock = () => {
        this.setState((state, props) =>
            ({quotazione: state.quotazione + 10}));
    }


    aggiornoEta = () => {
        if(this.state.start) {

            this.setState((state, props) => ({eta: state.eta +1}))
                if (this.state.eta >= 18) {
                    this.props.showEta(this.props.nome); 
                }
        } 
    }

    realTime = () => {
        if(!this.state.start) {
            this.setState({start: true})
            setInterval(() => {
                this.aggiornoEta()
                
            }, 3000);
        } 
        else this.setState({start: false});
        }

    render() {
        console.log('2f) FIGLIO - Render ' + this.props.datistock.nome);

        /*
        const { nome, fondatore} = this.props;
        const prezzo = this.state.prezzo;

        const itemJsx = (
            <ul>
           { this.hobby.map(item => <li key={item.toString()}> {item} </li>)}
            </ul>
        );
        */
        return (
            <React.Fragment>
                {/* <h3>Figlio: {nome}, Età: {this.state.eta} </h3>
                <p>Fondatore: {fondatore}</p>
                <button onClick={this.realTime}>
                    Aggiorno
                </button>
                <p>{prezzo}</p> */}

                <div className="stock">
                    <div className="row">
                        <div className="col">
                            <h2>{this.props.datistock.nome}</h2>
                            <p>Nasdaq</p>
                         </div>
                        <div className="col">
                            <h2>{this.state.quotazione}</h2>
                            <p>HH:MM:SS</p>
                        </div>
                        <div className="col">
                            <h2>Var</h2>
                            <p>%</p>
                        </div>
                         <div className="col">
                           <button onClick={this.aggiornoStock}>Aggiorna</button>
                        </div>
                     </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Stock

Stock.defaultProps = {
    nome: 'ND',
    fondatore: 'ND',
    eta: 'ND'
}