import './login.css'
import React from 'react'

class login extends React.Component
{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
               <div>
                    <table>
                        <tr>
                            <td>
                                <label>Email</label>
                            </td>
                            <td><input type="email" name="email" ref={c => this.email = c} />

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Password</label>
                            </td>
                            <td><input type="password" name="password" ref={c => this.password = c} />

                            </td>
                        </tr>
                        <tr>
                            <td><button type="button" onClick={this.userLogin} >Register</button>

                                {/* <input type="reset" value="Reset" /> */}
                            </td>
                        </tr>

                    </table>
                </div> 
            </div>
        )
    }
}
export default login;