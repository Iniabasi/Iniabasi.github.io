$(document).ready(function(){
	$("input").focus(function(){
		$(this).css("background-color","#F0F8FF");
	});
	$("input").blur(function(){
		$(this).css("background-color","#FFFFFF");
	});
	$('#datepicker').datepicker({


	    daysOfWeekDisabled:"6,0",
    	    startDate: '0d',
	    autoclose:true

        });
	
	$("#btnAnna").click(function(){
	
	$('#datepicker').datepicker("setDaysOfWeekDisabled",[0,6,2,5]);

	});

	$("#btnRory").click(function(){
	$('#datepicker').datepicker("setDaysOfWeekDisabled",[0,6,1,4]);

	});
	$("#btnGeorge").click(function(){

	$('#datepicker').datepicker("setDaysOfWeekDisabled",[0,6,3,4]);
	});
	$("#btnSusan").click(function(){

	$('#datepicker').datepicker("setDaysOfWeekDisabled",[0,6,5]);
	});

});


