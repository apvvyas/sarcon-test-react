import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {activateJoinAsSpeaker} from "../../app/activate"; 

const ActivateJoinAsSpeaker = (prop) => {
  
  const [buttonStatusText, setButtonStatusText] = useState('Activate') ;
  const activate = () => {
    activateJoinAsSpeaker(prop.entry.id).then(() => setButtonStatusText('De-activate'));
  } 

  useEffect(() => {
    if(!prop.entry.activate_join_as_speaker){
      setButtonStatusText('De-activate');
    }
  } , []) 

  return (<Button variant="outline-secondary" size="lg" onClick={activate}> {buttonStatusText} Join As Speaker</Button>)
};

ActivateJoinAsSpeaker.propTypes = {};

ActivateJoinAsSpeaker.defaultProps = {};

export default ActivateJoinAsSpeaker;
