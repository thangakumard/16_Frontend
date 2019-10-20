import React from "./node_modules/react";

class TimeDashboard extends React.Component {

  render() {
    return (
        <div className="assignment-form">
          <div className="row">
            <div className="col-sm-10">
              <button
                type="button"
                className="buttonlink"
              >
                Project Link
              </button>
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
                  Create transaction
                </button>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}


export default TimeDashboard;