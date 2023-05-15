import { Component } from "react";
import PropTypes from "prop-types";
class Filter extends Component {


    render() {
      return (
          <input type="text" name="filter" value={this.props.value} onChange={this.props.onChange}/>
      )
    }
}

export default Filter;

Filter.propTypes = {
    value:PropTypes.string,
    onChange:PropTypes.func
}