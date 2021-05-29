import React, { Component } from "react";

class LifecycleB extends Component {
    // constructor method (1)
  constructor(props) {
    super(props);
    this.state = {
      name: " Younis",
    };
    console.log("LifeCycleB  consttructor ");
  }

  // method (2)
  static getDerivedStateFromProps (props, state) {
    console.log("lifeCycleB getDerivedStateFromProps");
    return null
  }

  // metode 4

  componentDidMount() {
      console.log("LifecycleB compontDidMount");
  }

  render() {
      // metod (3)
      console.log('LifeCycleB render');
    return <div>LifeCycle B</div>;
  }
}

export default LifecycleB;
