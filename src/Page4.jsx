import { StylesProvider } from "@material-ui/core";
import React from "react";
const styles = {
  Page4: {
    padding:'50px',
    textAlign: 'centre',
    backgroundColor: '#28462f',
    color: 'white',
  }
}
export default class Page4 extends React.Component{
  render(){
    return <div style = {styles.Page4}>
      <h1>Welcome Home</h1>
      <p>Click on the temporary drawer to navigate through the webpage.</p>
    </div>
  }
}