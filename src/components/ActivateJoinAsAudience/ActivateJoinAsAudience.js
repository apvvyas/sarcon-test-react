import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {activateJoinAsAudience} from "../../app/activate"; 

const ActivateJoinAsAudience = (prop) => {

  const [buttonStatusText, setButtonStatusText] = useState('Activate') ;
  const activate = () => {
    activateJoinAsAudience(prop.entry.id).then(() => setButtonStatusText('De-activate'));
  } 

  useEffect(() => {
    if(!prop.entry.activate_join_as_audience){
      setButtonStatusText('De-activate');
    }
  } , []) 

  return(<Button variant="outline-secondary" size="lg" onClick={activate}> {buttonStatusText} Join As Audience</Button>);
};

ActivateJoinAsAudience.propTypes = {};

ActivateJoinAsAudience.defaultProps = {};

export default ActivateJoinAsAudience;
