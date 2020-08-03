import React from 'react';

class MessageMe extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: '',
  	email: '',
  	message: ''
	}
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:3002/send',{
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(
    	(response) => (response.json())
       ).then((response)=>{
      if (response.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: '', email: '', message: ''})
  }
  
  render() {
	return(
    <section className="contact" id="contact">
    <h2 data-aos="fade-up" data-aos-duration="700">Message Me</h2>
    <div className="form" data-aos="fade-up" data-aos-duration="700">
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" action="mailto:gabbyj424@gmail.com" className="login-form">
  	<div className="form-group" data-aos="fade-up" data-aos-duration="700">
      	<label htmlFor="name">Name</label>
      	<input type="text" className="form-control" id="name" placeholder="Name" required="required" value={this.state.name} onChange={this.onNameChange.bind(this)} />
  	</div>
  	<div className="form-group" data-aos="fade-up" data-aos-duration="700">
      	<label htmlFor="exampleInputEmail1">Email address</label>
      	<input type="email" className="form-control" id="email" placeholder="Email" required="required" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
  	</div>
  	<div className="form-group" data-aos="fade-up" data-aos-duration="700">
      	<label htmlFor="message">Message</label>
      	<textarea type="text" className="form-control" rows="5" id="message" placeholder="Message" required="required" defaultValue={""} value={this.state.message} onChange={this.onMessageChange.bind(this)} />
  	</div>
  	<button type="submit" className="btn btn-primary" data-aos="fade-up" data-aos-duration="700">Submit</button>
  	</form>
    </div>
  	</section>
	);
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default MessageMe;