function NewContactPage() {

    return (
      <div className="new-contact-wrapper">
        <h1>New Contact</h1>
        <form action="#">
                <div>
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                    />
                </div>
                <div>
                  <label htmlFor="birthday">Birthday</label>
                  <input type="date" name="birthday" id="birthday" />
                </div>

                <fieldset>
                  <legend>Address</legend>

                  <div>
                    <label htmlFor="street">Street</label>
                    <input type="text" name="street" id="street" />
                  </div>
                  <div>
                    <label htmlFor="hnumber">House Number</label>
                    <input type="text" name="hnumber" id="hnumber" />
                  </div>
                  <div>
                    <label htmlFor="zcode">Zip Code</label>
                    <input type="number" name="zcode" id="zcode" />
                  </div>
                  <div>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" />
                  </div>
                </fieldset>

                <div className="btns">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </div>
        </form>
      </div>
    )
}
  
export default NewContactPage;