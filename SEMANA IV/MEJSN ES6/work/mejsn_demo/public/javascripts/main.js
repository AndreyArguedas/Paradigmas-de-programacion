/*
   loriacarlos@gmail
   Spaghetti code flow
*/
// Util
let addZero = (s) => { return  (s.length < 2) ? ("0" + s) : s; }

// Registro de eventos (onload)
$(document).ready( () => {
	// Simulamos un modelo
	class Model{
		constructor() {
	   		this.count = 0;
	   		this.results = [];
	    }

	    update(data) {
	    	let date = new Date();
	  		this.results[this.count++] = "'" + data + "' a las " + date;
	    }

	    last() {
	    	return this.results[this.results.length-1];
	    }
	}

	let model = new Model();
	// Controller
	// Onclick request
	$("#requestAjax").click(function(){
	   // Request de Ajax (es una promesa) estilo callback
	   $.ajax({url: '../data/texto.txt', 
			   type:'GET',
			   dataType:'text'

			 }).done( (result) => {
					  model.update(result);
					  $("#text h2 span")
						.html(model.last())
						.addClass("big red underline");
					  $("#requestAjax").prop( "disabled", true );
					  setTimeout(
						  () => {
						  $("#requests").append("<br/>" + model.count + ". "+ model.last());
						  $("#requestAjax").prop("disabled", false );
						}, 5000);
					})
			  .fail( (e, msg, excpn) => {
				     alert('**** AJAX ERROR ' + msg + ' ****');
					});
		}); // onclick

		let timer = setInterval( () => {
		   let date = new Date();
		   let time = [date.getHours(), date.getMinutes(), date.getSeconds()]
					  .map( (s) => {return addZero(s.toString());})
					  .join(":");
		   $("#time").text(time)
		}, 10);
});