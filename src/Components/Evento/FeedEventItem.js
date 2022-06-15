import React from 'react';
import styles from './FeedEventItem.module.css';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';

const FeedEventItem = ({ event, setModalPhoto }) => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  function showCss(data) {
    const dataPassou = "success"
    const dataNormal = "warning"
    const dataHoje = moment(new Date()).format('YYYY-MM-DD')

    if (data >= dataHoje) {
      return dataPassou;
    } else {
      return dataNormal;
    }
  };

  return (
    <>

      <Button variant={showCss(event.date)} onClick={handleShow}>
        <h6 class="modal-title">{event.name}</h6>
        <p>{moment(event.date).format('DD/MM/YYYY')}</p>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{event.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><b>Descrição: </b> {event.description}</p>
          <p><b>Data:</b> {moment(event.date).format('DD/MM/YYYY')}</p>
          <p><b>Horário:</b> {event.time}</p>
          <p><b>Local:</b> {event.place}</p>
          <p><b className="card-title">Status:</b> {event.status ? 'Ativo' : 'Inativo'}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Editar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedEventItem;
