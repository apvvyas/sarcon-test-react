import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container, Row, Col,ButtonGroup} from 'react-bootstrap';
import Echo from "laravel-echo";
import {getList} from "../../app/list"; 

import ListEntry from '../../components/ListEntry/ListEntry';
import ActivateJoinAsAudience from '../../components/ActivateJoinAsAudience/ActivateJoinAsAudience';
import ActivateJoinAsSpeaker from '../../components/ActivateJoinAsSpeaker/ActivateJoinAsSpeaker';
import ActivateAddToSchedule from '../../components/ActivateAddToSchedule/ActivateAddToSchedule';
import ActivateAddToCalendar from '../../components/ActivateAddToCalendar/ActivateAddToCalendar';

const Admin = () => {

  const [entries, setEntries] = useState([]);

  const buttons = (entry) => {
    return (
      <div className="d-grid gap-2">
      <ButtonGroup aria-label="Basic example"  vertical>
        <ActivateJoinAsAudience entry={entry}/>
        <ActivateJoinAsSpeaker entry={entry}/>
        <ActivateAddToSchedule entry={entry}/>
        <ActivateAddToCalendar entry={entry}/>
      </ButtonGroup>
      </div>
    );
  }

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
            Admin Panel
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-2">
        <Row>
          {entries.map((entry) => {
            return (<Col key={entry.id}><ListEntry data={entry} buttons={() => { return buttons(entry)}}  /></Col>);
          })}
        </Row>
      </Container>
    </div>
  )
};

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
