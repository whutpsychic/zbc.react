import React from "react";
import "./App.css";

import { connect } from "react-redux";
import { addnum } from "./actions";

class App extends React.Component {
  render() {
    // const { num } = this.state;
    const { num } = this.props;

    console.log(num)
    return (
      <section>
        <div onClick={this.onclickdiv1}>{11}</div>
        <div>{22}</div>
        <div>{33}</div>
      </section>
    );
  }

  onclickdiv1 = () => {
    const { onOutsideRedux } = this.props;
    onOutsideRedux(1);
    // console.log(this.state);
  };
}

const mapStateToProps = (state, props) => {
  console.log(state);
  // console.log(props);
  return {
    num:state.addNumber
  }
};

const mapDispatchToProps = (dispatch, props) => {
  // console.log(dispatch);
  // console.log(props);

  return {
    onOutsideRedux: v => {
      dispatch(addnum(v));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
