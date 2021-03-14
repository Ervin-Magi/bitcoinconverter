import {BrowserRouter as Router} from "react-router-dom";
import React, { useState, useEffect } from "react";
import {Button, Form, Card} from "react-bootstrap";
import Confirm from './Confirm';
import axios from 'axios';

const Comment = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/notes')
            .then(response => {
                setNotes(response.data)
            })
    }, [])

    const [newNote, setNewNote] = useState('')
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const addNote = event => {
        event.preventDefault()
        if (newNote.length > 0) {
            setSuccess('Lähetetty')
            setError('')
            const noteObject = {
                content: newNote,
                date: new Date().toISOString(),
                important: false,
            }

            axios
                .post('http://localhost:3000/notes', noteObject)
                .then(
                    setNewNote('')
                )
        } else {
            setSuccess('')
            setError("Tyhjä kommentti")
        }
    }

    const changeNewNote = event => {
        setNewNote(event.target.value)
    }

    return(
        <Router>
            <div className="container">
                <h2>Kommentit</h2>
            </div>
            <div className="container">
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Jätä kommentti" onChange={changeNewNote} value={newNote}/>
                </Form.Group>
                {error && <div>{error}</div>}
                {success && <div>{success}</div>}
                <Button variant="primary" size="lg" block onClick={addNote}>
                    Jätä kommentti
                </Button>
                <br />
            </div>
            <div className="container">
                {notes.map(note => {
                    return (
                        <Card>
                            <Card.Header><span className="material-icons">comment</span> {note.date}</Card.Header>
                            <Card.Body>
                                <Card.Title>{note.content}</Card.Title>
                                <Button variant="primary" >Edit</Button>{' '}
                                <Confirm
                                    onConfirm={() => {
                                        alert('Confirmed');
                                    }}
                                    body="Haluatko varmasti poistaa tämän?"
                                    confirmText="Vahvista poistaminen"
                                    title="Poista">
                                    <Button variant="primary" >Poista</Button>
                                </Confirm>
                            </Card.Body>
                            <br />
                        </Card>
                    )
                })}
                <br />
            </div>
        </Router>
    )
}

export default Comment;
