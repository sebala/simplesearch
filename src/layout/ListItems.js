import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function HitItem(i, model){
	//const classes = useStylesHitItem();
	return (
		<Fragment key={i}>
			<Box m={6}>
			  <Typography color="textSecondary" gutterBottom>
				  {model.prob}%
				</Typography>
				<Typography variant="h6" component="h5">
				  {model.text}
				</Typography>
			</Box>
		</Fragment>		
	);
}
export default function ListDividers(props) {
	const classes = useStyles();
	const tags = props.tags;
	const listItems = tags.map((model, i) => HitItem(i, model));
	return (
		<List component="nav" className={classes.root} >
		  {listItems}
		</List>
  );
}
