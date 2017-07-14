$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": '../datatable.json'
    } );

} );

  var chart = c3.generate({
    bindto: '#pieChart',
    data: {
           columns: [
               ['Domestic Violence', 17],
               ['Immigrant/Refugee Assistance', 12],
               ['Legal Assistance and Services', 26],
               ['NDA Immigrants', 10],
               ['Immigrant Family Services', 13]
           ],
           type : 'pie',
           onclick: function (d, i) { console.log("onclick", d, i); },
           onmouseover: function (d, i) { console.log("onmouseover", d, i); },
           onmouseout: function (d, i) { console.log("onmouseout", d, i); }
       },
  });

  var chart = c3.generate({
    bindto: '#barChart',
      data: {
          columns: [
              ['Non-Latino or Asian', 0.839, 0.794, 0.737],
              ['Latino', 0.123, 0.151, 0.184],
              ['Asian', 0.038, 0.055, 0.079]
          ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      }
  });
