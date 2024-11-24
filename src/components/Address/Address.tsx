import { FC } from 'react';
import { AddressProps } from '@/types';

const Address: FC<AddressProps> =  ({address, phone_number}) => {

    return (
        <div className="text-xs  mb-2">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">{address}</p>
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">Telefono: {phone_number}</p>
        </div>
    )
}

export {Address};