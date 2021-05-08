import React from 'react'
import PropTypes from "prop-types";

//componente con la notazione delle funzioni
//Functional  Stateless Component

const FiglioStock = (props) => {

    return (
        <div>
            <h1>Io sono il Figlio {props.nome}</h1>
            <p>Fondatore: {props.fondatore} </p>
        </div>
    );
}

export default FiglioStock;

FiglioStock.defaultProps = {
    nome: 'ND',
    fondatore: 'ND'
}

FiglioStock.propTypes = {
    nome: PropTypes.string,
    fomndatore: PropTypes.string
}

//Types
//string, array, bool, func, number, object, func.isRequired -> check se il campo è obbligatorio

