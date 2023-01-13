import axios from "axios";
import {useState} from "react";

function Form({ handleBadSubmit, handleGoodSubmit }) {

    const [date, setDate] = useState("");
    const [client, setClient] = useState("");
    const [project, setProject] = useState("");
    const [projectCode, setProjectCode] = useState("");
    const [hours, setHours] = useState();
    const [billable, setBillable] = useState(true);
    const [rate, setRate] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const doPostRequest = async () => {

       
        const payload = {date, client, project, projectCode,
            hours, billable, rate, firstName, lastName};
        
            try{
                let res = await axios.post("http://localhost:8080/add", payload); 

                if (res.status !== 200){
                    handleBadSubmit();
                }else {
                    handleGoodSubmit();
                }
            }catch (e){
                handleBadSubmit();
            }
        
    }

    const onSumbit = (event) => {
        event.preventDefault();

        doPostRequest();

        setDate("");
        setClient("");
        setProject("");
        setProjectCode("");
        setHours(0);
        setBillable(true);
        setRate(0);
        setFirstName("");
        setLastName("");

        
    }

    const coupleClass = "flex flex-col mb-4";
    const labelClass = "mb-2 uppercase font-bold text-md text-grey-darkest";
    const inputClass = "border py-2 text-grey-darkest";
    const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold rounded px-5";

    return (
        <div className="flex items-top h-screen w-full">
            <div className = "w-full bg-gray-200 rounded shadow-lg p-8 m-4">
            <h1 class="text-center text-4xl font-bold mb-4 text-blue-600">Create Entry</h1>
                <form className="mb-10" onSubmit={onSumbit} id="form">
                    <div className="grid grid-cols-2 gap-2">
                        <div className = {coupleClass}>
                            <label className={labelClass}>Date (mm/dd/yy): </label>
                            <input 
                                    type="text"
                                    value={date}
                                    onChange={ (e) => setDate(e.target.value)}
                                    pattern="\d{1,2}[\]{1}\d{1,2}[\]{1}\d{2}"
                                    required
                                    className= {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Clients: </label>
                            <input 
                                    type="text"
                                    value={client}
                                    onChange={ (e) => setClient(e.target.value)}
                                    required
                                    className= {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Project: </label>
                            <input 
                                type="text"
                                value={project}
                                onChange={ (e) => setProject(e.target.value)}
                                required
                                className= {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Project Code: </label>
                            <input 
                                type="text"
                                value={projectCode}
                                onChange={ (e) => setProjectCode(e.target.value)}
                                required
                                className= {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Hours: </label>
                            <input 
                                type="number"
                                step="0.01"
                                value={hours}
                                onChange={ (e) => setHours(e.target.value)}
                                min="0"
                                required
                                className= {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Billable?</label>
                            <select
                                value={billable}
                                onChange={ (e) => setBillable(e.target.value)}
                                required
                                className= {inputClass}
                            >
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Rate: </label>
                            <input 
                                type="number"
                                value={rate}
                                onChange={ (e) => setRate(Math.round(e.target.value))}
                                min="0"
                                required
                                className= {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>First Name: </label>
                            <input 
                                type="text"
                                value={firstName}
                                onChange={ (e) => setFirstName(e.target.value)}
                                required
                                className=  {inputClass}
                            />
                        </div>
                        <div className = {coupleClass}>
                            <label className={labelClass}>Last Name: </label>
                            <input 
                                type="text"
                                value={lastName}
                                onChange={ (e) => setLastName(e.target.value)}
                                required
                                className= {inputClass}
                            />
                        </div>
                    </div>
                    <div className= "grid justify-items-center"><input type="submit" value="Submit" className={buttonClass}/></div>
                </form>
                
            </div>
        </div>
    );
}

export default Form;