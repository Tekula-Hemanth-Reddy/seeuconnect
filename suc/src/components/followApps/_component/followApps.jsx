import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Link, lightColors, darkColors } from 'react-floating-action-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Follow() {
        return (
            <div>
                <Container>
                <Button
                    styles={{backgroundColor: "#007bff"}}
                    >
                        <FontAwesomeIcon className='ico' icon={faAngleUp} color="#fff" size="lg" />
                    </Button>
            </Container>
            </div>
        )
    }
    // return (
    //     <div>
    //         <Container>
    //             {fromPlace && ()}
    //         <Link href="#"
    //             tooltip="Follow us on FaceBook"
    //             styles={{backgroundColor: darkColors.black, transform: "translate(-0%,300%)"}}
    //             >
    //                 { <FontAwesomeIcon className='ico' icon={faFacebook} color="#007bff" size="lg" /> }
    //             </Link>
    //         <Link href="#"
    //             tooltip="Follow us on Instagram"
    //             styles={{backgroundColor: darkColors.black, transform: "translate(-150%,310%)"}}
    //             >
    //                 <FontAwesomeIcon className='ico' icon={faInstagram} color="#007bff" size="lg" />
    //             </Link>
    //         <Link href="#"
    //          styles={{backgroundColor: darkColors.black, transform: "translate(-0%,320%)"}}
    //             tooltip="Follow us on Twitter"
    //              >
    //                 <FontAwesomeIcon className='ico' icon={faTwitter} color="#007bff" size="lg" />
    //             </Link>
    //         <Button
    //             rotate={true}
    //             styles={{backgroundColor: "#007bff"}}
    //             >
    //                 <FontAwesomeIcon className='ico' icon={faTimes} color="fff" size="lg" />
    //             </Button>
    //     </Container>
    //     </div>
    // )
// }

export default Follow;
