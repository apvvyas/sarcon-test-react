import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';

const ListEntry = (props) => {

  const [entry, setEntry] = useState(props.data);
  const [buttons, setButton] = useState(props.buttons)

  return (
    <Card style={{ width: '18rem', padding:"0px"}} className="my-2">
      <Card.Img variant="top" src={entry.organiser_photo} />
      <Card.Body>
        <Card.Title>
          {entry.title}
          <br/>
          
        </Card.Title>
        <Card.Text><small>{entry.organiser_name}, {entry.organiser_post}, {entry.organiser_company}</small></Card.Text>
        <Card.Text>
          {entry.description}
        </Card.Text>
        <Card.Text>
        {entry.event_time}, {entry.event_timezone}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        {buttons}
      </Card.Body>
    </Card>
  )
};

ListEntry.propTypes = {};

ListEntry.defaultProps = {};

export default ListEntry;
