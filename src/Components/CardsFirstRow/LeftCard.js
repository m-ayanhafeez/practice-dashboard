import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function LeftCard(){
    return (  
        <Container >
            
    <div className= 'col-12 col-md-6 col-xl-4 shadow-lg mx-0 mb-3 bg-white rounded'>
        
            <Card className='card-congratulations-medal card'>
                
                <Card.Body className='card-body d-flex justify-content-between'>
                <div>
                    <h5>Congratulations 🎉 John!</h5>
                    <p className='font-small-3 card-text'>You have won gold medal</p>
                    <h3 className='mb-75 mt-2 pt-50'>
                    <a href="/">$48.9k</a>
                    </h3>
                    <Button className='btn btn-primary'>View Sales</Button>    
                </div>
                <div>
                <Image className='mx-2 my-0'
                     src="https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/demo-5/static/media/badge.2936ed83.svg"></Image>
                </div>
                </Card.Body>
            </Card>
            </div>
            </Container>
  
    ); 
}
 export default LeftCard;