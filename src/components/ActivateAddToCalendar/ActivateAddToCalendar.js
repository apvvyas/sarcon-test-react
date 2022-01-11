import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import {activateAddToCalendar} from "../../app/activate"; 

const ActivateAddToCalendar = (prop) => {

  const [buttonStatusText, setButtonStatusText] = useState('Activate') ;
  const activate = () => {
    activateAddToCalendar(prop.entry.id).then(() => setButtonStatusText('De-activate'));
  }

  useEffect(() => {
    if(!prop.entry.activate_add_to_calendar){
      setButtonStatusText('De-activate');
    }
  } , []) 

  return (<Button variant="outline-secondary" size="lg" onClick={activate}> {buttonStatusText} Add to calendar</Button>);
};

ActivateAddToCalendar.propTypes = {};

ActivateAddToCalendar.defaultProps = {};

export default ActivateAddToCalendar;
