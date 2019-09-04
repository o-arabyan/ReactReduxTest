import React  from 'react';
import {Button, Modal} from 'react-bootstrap';

function CustomModal (props) {
      return (
        <>
        {/* <Button variant="primary" onClick={props.handleShow}>
        </Button> */}
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>User Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container bootstrap snippet">
             <div className="panel-body inf-content">
             <div classNames="row">
             <div className="col-md-2">
            <ul title="Ratings" className="list-inline ratings text-center">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
           </div>
           <div className="col">
            <div className="table-responsive">
            <table className="table table-condensed table-responsive table-user-information">
                <tbody>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-asterisk text-primary"></span>
                                Street                                               
                            </strong>
                        </td>
                        <td className="text-primary">
                        {props.userInfo.locationStreet}    
                        </td>
                    </tr>
                    <tr>    
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-user  text-primary"></span>    
                                City                                               
                            </strong>
                        </td>
                        <td className="text-primary">
                        {props.userInfo.locationCity}  
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-cloud text-primary"></span>  
                                State                                                
                            </strong>
                        </td>
                        <td className="text-primary">
                             {props.userInfo.locationState}
                        </td>
                    </tr>

                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-bookmark text-primary"></span> 
                                PostCode                                               
                            </strong>
                        </td>
                        <td className="text-primary">
                            {props.userInfo.locationPostCode}
                        </td>
                    </tr>


                    <tr>        
                        <td>
                            <strong>
                                <span classNames="glyphicon glyphicon-eye-open text-primary"></span> 
                                Phone                                               
                            </strong>
                        </td>
                        <td className="text-primary">
                            {props.userInfo.phone}
                        </td>
                    </tr>
                    <tr>        
                        <td>
                            <strong>
                                <span className="glyphicon glyphicon-envelope text-primary"></span> 
                                Cell                                               
                            </strong>
                        </td>
                        <td className="text-primary">
                            {props.userInfo.cell}  
                        </td>
                    </tr>
                   
                                                    
                </tbody>
            </table>
            </div>
        </div>
    </div>
</div>
</div>                                        
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  

  export default CustomModal;