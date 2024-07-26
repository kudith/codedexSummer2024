"use client";

import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const ModalContent = styled.div`
  padding: 5px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  color: black;
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CloseButton = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #555;
  }
`;

const EventDetailModal = ({ isOpen, onClose, event }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <ModalContent>
        {event && (
          <>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <CloseButton onClick={onClose}>Close</CloseButton>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default EventDetailModal;