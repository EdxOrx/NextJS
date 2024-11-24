"use client";

import React, { useState, ReactElement, Fragment } from "react";
import { DoctorProps } from "@/types";
import map from 'lodash/map';
import { DoctorCard } from "@/components/DoctorCard";
import { Modal } from "@/components/Modal";

interface DoctorListProps {
  doctors: DoctorProps[];
}

const DoctorList: React.FC<DoctorListProps> = ({ doctors }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  
    const openModal = (id: number) => {
      setSelectedDoctor(id);
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setSelectedDoctor(null);
      setModalOpen(false);
    };
  
    return (
      <Fragment>
        {
            map(doctors, (doctor: DoctorProps): ReactElement => {
            return <DoctorCard key={doctor?.id} {...doctor} openModal={openModal}/>
            })
        }
  
        {isModalOpen && selectedDoctor && (
          <Modal onClose={closeModal} doctorId={selectedDoctor}/>
        )}
      </Fragment>
    );
};
  
export {DoctorList};
