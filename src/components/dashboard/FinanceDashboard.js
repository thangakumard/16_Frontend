import React from "./node_modules/react";
import DatePicker from "./node_modules/react-datepicker";
import "./node_modules/react-datepicker/dist/react-datepicker.css";

class FinanceDashboard extends React.Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date });
  render() {
    return (
      <div className="assignment-form">
        <div className="row">
          <div className="col-sm-10">
            <div>From</div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChange}
            />
            <div>To</div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChange}
            />

          </div>
          <div className="col-sm-2">
            <div></div>
          </div>
        </div>
        <div className="buttonPanel">
          <div className="row">
            <div className="col-sm-1">
              <button
                type="submit"
                className="btn btn-secondary"
              >
                Create Category
                </button>
            </div>
            <div className="col-sm-1">
              <button
                type="submit"
                className="btn btn-info"
              >
                Create Transaction
                </button>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default FinanceDashboard;