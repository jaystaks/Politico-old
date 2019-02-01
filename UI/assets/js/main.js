google.load("visualization", "1.1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
  //assigning vote section and result section
  var pollSection = $('#pollSection'), resultSection = $('#resultSection');

  //hide result section
  resultSection.css({'opacity':0, 'visibility':'hidden'});

  //retrive values from firebase
  var val, data;
  //var location = $('#poll_options');
  var radios = $('#pollButtons').children('input[type="radio"]');
  //google chart data
  var chartdata = new google.visualization.DataTable();
  //displaying google chart

  chartdata.addColumn('string', 'Teams');
  chartdata.addColumn('number', 'Votes');

  //google chart style
  var options = {
    title: 'ICC World Cup 2015',
    width: '100%',
    height: '100%',
    backgroundColor: {
      fill: 'transparent',
    },
    fontName: 'Calibri',
    fontSize: 12,
    is3D: true,
    slices: {},
  };

  radios.each(function() {
    var $this = $(this);
    var get_val = $this.val(); //var get_val = $(this).attr('id');
    var polldataRef = new Firebase('https://bloganalyzer-related.firebaseio.com/'+get_val);
    polldataRef.on('value', function (snapshot) {
      data = snapshot.val();
      if (data == null) {data=1;}
      polldataRef.set(data);
      $this.siblings('label[for="'+get_val+'"]').find('.result').text(data);
    });
  }); //each function

  //save values to firebase
  $('#pollVote').click(function() {
    for (var i=0; i<radios.length; i++) {
      if ( radios[i].checked ) {
        val = radios[i].value;
        break;
      }
    }
    if (val!=null) {
      //var teamName = $('label[for="'+val+'"]').find('.name').text();
      //alert('You voted for ' + teamName);
      //Increment Poll Count
      var polldataRef = new Firebase('https://bloganalyzer-related.firebaseio.com/'+val);
      data = parseInt($('label[for="'+val+'"]').find('.result').text());
      data++;
      polldataRef.set(data);

      //add row to chart
      $('label.pollButton').each(function() {
        var n = $(this).find('.name').text();
        var v = parseInt($(this).find('.result').text());
        chartdata.addRow([n,v]);
      });

      var team = {};
      team[i] = {offset: 0.2};
      options.slices = team;
      var chart = new google.visualization.PieChart(document.getElementById('resultBars'));
      chart.draw(chartdata, options);

      //hide poll section and show result section
      pollSection.css({'z-index':1}).animate({opacity:0}, 300, function() {
        resultSection.css({'z-index':2, 'visibility':'visible'}).animate({opacity:1}, 200);
      });
    }

    else
      alert('Please select an option');
  }); //click function
}
