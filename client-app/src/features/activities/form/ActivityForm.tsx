import React from 'react';
import { Segment, Form } from 'semantic-ui-react';

const ActivityForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.TextArea row={2} placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
            </Form>
        </Segment>
    )
}

export default ActivityForm; 