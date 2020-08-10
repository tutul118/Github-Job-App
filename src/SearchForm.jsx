import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default function SearchForm({ params, onChangeParam }) {
    return (
        <div>
            <Form className="mb-4">
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onChange={onChangeParam} value={params.descrption} name="description" type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Location</Form.Label>
                        <Form.Control onChange={onChangeParam} value={params.location} name="location" type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} xs="auto" className="m1-2">
                        <Form.Check onChange={onChangeParam} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" className="mb-2" />
                    </Form.Group>
                </Form.Row>

            </Form>
        </div>
    )
}
