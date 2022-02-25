import { useEffect, useState } from "react";
import { Modal, Form } from "react-bootstrap";

export default function ModalUser(props) {
  const { showModal, handleHideModal, btnAdd, editData, handleCreateUser, handleToast, setMessToast, handleEditUser} = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setName(editData.name)
    setCity(editData.city)
    setEmail(editData.email)
  },[editData])

  const onSave = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      city
    }
    if(btnAdd){
      handleCreateUser(data)
      handleHideModal()
      handleToast()
      setMessToast("You have been add user successful!!!")
    }else{
      handleEditUser(data, editData.id)
      handleHideModal()
      handleToast()
      setMessToast("You have been edited user successful!!!")
    }
  }

  return (
    <Modal show={showModal} onHide={handleHideModal} onSubmit={onSave} centered>
      <Modal.Header closeButton>
        <Modal.Title>{btnAdd ? "Add user" : "Edit user"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="name..."
              onChange={(e) => {
                setName(e.target.value);
              }}
              defaultValue={btnAdd ? "" : name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="city..."
              onChange={(e) => {
                setCity(e.target.value);
              }}
              defaultValue={btnAdd ? "" : city}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="email..."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              defaultValue={btnAdd ? "" : email}
            />
          </Form.Group>
          <Modal.Footer>
            <p className="btn btn-secondary" onClick={handleHideModal}>
              cancel
            </p>
            <button className="btn btn-primary float-end" type="submit">
              {btnAdd ? "Add user" : "Update"}
            </button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
