import Table from "../components/list-entries/Table";
import HoursAccum from "../components/list-entries/HoursAccum";
import BillableAccum from "../components/list-entries/BillableAccum";
import Pagination from "../components/list-entries/Pagination";

import { useState, useEffect } from "react";

function TablePage() {

    const [entries, setEntries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [entriesPerPage, setEntriesPerPage] = useState(50);

    // Get entry data
    useEffect(() => {
        fetch(`http://localhost:8080/all`)
            .then((response) => response.json())
            .then((data)  => setEntries(data))
            .catch((err) => {
                console.log(err.message);
            });
      }, []);

    // Specify current posts
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = entries.slice(indexOfFirstEntry, indexOfLastEntry);

    // Set configuration for table
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
      });


    const config = [
        {
            label: "Name",
            render: (entry) => entry.project,
        },
        {
            label: "Clients",
            render: (entry) => entry.client,
        },
        {
            label: "Hours",
            render: (entry) => entry.hours,

        },
        {
            label: "Billable Hours",
            render: (entry) => <div className="grid grid-cols-2 justify-items-end"><p>{entry.billableHours}</p><p className="text-gray-400">{ "("+(entry.billableHours/entry.hours)*100 + "%)"}</p></div>,
        },
        {
            label: "Billable Amount",
            render: (entry) => {if (entry.billableAmount.toFixed(2) >= 0.01) {
                                    return formatter.format(entry.billableAmount);
                                }else{
                                    return "------";
                                }},
        },
    ];

    const keyFn = (entry) => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Change page

    const paginate = (pageNumber) => {setCurrentPage(pageNumber)}

    return (
        <div className= "flex flex-col justify-center pr-5">
            <div className = "flex flex-row justify-between pt-3">
                <HoursAccum entries={entries}/>
                <BillableAccum className = "justify-right" entries={entries}/>
            </div>
            <div className="py-12 flex flex-col align-center">
                <Table data={currentEntries} config={config} keyFn={keyFn}/>
                <div className= "grid justify-items-center p-1"> <p className="text-sm text-gray-400">Page {currentPage} </p></div>
                <Pagination entriesPerPage={entriesPerPage} totalEntries={entries.length} paginate={paginate}/>
            </div >     
        </div>
    )
}

export default TablePage;