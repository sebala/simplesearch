import React, { Component, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Header from "./layout/Header";

import ListDividers from "./layout/ListItems";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch'
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5722' //your color
	  
    }
  }
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {"tags":[]};
  }
  render() {
	var tags = this.state.tags;
	
    return (
		<Fragment>	
			<Header/>
			<Box
				
				position="relative"
				mx="auto"
				p={10}
			  >
					<TextField
					  style={{
						backgroundColor: "#f2f6f7"
                      }}
					  id="standard-multiline-static"
					  label="Search"
					  multiline
					  rows="10"
					  fullWidth
					  inputProps={{style: {fontSize: 22}}}
					  onChange={this.onChange}
					  defaultValue=" "
					  variant='outlined'
					/>
				<ListDividers tags={tags}/>
			</Box>

		</Fragment>
    );
  }

  onChange = (evt) => {
	console.log(evt.target.value);
	fetch('http://localhost:8000/query/', {
	  method: 'POST',
	  headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify({
		text: evt.target.value,
	  })
	}).then(res => res.json())
	.then((data) => {
	  console.log(data);
	  this.setState(data);
	})
	.catch(console.log);
  }

}

export default App;