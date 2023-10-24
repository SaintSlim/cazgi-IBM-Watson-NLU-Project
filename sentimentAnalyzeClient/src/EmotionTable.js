import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    emotionArray = Object.entries(this.props.emotions);
    render() {
      //Returns the emotions as an HTML table
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              this.emotionArray.map((value) => 
              <tr>
                  <td>{value[0]}</td>
                  <td>{value[1]}</td>
              </tr>
              )}
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;