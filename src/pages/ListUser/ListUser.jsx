import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./ListUser.thunks";
import MainLayout from "../../layouts/mainContent/MainLayout";
import ModalUser from "../../components/Modal/ModalUser";
import {
  Toast,
  ToastContainer,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import "./ListUser.scss";

export default function ListUser() {
  const dispatch = useDispatch();
  const users = useSelector((state) => ({
    listUser: state.user.listUser,
  }));

  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [messToast, setMessToast] = useState("");
  const [editData, setEditData] = useState({});
  const [btnAdd, setBtnAdd] = useState(false);

  useEffect(() => {
    dispatch(actions.getAllUser());
  }, []);

  const handleHideModal = () => {
    setShowModal(false);
    setBtnAdd(false);
  };
  const handleToast = () => setShowToast(!showToast);
  const handleCreateUser = (user) => {
    dispatch(actions.createUser(user));
  };
  const handleEditUser = (user,id) => {
    dispatch(actions.handleEditUser(user,id))
  }
  const handleDeleteUser = (id) => {
    setShowToast(true)
    setMessToast("You have been deleted successful!!!")
    dispatch(actions.deleteUser(id))
  }

  const popover = (id) => (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Are you sure delete this user?</Popover.Header>
      <Popover.Body>
        <button className="btn btn-secondary me-5 ms-2 ">cancel</button>
        <button className="btn btn-primary ms-5 " onClick={() => {handleDeleteUser(id)}}>oke</button>
      </Popover.Body>
    </Popover>
  );

  

  return (
    <MainLayout>
      <div className="py-3">
        <span className="fs-4 me-2 ms-3">Data Tables</span>
        <span className="opacity-50">advanced tables</span>
      </div>
      <div className="px-3 pt-1 user__table">
        <div className="px-3 bg-white pb-5 rounded-3">
          <div className="d-flex justify-content-between py-3 bg-white">
            <b className="fs-4">ListUser</b>
            <button
              className="btn btn-primary"
              onClick={() => {
                setBtnAdd(true);
                setShowModal(true);
              }}
            >
              Add user
            </button>
          </div>
          <table className="table table-hover table-bordered text-break text-center bg-white p-2">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>City</th>
                <th>Email</th>
                <th className="actions">Actions</th>
              </tr>
            </thead>
            <tbody className="table-user">
              {users.listUser.map((item, index) => (
                <tr key={item.id}>
                  <th>{index + 1}</th>
                  <th>{item.name}</th>
                  <th>{item.city}</th>
                  <th>{item.email}</th>
                  <th className="actions">
                    <OverlayTrigger
                      trigger="click"
                      placement={"top"}
                      rootClose
                      overlay={popover(item.id)}
                    >
                      <button className="btn btn__delete border me-2 btn__actions btn__actions--delete">
                        <i className="fas fa-trash me-1"></i>Delete
                      </button>
                    </OverlayTrigger>
                    <button
                      type="button"
                      className="btn btn__edit border px-3 ms-2 btn__actions btn__actions--edit"
                      onClick={() => {
                        setEditData(item);
                        setShowModal(true);
                      }}
                    >
                      <i className="fad fa-user-edit me-1"></i>
                      Edit
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer position="top-end" className="p-3 mt-4 fixed">
        <Toast show={showToast} onClose={handleToast} bg={"info"} delay={3000} autohide>
          <Toast.Header>
            <i className="fas fa-bell me-2"></i>
            <strong className="me-auto"> Notification</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body><b>{messToast}</b></Toast.Body>
        </Toast>
      </ToastContainer>

      <ModalUser
        showModal={showModal}
        handleHideModal={handleHideModal}
        handleToast={handleToast}
        editData={editData}
        btnAdd={btnAdd}
        handleCreateUser={handleCreateUser}
        handleEditUser = {handleEditUser}
        setMessToast={setMessToast}
      />
    </MainLayout>
  );
}
