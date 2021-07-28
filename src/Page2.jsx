import { StylesProvider } from "@material-ui/core";
import React from "react";
const styles = {
  Page2: {
    padding:'50px',
    textAlign: 'centre',
    backgroundColor: '#28462f',
    color: 'white',
  }
}
export default class Page2 extends React.Component{
  render(){
    return <div style = {styles.Page2}>
      <h1>Welcome</h1>
      <h2>Title</h2>
    </div>
  }
}