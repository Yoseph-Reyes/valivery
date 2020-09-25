import React, { Component} from 'react';
class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form>
                <div>
                    <input type="text" name="user" placeholder="Usuario" className="u-pull-left"/>
                </div>
                <div>
                    <input type="password" name="password" placeholder="Clave" className="u-pull-right"/>
                </div>
                <div>
                    <input type="submit" name="inicio" value="ingresar" className='u-full-width button-primary'/>
                </div>
            </form>
         );
    }
}
 
export default Form;