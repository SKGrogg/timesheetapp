import Form from "../components/add-entry/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormPage() {

   
    const handleBadSubmit = () => toast("Looks like something went wrong on the backend. Entry not created.");
    const handleGoodSubmit = () => toast("Entry Created!");


    return (
        <div>
            <Form handleBadSubmit={handleBadSubmit} handleGoodSubmit={handleGoodSubmit}/>
            <ToastContainer/>
        </div>
    )
}


export default FormPage;