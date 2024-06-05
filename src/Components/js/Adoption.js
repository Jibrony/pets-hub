import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
import { petsForAdoption } from './AdoptionList'; // Asegúrate de que este archivo exporte correctamente el arreglo de mascotas
import '../css/Pets.css';
import BackgroundImage from './Background';

function PetCard({ pet }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ height: '100%', margin: '0 10px' }}>
        <Card.Img variant="top" src={pet.image} alt={pet.name} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title className="text-center" style={{marginBottom: '5px'}}>{pet.name}</Card.Title>
            <Card.Text className='text-center' style={{marginBottom: '10px'}}>{pet.age} / {pet.gender}</Card.Text>
          </div>
          <Button variant="primary" className="align-self-center" onClick={handleOpenModal}>Ver Detalles</Button>
        </Card.Body>
      </Card>

      {/* Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{pet.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Raza: {pet.breed}</p>
          <p>Edad: {pet.age}</p>
          <p>Descripción: {pet.description}</p>
          <p>Género: {pet.gender}</p>
          <p>Tamaño: {pet.size}</p>
          <p>Vacunado: {pet.vaccinated ? 'Sí' : 'No'}</p>
          <p>Desparasitado: {pet.dewormed ? 'Sí' : 'No'}</p>
          <p>Esterilizado: {pet.neutered ? 'Sí' : 'No'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Adoption() {
  return (
    <div>
      <Navbar />
      <BackgroundImage src="https://i.ibb.co/Sn9YBC4/fondo-pets-hub.jpg" />
      <h1 className="text-center mt-4 mb-4">MASCOTAS EN ADOPCIÓN</h1>
      <div className="container">
        <div className="row justify-content-center">
          {petsForAdoption.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adoption;
