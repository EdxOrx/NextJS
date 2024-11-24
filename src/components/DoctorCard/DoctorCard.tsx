import { FC } from 'react';
import { DoctorCardProps } from '@/types';
import { Address } from '@/components/Address';
import Image from "next/image";
import map from 'lodash/map';
import isEmpty from 'lodash/isEmpty';
import { MoreInfoButton } from '../MoreInfoButton';
import { Header4, Header6 } from '../Headers';

const DoctorCard: FC<DoctorCardProps> = ({id, profession, name, experience, image, addresses, openModal}) => {
    return (
        <div className="w-3/6 mx-auto">
            
            <div className="relative flex bg-clip-border rounded-xl 
                          bg-white text-gray-700 shadow-md w-full 
                            max-w-[48rem] flex-row"
            >
                <div className="relative w-2/5 m-0 overflow-hidden 
                              text-gray-700 bg-white rounded-r-none 
                                bg-clip-border rounded-xl shrink-0"
                >
                    <Image
                        src={`/images/${image}`}
                        alt="card-image" 
                        className="object-cover w-full h-full" 
                        width={200} 
                        priority={true}
                        height={200}/>
                </div>
                <div className="p-6 overflow-hidden">
                    <Header6 title={profession}/>
                    <Header4 title={name}/>
                    <p className="block mb-8 font-sans text-base antialiased 
                                  font-normal leading-relaxed text-gray-700"
                    >
                        {experience}
                    </p>

                    {
                        !isEmpty(addresses) && map(addresses, (address) => {
                            return (
                                <Address key={address?.id} {...address} />
                            );
                        })
                    }
                
                    <MoreInfoButton onClick={() => openModal(id)}/>
                </div>
            </div>
        </div>
    );
}

export {DoctorCard};
