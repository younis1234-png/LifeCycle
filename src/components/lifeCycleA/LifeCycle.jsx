import React, { Component } from "react";
import LifecycleB from "./LifeCycleB";

class LifecycleA extends Component {
  // constructor method (1)
  constructor(props) {
    super(props);
    this.state = {
      name: " Younis",
    };
    console.log("LifeCycleA  consttructor ");
  }

  // method (2)
  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycleA getDerivedStateFromProps");
    return null;
  }

  // metode 4

  componentDidMount() {
    console.log("LifecycleA compontDidMount");
  }

  render() {
    // metod (3)
    console.log("LifeCycleA render");
    return (
      <>
        <div>LifeCycle A</div>
        <LifecycleB />
      </>
    );
  }
}

export default LifecycleA;
