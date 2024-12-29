import React, { Component } from "react";
import './Slam.css'
class Slam extends Component{
    render()
    {
        return(
            <>
            <div class="box">
                <form>
                    <label><hr/>SLAM BOOK</label><hr/><br/><br/>
                    <label> NAME:</label><br/>
                    <input type="text" id="name"></input><br/><br/>
                    <label> NICKNAME:</label><br/>
                    <input type="text" id="nickname"></input><br/><br/>
                    <label> ADDRESS:</label><br/>
                    <input type="text" id="address"></input><br/><br/>
                    <label> PHONE:</label><br/>
                    <input type="text" id="phone"></input><br/><br/>
                    <label> GENDER:</label><br/>
                    <input type="radio" name="gender" value="male" />Male<br/>
                    <input type="radio" name="gender" value="female" />Female<br/><br/>
                    <label> FAVOURITE ACTORS:</label><br/>
                    <input type="checkbox" name="Favourite actors" value="Vijay" />Vijay<br/>
                    <input type="checkbox" name="Favourite actors" value="Rajinikanth" />Rajinikanth<br/>
                    <input type="checkbox" name="Favourite actors" value="Ajith" />Ajith<br/>
                    <input type="checkbox" name="Favourite actors" value="Karthik" />Karthik<br/>
                    <input type="checkbox" name="Favourite actors" value="Suriya" />Suriya<br/><br/>
                    <label> SCHOOL:
                        <select>
                            <option value="KONGU">KONGU</option>
                            <option value="GREEN PARK">GREEN PARK</option>
                            <option value="RVS">RVS</option>                        
                            </select>
                    </label>
                </form>
            </div>
            </>
        )
    }
}
export default Slam