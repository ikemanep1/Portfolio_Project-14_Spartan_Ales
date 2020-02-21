import React from 'react';
import ConfirmationAdd from './ConfirmationAdd';
import AleAdd from './AleAdd';
import PropTypes from "prop-types";

class NewAleControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.AddConfirmation = this.AddConfirmation.bind(this);
  }

  AddConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <AleAdd onNewAleCreation={this.props.onNewAleCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationAdd onAddConfirmation={this.AddConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewAleControl.propTypes = {
  onNewAleCreation: PropTypes.func
};

export default NewAleControl;
