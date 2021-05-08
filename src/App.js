import './App.css'
import React, { Component } from 'react'
import Stock from './Stock'



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { listastock: [{nome: 'APPL', quotazione: 250}], showMsg: false, maggiorenne: ''};
    console.log('1g) GENITORE: Creo istanza');

  } 

  componentDidMount() {
    console.log('3g) GENITORE DidMount');
    //interrogo l'API remota e aggiorno stato componente
    //const stock = [{nome: 'AAPL', quotazione: 350}];
    //this.setState((props, state) => ({listastock: stock})); 
  }

  aggiornoStock = (e) => {
    e.preventDefault();
    const newstock = {nome: "AMZN", quotazione: 1200};
    this.setState({listastock: [newstock]});
  }

  showMaggiorenne = (nome) => {
    this.setState({maggiorenne: nome});
  }

  mostroDatiForm = (d) => {
    alert('Dato passato al componente genitore ' + d)
  }

 render () {
    console.log('2g) GENITORE render')
  
    /* 
    const stocks = [
    {nome: 'APPL', fondatore: 'Jobs', eta: 10},
    {nome: 'GOOGL', fondatore: 'Brin', eta: 12},
    {nome: 'AMZN', fondatore: 'Bezos', eta: 7}
    ]

   const figliStock = (
    <ul>
    {stocks.map(item => <Stock nome={item.nome} fondatore={item.fondatore} eta={item.eta} showEta={this.showMaggiorenne} />)}
    </ul> 
  )*/

  return (
    <div className="App">
    <button onClick={this.aggiornoStock}>Nuovo stock</button>
      <p>Applicazione Stock Quote</p>
       { this.state.listastock.map(el => <Stock datistock={el}/>) }
      
      


      {/* 
       <SearchForm onSubmit={this.mostroDatiForm}/>
       <SearchFormA />
       <SearchFormB /> 
       {figliStock}
       <p>Figli Maggiorenni: {this.state.maggiorenne}</p>
       */}

     
    </div>
  );
 }

}

export default App;
