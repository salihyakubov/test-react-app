import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import { fetchPersons } from './asyncActions/fetchPersons';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [name , setName] = useState('');
  const [image , setImage] = useState('');
  const [email , setEmail] = useState('');
  const [skills , setSkills] = useState('');




  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons.persons);

  useEffect(() => {
    dispatch(fetchPersons());
  }, [dispatch]);

  const deletefunc = (id) => {
    dispatch({type: 'DELETE_PERSON', payload: id})
  }
  const addPerson = useCallback((e) => {
    e.preventDefault()
    const newPerson = {
      name:name,
      email:email,
      permissions:
        skills
      ,
      image:image}
      console.log(newPerson)

      dispatch({type: 'ADD_PERSON', payload: {newPerson}})

  },[name, email, image, skills, dispatch]) 
   

  return (
    <div className="App">
      <div className="Team">
      <Form style={{padding:'30px',width:'500px', margin:'1px auto'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'black'}}>Имя</Form.Label>
        <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Введите имя" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'black'}}>Email</Form.Label>
        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Введите email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'black'}}>Ссылка на картинку</Form.Label>
        <Form.Control value={image} onChange={(e) => setImage(e.target.value)} type="text" placeholder="Ссылка" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'black'}}>Навыки</Form.Label>
        <Form.Control value={skills} onChange={(e) => setSkills(e.target.value)} type="text" placeholder="Укажите навыки" />
      </Form.Group>

      <Button onClick={addPerson} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        {persons.length <= 0 ? (
          <h1>Нету никого</h1>
        ) : (
          persons.map((person) => (
            <div key={person.email} className="person-item">
              <img className="person-image" src={person.image} alt={person.name} />
              <div className="person-details">
                <h2 className="person-name">{person.name}</h2>
                <p className="person-email">{person.email}</p>
              </div>
              <div>
                {person.permissions.map(per => <p className="person-email">{per}</p>)}
              

              </div>
              <div>
              <Button variant="success">Редактировать</Button>{' '}
              <Button onClick={() => deletefunc(person.email)} variant="danger">Удалить</Button>{' '}

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
