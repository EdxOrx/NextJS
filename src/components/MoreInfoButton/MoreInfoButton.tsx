import { FC } from 'react';
import {onClickProps} from '@/types';

const MoreInfoButton: FC<onClickProps> = ({onClick}) => {
    return (
        <button
            className="flex items-center gap-2 font-sans absolute bottom-8
                        text-xs font-bold text-center text-gray-900 
                        uppercase align-middle transition-all rounded-lg 
                        select-none disabled:opacity-50 disabled:shadow-none 
                        disabled:pointer-events-none hover:text-gray-600"
            type="button"
            onClick={onClick}
            >
            Mas info
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
            </svg>
        </button>
    );
}

export {MoreInfoButton};
