import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import /*ACTIONSHERE*/ "./actions/actions";

function App() {
  return (
    <div className="App" style={{fontFamily: "Poppins"}}>

      <h2>Primary</h2>
      <span style={{color: "#0E7C7B"}}>Surfie Green: #0E7C7B</span>
      <br />

      <h2>Error</h2>
      <span style={{color: "#BD2020"}}>Thunderbird: #BD2020</span>
      <br />

      <h2>Neutrals</h2>
      <span style={{color: "#000000"}}>White: #FFFFFF</span>
      <br />
      <span style={{color: "#362E34"}}>Thunder: #362E34</span>
      <br />
      <span style={{color: "#F0F0F0"}}>Gallery: #F0F0F0</span>
      <br />
      <span style={{color: "#94909B"}}>Mountain Mist: #94909B</span>
      <br />

      <h2>Font</h2>
      <span>family: Poppins</span>
      <br />

    </div>
  );
}

const mapDispatchToProps = {
  //ACTIONS HERE
};

export default connect(state => {
  console.log(
    "%c vvv PROPS IN LIST",
    "color: green; background: #222; font-size: 24px;",
    state
  );
  console.log(
    "%c ^^^ PROPS IN LIST",
    "color: green; background: #222; font-size: 24px;"
  );
  return state;
}, mapDispatchToProps)(App);
