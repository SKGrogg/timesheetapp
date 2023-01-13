
function Table({ data, config, keyFn }){

    const renderedRows = data.map((rowData) => {

        const renderedCells = config.map((column) => {
            if (column.label === "Name" || column.label === "Clients"){
                return <td className='p-2 text-blue-600 text-left px-2' key={column.label}>{column.render(rowData)}</td>
            }else if (column.label === "Hours"){
                return <td className='p-2 text-blue-600 text-right px-2' key={column.label}>{column.render(rowData)}</td>
            } else{
                return <td className='p-2 text-right px-2' key={column.label}>{column.render(rowData)}</td>
            }
            
        });

        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    });

    const headerClass = "px-2 border-2 border-gray-400"

    const renderedHeaders = config.map((column) => {
        if (column.label === "Name" || column.label === "Clients"){
            return <th className={"text-left "+headerClass} key={column.label}>{column.label}</th>
        }
        return <th className={"text-right "+headerClass} key={column.label}>{column.label}</th>
    })


    return (<table className="table-auto justify-center">
                <thead>
                    <tr className="border-2 border-gray-400 divide-x bg-gray-100">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>
                    {renderedRows}
                </tbody>
            </table>
    );
}

export default Table;