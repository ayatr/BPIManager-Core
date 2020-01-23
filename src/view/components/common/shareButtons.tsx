import * as React from 'react';
import Grid from '@material-ui/core/Grid';
const {LineShareButton,LineIcon,TwitterShareButton,TwitterIcon} = require('react-share');

export default class ShareButtons extends React.Component<{withTitle:boolean,url?:string},{}> {

  render(){
    return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={2}>
        <LineShareButton url={this.props.url || window.location.href}>
            <LineIcon size={32} round />
        </LineShareButton>
      </Grid>
      <Grid item xs={2}>
        <TwitterShareButton url={this.props.url || window.location.href} title={this.props.withTitle ? "BPIManagerを使っています:" : ""}>
            <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Grid>
    </Grid>
    );
  }
}