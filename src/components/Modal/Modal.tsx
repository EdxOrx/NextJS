import { FC, useEffect, useState } from 'react';
import {ModalProps, DoctorFullProps} from '@/types'
import isEmpty from 'lodash/isEmpty';
import { Address } from '@/components/Address';
import map from 'lodash/map';
import { Tabs } from '@/components/Tabs';
import { Header3 } from '@/components/Headers/Header3';

const Modal: FC<ModalProps> = ({onClose, doctorId}) => {
    const [doctor, setDoctor] = useState<DoctorFullProps|null>(null);
    
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctors/${doctorId}`)
            .then(response => response.json())
            .then(data => {
                setDoctor(data);
            })
    }, [doctorId]);

    return (
        <div id="default-modal" tabIndex={-1} aria-hidden="true" className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity"></div>
            <div className="relative p-4 w-full max-w-2xl max-h-full">
            
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <Header3 title={`${doctor?.profession}: ${doctor?.name}`}/>
                        <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {doctor?.experience}

                        </p>
                        {
                            !isEmpty(doctor?.addresses) && map(doctor?.addresses, (address) => {
                                return (
                                    <Address key={address?.id} {...address} />
                                );
                            })
                        }
                        {
                            !isEmpty(doctor?.tabs) && <Tabs data={doctor?.tabs} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Modal};
