import React, { Component } from 'react';
import Skills from './Skills';
import Config from '../Config';

class Modal extends Component {
  constructor(props) {
    super(props);

    // Cause redux store & state update
    this.state = {
      modal: props.store.getState().App.modal
    };

    props.store.subscribe(() => {
      this.setState({
        modal: props.store.getState().App.modal
      });
    });
  }

  clearModal() {
    this.props.store.dispatch({ type: Config.ACTIONS.APP.MODAL_HIDE, payload: {} });
  }

  componentDidUpdate() {
    // console.log(this.state.modal.skills);
    if (this.state.modal && this.state.modal.body && this.state.modal.body.length > 0 || this.state.modal.skills === true) {
      $('#modal-container').modal({ keyboard: false });
    } 
  }

  getActionButton(modal) {
    return (
      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.clearModal()}>Close</button>
    );
  }

  getSkillsModal() {
    // need to do this without returning.
    this.state.modal.body = <Skills store={this.props.store}/>
    ;
    return {body: this.state.modal.body, title: 'poop'};
  }

  getModalData() {
    if (this.state.modal.skills === true) {
      return this.getSkillsModal();
    } else {
      return this.state.modal;
    }
  }

  render() {
    let modal = this.getModalData();

    modal.title = modal.title || '';

    let action = this.getActionButton(modal);

    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="modal-container">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.clearModal()}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{modal.title}</h4>
            </div>
            <div className="modal-body" dangerouslySetInnerHTML={{__html: modal.body}}>
            </div>
            <div className="modal-footer">
              {action}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
