import React, { Component } from 'react';
import InventoryList from './modals/InventoryList';
import SkillsList from './modals/SkillsList';
import SpellBook from './modals/SpellBook';
import PlayerStats from './modals/PlayerStats';
import Store from './modals/Store';
import ContainerActions from './modals/ContainerActions';
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

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.props.store.unsubscribe();
  }

  clearModal() {
    if ((typeof this.state.modal.body === 'string' && this.state.modal.body.length > 0) || typeof this.state.modal.body === 'object') {
      this.props.store.dispatch({ type: Config.ACTIONS.APP.MODAL_HIDE, payload: {} });
    }
  }

  componentDidUpdate() {
    if ((typeof this.state.modal.body === 'string' && this.state.modal.body.length > 0) || typeof this.state.modal.body === 'object') {
      $('#modal-container').modal();
    }

    $('#modal-container').on('hide.bs.modal', () => {
      this.clearModal();
    });      
  }

  setSkillsModal() {
    this.state.modal = {
      body: <SkillsList store={this.props.store}/>,
      title: 'Skills',
      type: 'skills'
    };
  }

  setSpellBookModal() {
    this.state.modal = {
      body: <SpellBook store={this.props.store}/>,
      title: 'Spell Book',
      type: 'spells'
    };
  }

  setPlayerStatsModal() {
    this.state.modal = {
      body: <PlayerStats store={this.props.store}/>,
      title: 'Player Stats',
      type: 'player_stats'
    };
  }

  setInventoryModal() {
    this.state.modal = {
      body: <InventoryList store={this.props.store}/>,
      title: 'Inventory',
      type: 'inventory'
    };
  }

  setStoreModal() {
    this.state.modal = {
      body: <Store store={this.props.store} data={this.state.modal.data}/>,
      title: (this.state.modal && this.state.modal.data && this.state.modal.data.name) ? this.state.modal.data.name : '',
      type: 'store'
    };
  }

  setContainerActionsModal() {
    let mob = this.state.modal.data;

    if (mob) {
      this.state.modal = {
        body: <ContainerActions store={this.props.store} data={mob}/>,
        title: 'Container',
        type: 'container_actions'
      };
    }
  }

  setModalData() {
    switch (this.state.modal.type) {
      case 'skills':
        this.setSkillsModal();
      break;
      case 'spells':
        this.setSpellBookModal();
      break;
      case 'inventory':
        this.setInventoryModal();
      break;
      case 'player_stats':
        this.setPlayerStatsModal();
      break;
      case 'container_actions':
        this.setContainerActionsModal();
      break;
      case 'store':
        this.setStoreModal();
      break;
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
