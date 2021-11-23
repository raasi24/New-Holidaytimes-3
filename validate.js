jQuery('#contact-form').validate({
	rules:{
		name:{
			required:true,
			minlength:3
		},
		email:{
			required:true,
			email:true
		},
		message:{
			required:true,
			minlength:20
		},
		
	},messages:{
		name:{
			required:"Please enter your name",
			minlength:"Name should be atleast 3 characters",
		},
		email:{
			required:"Please enter email",
			email:"Please enter valid email",
		},
		message:{
			required:"please enter the message",
			minlength:"Your message has to be atleast 20 characters long",
		},

	},
	submitHandler:function(form){
		form.submit();
	}
});