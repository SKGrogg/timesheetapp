function HoursAccum({ entries }) {

    var sum = 0.0;

    for (var i=0; i< entries.length; i++){
        sum += entries[i]["hours"];
    }


    return (
        <div> 
            <div className="text-gray-400 text-sm font-semibold">
                Hours Tracked
            </div> 
            <div className="text-gray-darkest text-2xl font-bold">
                {sum.toLocaleString()}
            </div>
        </div>);
}

export default HoursAccum;