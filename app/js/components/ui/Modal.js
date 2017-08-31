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

  setSkillsModal() {
    this.state.modal = {
      body: <Skills store={this.props.store}/>,
      title: 'Skills',
      skills: true
    };
  }

  setModalData() {
    if (this.state.modal.skills === true) {
      this.setSkillsModal()
    }
    
    this.state.modal.title = this.state.modal.title || '';
  }
  
  getModalBody() {
    if (typeof this.state.modal.body === 'object') {
      return <div className="modal-body">{this.state.modal.body}</div>;
    } else {
      return <div className="modal-body" dangerouslySetInnerHTML={{__html: this.state.modal.body}}></div>;
    }
  }

  render() {
    this.setModalData();

    let body = this.getModalBody();

    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="modal-container">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.clearModal()}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{this.state.modal.title}</h4>
            </div>
            {body}
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.clearModal()}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
