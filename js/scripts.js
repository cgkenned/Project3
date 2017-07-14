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
              ['Bronx', 30, 200, 100, 400, 150, 250],
              ['Brooklyn', 130, 100, 140, 200, 150, 50]
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
