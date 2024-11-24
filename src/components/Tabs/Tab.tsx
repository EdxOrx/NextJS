import { FC } from "react";
import dynamic from 'next/dynamic'

  
const Tab: FC = ({title, isActive, onClick}) => {
    const titleFormated = title && title.charAt(0).toUpperCase() + title.slice(1);
    const handleOnClick = () => onClick(title);

    return (
        <li className="me-2">
            <a href="#" className={`inline-flex items-center justify-center p-4 border-b-2 
                                   border-transparent rounded-t-lg hover:text-gray-600 
                                   hover:border-gray-300 dark:hover:text-gray-300 group 
                                   ${isActive && 'border-gray-300'}`}
                onClick={handleOnClick}
            >
                {titleFormated}
            </a>
        </li>
    );
}

export {Tab};