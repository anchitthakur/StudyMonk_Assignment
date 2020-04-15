import React from "react";
import {Badge, Button, Col, Modal} from "react-bootstrap";
import Overlay from "./Overlay";


const Movie = ({movie, isMobile}) => {

    const [loading, setLoading] = React.useState(true);
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                style={{textAlign: "center"}}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {movie.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{width:"100%"}} src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} />
                    <br />
                    <h4>Description</h4>
                    <p>
                        {movie.overview}
                    </p>
                    <div style={{
                        background: "lightskyblue",
                        display: "inline-block",
                        padding: "5px",
                        borderRadius: "10px"
                    }}>
                        <b>Average Votes</b> <Badge variant="light">{movie.vote_average}</Badge>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (<>
        <Col lg={2} md={3} sm={4} xs={6} style={{margin: "10px 0 0 0"}}>
            <div style={{display: loading ? "block" : "none"}}>
                <div className="loader"/>
            </div>
            <div className="img1-wrap">
                <div style={{display: loading ? "none" : "block"}}>
                    <img className="image" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
                         onLoad={() => setLoading(false)}
                         onClick={() => setModalShow(true)}
                         alt={"poster"}/>
                </div>
                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
                {
                    !isMobile ? <Overlay movie={movie} setModalShow={setModalShow} loading={loading}/> : ""
                }
            </div>
        </Col>
    </>);
};

export default Movie;
