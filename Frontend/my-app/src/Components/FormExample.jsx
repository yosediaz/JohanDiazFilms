import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombreyApellido: '',
    correo: '',
    teléfono: '',
    localidad: '',
    fechaDelEvento: '',
    cuentanosDeTuEvento: '',
    google: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    try {
      const response = await axios.post('https://backend-deploy-w305.onrender.com/', formData);

      if (response.status === 200) {
        alert('Usuario creado exitosamente');
        // Limpia el formulario después de un envío exitoso
        setFormData({
          nombreyApellido: '',
          correo: '',
          teléfono: '',
          localidad: '',
          fechaDelEvento: '',
          cuentanosDeTuEvento: '',
          google: false,
        });
      } else {
        alert('Error al crear el usuario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario');
    }

    setValidated(true);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='formExample'>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="nombreyApellido">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            name="nombreyApellido"
            required
            type="text"
            placeholder="Nombre y Apellido"
            value={formData.nombreyApellido}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            El nombre y apellido son obligatorios.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="correo">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            name="correo"
            required
            type="email"
            placeholder="Correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            El correo es obligatorio y debe ser válido.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="teléfono">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            name="teléfono"
            required
            type="text"
            placeholder="Teléfono"
            value={formData.teléfono}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            El teléfono es obligatorio.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="localidad">
          <Form.Label>Localidad</Form.Label>
          <Form.Control
            name="localidad"
            type="text"
            placeholder="Localidad"
            required
            value={formData.localidad}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            La localidad es obligatoria.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="fechaDelEvento">
          <Form.Label>Fecha del Evento</Form.Label>
          <Form.Control
            name="fechaDelEvento"
            type="text"
            placeholder="Fecha del Evento"
            required
            value={formData.fechaDelEvento}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            La fecha del evento es obligatoria.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="cuentanosDeTuEvento">
        <Form.Label>Cuéntanos de tu Evento</Form.Label>
        <Form.Control
          name="cuentanosDeTuEvento"
          as="textarea"
          required
          placeholder="Cuéntanos de tu Evento"
          value={formData.cuentanosDeTuEvento}
          onChange={handleInputChange}
        />
        <Form.Control.Feedback type="invalid">
          Este campo es obligatorio.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check
          name="google"
          label="¿Usar Google?"
          checked={formData.google}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button type="submit">Enviar formulario</Button>
    </Form>
  );
}

export default FormExample;
