import React from 'react';
import Navbar from './Navbar/Navbar.js';
import './Contact.css';
 
const Contact = () => {
    return (
        <div className="App-header">
			<Navbar></Navbar>
        <div className="grid-container">
        
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
			<div className="contactDetails">
					<ul id="contactDetails">
						<li>JANE SPENCE</li>
						<li>-----------------------------------------------------------</li>
						<li>CONSULTANT PHARMACIST & DIABETES EDUCATOR</li>
						<li>-----------------------------------------------------------</li>
						<li>T: 0417389257</li>
						<li>F: 59714686</li>
						<li>E: jane.spence@bigpond.com</li>
						<li>-----------------------------------------------------------</li>
						<p>You can contact me via e-mail directly through the contact form. Alternatively, you can contact the above phone or fax lines. </p>
					</ul>
			</div>	  
			</div>
			
		</div>	
    </div>
	
    );
}
 
export default Contact;