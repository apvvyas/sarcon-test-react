import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {activateAddToMySchedule} from "../../app/activate"; 

const ActivateAddToSchedule = (prop) => {
  const [buttonStatusText, setButtonStatusText] = useState('Activate') ;
  const activate = () => {
    activateAddToMySchedule(prop.entry.id).then(() => setButtonStatusText('De-activate'));
  } 

  useEffect(() => {
    if(!prop.entry.activate_add_to_my_schedule){
      setButtonStatusText('De-activate');
    }
  } , []) 

  return (<Button variant="outline-secondary" size="lg" onClick={activate}> {buttonStatusText} Add to schedule</Button>);
};

ActivateAddToSchedule.propTypes = {};

ActivateAddToSchedule.defaultProps = {};

export default ActivateAddToSchedule;
