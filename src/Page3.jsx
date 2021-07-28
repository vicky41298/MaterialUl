import { StylesProvider } from "@material-ui/core";
import React from "react";
const styles = {
  Page3: {
    padding:'50px',
    textAlign: 'centre',
    color: 'Black',
  }
}
export default class Page3 extends React.Component{
  render(){
    return <div style = {styles.Page3}>
      <h1>Gallery</h1>
      <img src={require('./one.jpeg') } alt="Image1" />
      
    </div>
    
  }
}