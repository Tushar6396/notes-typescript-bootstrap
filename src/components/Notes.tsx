import * as React from 'react';
import { Note } from '../models/note.model';
import { Button, Card } from 'react-bootstrap';

interface INotesProps {
  note: Note;
}

const Notes: React.FunctionComponent<INotesProps> = ({ note }) => {
  return (
    <div className='mb-3'>
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle>{note.date}</Card.Subtitle>
          <Button className='mt-3' variant='danger'>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;
