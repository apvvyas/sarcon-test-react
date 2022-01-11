import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container, Row, Col,ButtonGroup} from 'react-bootstrap';
import Echo from "laravel-echo";
import {getList} from "../../app/list"; 

import ListEntry from '../../components/ListEntry/ListEntry';
import JoinAsAudience from '../../components/JoinAsAudience/JoinAsAudience';
import JoinAsSpeaker from '../../components/JoinAsSpeaker/JoinAsSpeaker';
import AddToSchedule from '../../components/AddToSchedule/AddToSchedule';
import AddToCalendar from '../../components/AddToCalendar/AddToCalendar';

const Frontend = () => {

  const [entries, setEntries] = useState([]);

  const buttons = (id) => {
    return (
      <div className="d-grid gap-2">
      <ButtonGroup aria-label="Basic example"  vertical>
        <JoinAsAudience/>
        <JoinAsSpeaker />
        <AddToSchedule/>
        <AddToCalendar/>
      </ButtonGroup>
      </div>
    );
  }

  window.pusher = require('pusher-js')
  window.Echo = new Echo({
    broadcaster: 'pusher',
    key: 'happy',
    wsHost: '127.0.0.1',
    wsPort: 6001,
    forceTLS: false,
    disableStats: true
  })

  useEffect(() => {
    getList().then((response) => {
      setEntries(response.data.data);
    })
  },[]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            Day 1 hall A - Cyber Security Conference
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Row>
          {entries.map((entry) => {
            return (<Col key={entry.id}><ListEntry data={entry} buttons={() => {return buttons(entry.id)}} /></Col>);
          })}
        </Row>
      </Container>
    </div>
  )
};

Frontend.propTypes = {};

Frontend.defaultProps = {};

export default Frontend;
