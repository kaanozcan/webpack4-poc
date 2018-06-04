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
      props.resolve()
        .then((mod) => this.setState({
          mod: mod.default ? mod.default : mod
        }));
    }
  }

  render () {
    if (process.env.browser) {
      //On browser load module async
      return this.state.mod ? this.props.children(this.state.mod) : null;
    } else {
      //On server load module sync
      return this.props.children(this.props.require());
    }
  }
}

export default BundleLoader;
