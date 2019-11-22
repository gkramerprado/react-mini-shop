import React from 'react';
import { toast } from 'react-toastify';
import { SuccessContent, SuccessIcon } from './style';
import { IoIosCheckmarkCircle, IoIosCloseCircle, IoIosWarning, IoMdInformationCircle } from 'react-icons/io';

//Componente criado para facilitar as chamadas de toasters
export const SuccessMessage = (props) => {
    return (
        <SuccessContent>
            <SuccessIcon>
                {props.icon}
            </SuccessIcon>
            {props.message}
        </SuccessContent>
    );
}

//Configuracoes do toaster
function toaster(message, type) {
    const objConfig = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
    };

    //De acordo com o tipo do toaster renderiza ele com seu icone e sua configuracao
    switch (type) {
        case 'success':
            toast.success(<SuccessMessage icon={<IoIosCheckmarkCircle />} message={message} />, objConfig);
            break;
        case 'error':
            toast.error(<SuccessMessage icon={<IoIosCloseCircle />} message={message} />, objConfig);
            break;
        case 'warn':
            toast.warn(<SuccessMessage icon={<IoIosWarning />} message={message} />, objConfig);
            break;
        case 'info':
            toast.info(<SuccessMessage icon={<IoMdInformationCircle />} message={message} />, objConfig);
            break;
        default:
            break;
    }
}

export default toaster;