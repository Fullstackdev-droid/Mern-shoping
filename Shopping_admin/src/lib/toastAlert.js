import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function toastAlert(errorType,message, id) {
	
	if(errorType==='error'){

        toast.error(message, {
            autoClose: 2000,
            toastId : id,
            position: toast.POSITION.TOP_RIGHT
        });

    }else if(errorType==='success'){
        toast.success(message, {
            autoClose: 2000,
            toastId:id,
            position: toast.POSITION.TOP_RIGHT
        });
    }
}