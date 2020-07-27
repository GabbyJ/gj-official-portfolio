import React from "react";

function MessageMe() {
    return(
        <section className="contact" id="contact">
            <h2>Message Me</h2>
            <div className="form">
            <form method="post" action="messageMe.php" className="login-form">
                <input type="text" name="name" required="required" placeholder="Name" />
                <input type="Email" name="email" required="required" placeholder="Email" />
                <textarea type="text" name="message" required="required" placeholder="Message" defaultValue={""} />
                <button type="submit">Send</button>
            </form>
            </div>
        </section>
    );
}

export default MessageMe;