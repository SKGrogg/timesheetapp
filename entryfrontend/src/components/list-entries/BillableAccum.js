
function BillableAccum({ entries }) {

    var sum = 0.0;

    for (var i=0; i< entries.length; i++){
        sum += entries[i]["billableAmount"];
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        });


    return (
        <div> 
            <div className="text-gray-400 text-sm font-semibold">
                Billable Amount
            </div> 
            <div className="text-gray-darkest text-2xl font-bold">
                {formatter.format(sum)}
            </div>
        </div>);
}

export default BillableAccum;