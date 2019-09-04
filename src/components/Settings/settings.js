import React, { Component } from "react";
import * as actionCreators from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(e) {
    const selectedNat = e.target.value;
    this.props.selectUserNat(selectedNat);
  }

  render() {
    return (
      <div className="settings-page">
        <div className="settings-actions">
          <select
            className="browser-default custom-select"
            onChange={this.selectChange}
          >
            <option value="">Choose nationality</option>
            <option value="CH">CH</option>
            <option value="ES">ES</option>
            <option value="FR">FR</option>
            <option value="GB">GB</option>
          </select>

          <Link to={"/"}>
            <button>Go back</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(
  mapStateToProps,
  actionCreators
)(Settings);
