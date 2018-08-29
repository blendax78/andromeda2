import React, { Component } from 'react';
import InventoryList from './InventoryList';
import SkillsList from './SkillsList';
import SpellBook from './SpellBook';
import PlayerStats from './PlayerStats';
import Store from './Store';
import Container from './Container';
import Combat from './Combat';
import Config from '../../Config';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: props.store.getState().App.modal
    };

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        modal: props.store.getState().App.modal
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
  }

  clearModal() {
    if ((typeof this.state.modal.body === 'string' && this.state.modal.body.length > 0) || typeof this.state.modal.body === 'object') {
      this.props.store.dispatch({ type: Config.ACTIONS.APP.MODAL_HIDE, payload: {} });
    }
  }

  componentDidUpdate() {
    let options = {
      keyboard: false,
      backdrop: 'static'
    };

    if ((typeof this.state.modal.body === 'string' && this.state.modal.body.length > 0) || typeof this.state.modal.body === 'object') {
      $('#modal-container').modal(options);
    }
  }

  componentDidMount() {
    this.modalEvent = $('#modal-container').on('hide.bs.modal', () => {
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

  setCombatModal() {
    // this is being constantly run, so it's always locked
    this.state.modal = {
      body: <Combat store={this.props.store}/>,
      title: 'Combat',
      type: 'combat',
      locked: this.props.store.getState().App.modal.locked
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

  setContainerModal() {
    let container = this.state.modal.data;

    if (container) {
      this.state.modal = {
        body: <Container store={this.props.store} data={container}/>,
        title: container.title,
        type: 'container'
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
      case 'store':
        this.setStoreModal();
      break;
      case 'combat':
        this.setCombatModal();
      break;
      case 'container':
        this.setContainerModal();
      break;
    }
    
    this.state.modal.title = this.state.modal.title || '';
  }
  
  getModalBody() {
    if (typeof this.state.modal.body === 'object') {
      return <div className="modal-body">{this.state.modal.body}</div>;
    } else if (typeof this.state.modal.body !== 'boolean') {
      return <div className="modal-body" dangerouslySetInnerHTML={{__html: this.state.modal.body}}></div>;
    }
  }

  render() {
    this.setModalData();

    let body = this.getModalBody();
    let closeButton = (this.state.modal.locked) ? '' : (
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.clearModal()}>Close</button>
      </div>
    );

    let closeX = (this.state.modal.locked) ? '' : (
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.clearModal()}>
        <span aria-hidden="true">&times;</span>
      </button>
    );

    return (
      <div className="modal fade" tabIndex="-1" role="dialog" id="modal-container">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              {closeX}
              <h4 className="modal-title">{this.state.modal.title}</h4>
            </div>
            {body}
            {closeButton}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
