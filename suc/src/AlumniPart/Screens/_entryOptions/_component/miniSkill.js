import React,{Component} from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../_css/requirement.css';


class MiniSkill extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div  style={{backgroundColor:"#000"}}>
                <Card className="miniSkillCard">
                    <Row>
                        <Col xs={10}>
                            <h4>{}</h4>
                        </Col>
                        <Col xs={2}>
                        <Button className='personLogin' variant="outline-primary float-right">
                    {<FontAwesomeIcon icon={faTimes} />}</Button>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default MiniSkill;