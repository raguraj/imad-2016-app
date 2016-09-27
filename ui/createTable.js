console.log("Loaded createTable.js");
createTable();

function createTable () { 
    // get the reference for the body
    <table>
    for (var i=0; i<3;i++)
    {
        <tr>
        for( var j=0; j <3;j++)
            <td> "R"+ (i+1) + "C" + (j+1) </td>
    }
    </table>
    
}