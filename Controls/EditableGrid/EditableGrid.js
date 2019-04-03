var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');

function search() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table-editable");
    tr = table.getElementsByTagName("tr");
    th = table.getElementsByTagName("th");
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        if (i === 0) {
            var a = ""; // Dont Hide Header
        }
        else {
            var hideRow = true;
            //loop through all data and show if values are in input
            for (iii = 0; iii < th.length; iii++) {

                td = tr[i].getElementsByTagName("td")[iii];
                if (td) {

                    if (hideRow === false) {
                        break;
                    }
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        hideRow = false;
                    }
                }
            }

            if (hideRow) {
                tr[i].style.display = "none";
            }
            else {
                tr[i].style.display = "";
            }
        }
    }
}

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("table-editable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir === "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir ==="desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount === 0 && dir === "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}


$('.table-add').click(function () {
    var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
    $TABLE.find('table').append($clone);
});

$('.table-remove').click(function () {
    $(this).parents('tr').detach();
});

$('.table-up').click(function () {
    var $row = $(this).parents('tr');
    if ($row.index() === 1) return; // Don't go above the header
    $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
    var $row = $(this).parents('tr');
    $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;


//$('#export-btn').click(function () {
//    var $rows = $TABLE.find('tr:not(:hidden)');
//    var headers = [];
//    var data = [];

//    // Get the headers (add special header logic here)
//    $($rows.shift()).find('th:not(:empty)').each(function () {
//        headers.push($(this).text().toLowerCase());
//    });

//    // Turn all existing rows into a loopable array
//    $rows.each(function () {
//        var $td = $(this).find('td');
//        var h = {};

//        // Use the headers from earlier to name our hash keys
//        headers.forEach(function (header, i) {
//            h[header] = $td.eq(i).text();
//        });

//        data.push(h);
//    });

//    // Output the result
//    $('#export').text(JSON.stringify(data));
//    alert(JSON.stringify(data));
//});

//$BTN.click(function () {
//    var $rows = $TABLE.find('tr:not(:hidden)');
//    var headers = [];
//    var data = [];

//    // Get the headers (add special header logic here)
//    $($rows.shift()).find('th:not(:empty)').each(function () {
//        headers.push($(this).text().toLowerCase());
//    });

//    // Turn all existing rows into a loopable array
//    $rows.each(function () {
//        var $td = $(this).find('td');
//        var h = {};

//        // Use the headers from earlier to name our hash keys
//        headers.forEach(function (header, i) {
//            h[header] = $td.eq(i).text();
//        });

//        data.push(h);
//    });

//    // Output the result
//    $EXPORT.text(JSON.stringify(data));
//});




/*		=================================
**		==== Simple Table Controller ====
**		=================================
**
**
**			With Pure JavaScript .. 
**	 
**
**		No Libraries or Frameworks needed!
**
**
**				fb.com/bastony
**	
*/
//// ($p) is the selected page number. it will be generated when a user clicks a button
//function selectPage($p) {
//    /* create ($rows) a variable to hold the group of rows
//    ** to be displayed on the selected page,
//    ** ($s) the start point .. the first row in each page, Do The Math
//    */
//    // get the table element
//    var $table = document.getElementById("table-editable"),
//        // number of rows per page
//        $n = 5,
//        // number of rows of the table
//        $rowCount = $table.rows.length,
//        // get the first cell's tag name (in the first row)
//        $firstRow = $table.rows[0].firstElementChild.tagName,
//        // boolean var to check if table has a head row
//        $hasHead = ($firstRow === "TH"),
//        // an array to hold each row
//        $tr = [],
//        // loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
//        $i, $ii, $j = ($hasHead) ? 1 : 0,
//        // holds the first row if it has a (<TH>) & nothing if (<TD>)
//        $th = ($hasHead ? $table.rows[(0)].outerHTML : "");

//    var $rows = $th, $s = (($n * $p) - $n);
//    for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++)
//        $rows += $tr[$i];
//    //alert('testoutsideReady');
//    // now the table has a processed group of rows ..
//    $table.innerHTML = $rows;

//    var $pageCount = Math.ceil($rowCount / $n);

//    // create the pagination buttons
//    document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p);
//    // CSS Stuff
//    document.getElementById("id" + $p).setAttribute("class", "active");
//}

//$(document)
//    .ready(function () {

//        // get the table element
//        var $table = document.getElementById("table-editable"),
//            // number of rows per page
//            $n = 5,
//            // number of rows of the table
//            $rowCount = $table.rows.length,
//            // get the first cell's tag name (in the first row)
//            $firstRow = $table.rows[0].firstElementChild.tagName,
//            // boolean var to check if table has a head row
//            $hasHead = ($firstRow === "TH"),
//            // an array to hold each row
//            $tr = [],
//            // loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
//            $i, $ii, $j = ($hasHead) ? 1 : 0,
//            // holds the first row if it has a (<TH>) & nothing if (<TD>)
//            $th = ($hasHead ? $table.rows[(0)].outerHTML : "");
//        // count the number of pages
//        var $pageCount = Math.ceil($rowCount / $n);
//        // if we had one page only, then we have nothing to do ..
//        if ($pageCount > 1) {
//            // assign each row outHTML (tag name & innerHTML) to the array
//            for ($i = $j, $ii = 0; $i < $rowCount; $i++ , $ii++)
//                $tr[$ii] = $table.rows[$i].outerHTML;
//            // create a div block to hold the buttons
//            $table.insertAdjacentHTML("afterend", "<div id='buttons'></div");
//            // the first sort, default page is the first one
//            selectPage(1);
//        }

//        // ($p) is the selected page number. it will be generated when a user clicks a button
//        function selectPage($p) {
//            /* create ($rows) a variable to hold the group of rows
//            ** to be displayed on the selected page,
//            ** ($s) the start point .. the first row in each page, Do The Math
//            */
//            var $rows = $th, $s = (($n * $p) - $n);
//            for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++)
//                $rows += $tr[$i];
//            //alert('test');
//            // now the table has a processed group of rows ..
//            $table.innerHTML = $rows;
//            // create the pagination buttons
//            document.getElementById("buttons").innerHTML = pageButtons($pageCount, $p);
//            // CSS Stuff
//            document.getElementById("id" + $p).setAttribute("class", "active");
//        }


//        // ($pCount) : number of pages,($cur) : current page, the selected one ..
//        function pageButtons($pCount, $cur) {
//            /* this variables will disable the "Prev" button on 1st page
//               and "next" button on the last one */
//            var $prevDis = ($cur === 1) ? "disabled" : "",
//                $nextDis = ($cur === $pCount) ? "disabled" : "",
//                /* this ($buttons) will hold every single button needed
//                ** it will creates each button and sets the onclick attribute
//                ** to the "sort" function with a special ($p) number..
//                */
//                $buttons = "<input type='button' value='&lt;&lt; Prev' onclick='selectPage(" + ($cur - 1) + ")' " + $prevDis + ">";
//            for ($i = 1; $i <= $pCount; $i++)
//                $buttons += "<input type='button' id='id" + $i + "'value='" + $i + "' onclick='selectPage(" + $i + ")'>";
//            $buttons += "<input type='button' value='Next &gt;&gt;' onclick='selectPage(" + ($cur + 1) + ")' " + $nextDis + ">";
//            return $buttons;
//        }

//    });