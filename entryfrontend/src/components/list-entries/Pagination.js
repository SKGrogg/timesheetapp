function Pagination( { entriesPerPage, totalEntries, paginate}) {

    const pageNumbers = [];
    
    for(let i = 1; i<= Math.ceil(totalEntries/entriesPerPage); i++){
        pageNumbers.push(i);
    }

    const listItemClass = "border p-2 bg-gray-200 hover:bg-gray-700 rounded"

    return (
        <nav className="p-3">
            <ul className="flex flex-row justify-center gap-3">
                {pageNumbers.map(number => (
                    <li className={listItemClass} onClick={() => {paginate(number); window.location.href='#top'}} key={number}>
                        <button type="button" className="cursor-pointer">
                            {number} 
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;