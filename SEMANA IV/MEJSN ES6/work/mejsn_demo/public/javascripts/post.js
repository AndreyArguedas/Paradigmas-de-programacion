$(document).ready( () => {
	// Simulamos un modelo
	function Model(){
	   this.count = 0;
	   this.results = [];
	   
	};
	Model.prototype.last = function(){
	  return this.results[this.results.length-1];
	}

	Model.prototype.update = function(data){
	  this.results[this.count++] = " " + this.count + ") " + data.name + " " + data._id;
	}

	var model = new Model();

	$("#buttonPostBear").click( () => {
		 $.ajax({url: '../../api/bears', 
			   type:'POST',
			   data:{
			   		name : $("#post").val()
			   },
			   dataType:'json'

			}).done( (result) => {
				model.update(result);
				$("#respArea").append('<br>' + model.last());
				$('#bearPost').trigger("reset");

			})
			.fail( (e, msg) => {alert('**** AJAX ERROR ' + msg + ' ****')});
	});

	loadBears(model); //Each time the page is refreshing all bears are shown

});

function loadBears(model){
	 $.ajax({
        url: '../../api/bears',
        type:'GET',
        dataType: "json"
    }).done( (result) => {
    	result.forEach( (x) => { model.update(x); $("#respArea").append('<br>' + model.last());});
    })
    .fail( (e, msg) => {alert('**** ERROR AT LOADING BEARS ****')});
}