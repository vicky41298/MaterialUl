import { StylesProvider } from "@material-ui/core";
import React from "react";
const styles = {
  Page3: {
    padding:'50px',
    textAlign: 'centre',
    backgroundColor: '#28462f',
    color: 'white',
  }
}
export default class Page3 extends React.Component{
  render(){
    return <div style = {styles.Page3}>
      <h1>Gallery</h1>
      <p>Click on the temporary drawer to navigate through the webpage.</p>
    </div>
  }
}