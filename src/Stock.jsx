import React, { Component } from 'react'
import './Stock.css';

export class Stock extends Component {
    constructor(props) {
        super(props);
        const {id, nome, quotazione} = this.props.datistock;
        this.state = {id, nome, quotazione, eta: this.props.eta, start: false};
        console.log('1f) FIGLIO - Creo istanza ' + nome);


        this.hobby = ['Calcio', 'Tennis'];
    }

    static getDerivedStateFromProps(np, ns) {
     /*   console.log('1fa) Figlio check props e state');
        if(np.datistock.quotazione !== ns.quotazione && np.datistock.nome !== ns.nome) {
            return {
                nome: np.datistock.nome,
                quotazione: np.datistock.quotazione
                };
            } else {
                return null;
            } */
    }

    componentDidMount() {
        console.log('3f) FIGLIO - DidMount ' + this.props.datistock.nome);

    }

    componentDidUpdate(prevProps, prevState) {
        console.log('4f) FIGLIO - DidUpdate ' + this.props.datistock.nome);

        if(prevProps.datistock.quotazione !== this.props.datistock.quotazione) {
            this.setState((state, props) => ({ quotazione: props.datistock.quotazione }))

            }
    }
    
    componentWillUnmount() {
        console.log("RIP " + this.state.id);
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
        console.log('2f) FIGLIO - Render ' + this.props.datistock.nome + " ID: " + this.props.datistock.id);
        

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
                            <h2>Var {this.state.id}</h2>
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