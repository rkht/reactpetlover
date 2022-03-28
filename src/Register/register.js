import './register.css'
import React from 'react'

class register extends React.Component {
    constructor() {
        super()
    }
    userRegisterURL = "http://localhost:3000/webapi/userRegister"
    userRegister = () => {
        var username = this.username.value
        var email = this.email.value
        var password = this.password.value
        var contact = this.contact.value
        var city = this.city.value
        var Address = this.add.value
        var gender
        if (this.male.checked == true)
            gender = "male"
        else
            gender = "female"
        var hobby = []
        if (this.h1.checked == true) {
            var h1 = this.h1.value
            hobby.push(h1)
        }
        if (this.h2.checked == true) {
            var h2 = this.h2.value
            hobby.push(h2)
        }
        // alert(username+"..........."+hobby)


        var api_url = this.userRegisterURL + "?username=" + username + "&email=" + email + "&password=" + password + "contact=" + contact + "city=" + city + "address=" + Address + "gender=" + gender + "hobby=" + hobby
        fetch(api_url).then((Response) => {
            Response.json().then((result) => {
                 console.log(result)
                alert('user register success fully...')
                //         this.username.value=""
                //         this.email.value=""
                //         this.password.value=""
                //         this.contact.value=""
                //         this.city.value=""
                //         this.Address.value=""
                //         this.male.checked=false
                //         this.female.value=false
                //         this.h1.value=false
                //         this.h2.value=false

            })
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className='rohit'>
                    <center><h1>Register ?</h1></center>

                    <label>Username</label>
                    <input type="text" name="username" ref={c => this.username = c} />
                    <br /><br />




                    <label>Email</label>
                    <input type="email" name="email" ref={c => this.email = c} />
                    <br /><br />



                    <label>Password</label>
                    <input type="password" name="password" ref={c => this.password = c} />
                    <br /><br />



                    <label>Contact</label>
                    <input type="number" name="contact" ref={c => this.contact = c} />
                    <br /><br />

                    {/* <input type="text" maxlength="10" placeholder="Enter Contact" id="contact" name="contact" /> */}



                    <label>Gender</label>
                    Male<input type="radio" name="male" value="male" ref={c => this.male = c} />
                    &nbsp;&nbsp;

                    Female<input type="radio" name="female" value="female" ref={c => this.female = c} />
                    <br /><br />

                    <label>Hobby</label>
                    Cricket <input type="checkbox" name="h1" value="criket" ref={c => this.h1 = c} />
                    &nbsp;&nbsp;
                    Hockey <input type="checkbox" name="h2" value="hockey" ref={c => this.h2 = c} />

                    <br /><br />

                    <label>Select City</label>

                    <select name="city" ref={c => this.city = c}>
                        <option>Select</option>
                        <option>Satna</option>
                        <option>Bhopal</option>
                        <option>Jabalpur</option>
                        <option>Ujjain</option>
                    </select>
                    <br /><br />

                    <label>Address</label>

                    <textarea type="text" name="add" ref={c => this.add = c}></textarea>

                    <button type="button" onClick={this.userRegister} >Register</button>
                    {/* <input type="reset" value="Reset" /> */}

                </div>
            </div>
        )
    }
}
export default register;