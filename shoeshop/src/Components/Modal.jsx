import React, { Component } from "react";

export default class Modal extends Component {

  render() {
    const {content}=this.props;
    return (
      <div>
        <div
          className="modal fade"
          id="modalId"
          tabIndex={-1}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                 {content.name}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <img className="w-100" src={content.image} alt="" />
                <h6>Description</h6>
                <p>{content.description}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                
              </div>
            </div>
          </div>
        </div>
        {/* Optional: Place to the bottom of scripts */}
      </div>
    );
  }
}
