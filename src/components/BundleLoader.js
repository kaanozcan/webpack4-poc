import React, { Component } from "react";

class BundleLoader extends Component {
  state = {
    mod: null
  }

  componentWillMount () {
    this.load(this.props);
  }

  load (props) {
    if (process.env.browser) {
      //On browser load module async
      props.resolve()
        .then((mod) => this.setState({
          mod: mod.default
        }));
    }
  }

  render () {
    if (process.env.browser) {
      return this.state.mod ? this.props.children(this.state.mod) : null;
    } else {
      //On server load module sync
      return this.props.children(this.props.resolveSync());
    }
  }
}

export default BundleLoader;
