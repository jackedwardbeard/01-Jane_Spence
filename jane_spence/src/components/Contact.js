import React from 'react';
import Navbar from './Navbar/Navbar.js';
 
const Contact = () => {
    return (
        <div className="App-header">
        
        <Navbar></Navbar>
        <div className="contactMeForm">
        <h3 className="contactMeTitle">
			  CONTACT
			  </h3>
        <h3 className="requiredFields">
			  * Required Fields
			  </h3>
        <form action="store_feedback.php" method="post">
			  <input name="firstname" type="text" placeholder="* First Name"/>
		  	<input name="lastname" type="text" placeholder="* Last Name"/>
			  <input name="email" type="email" placeholder="* Email"/>
			  <input name="phone" type="number" placeholder="* Phone Number"/>
			  <input name="date" type="datetime-local"/>
			  <input name="subject" type="text" placeholder="* Subject"/>
        <textarea className="messageBox" name="message" type="text" placeholder="* Message"/>
			  <input className="submit" name="submit" type="submit"/>
			  </form>
        </div>
		
    </div>
	
    );
}
 
export default Contact;