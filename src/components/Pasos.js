import React, { Component } from "react";

class Pasos extends Component {
  render() {

    return (
      <div className="pasos">

        <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial}</ul>

      </div>
    );
    
  }
}

export default Pasos;
