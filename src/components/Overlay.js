import {Col} from "react-bootstrap";
import LikeButton from "./LikeButton";
import React from "react";

const Overlay = ({movie, setModalShow, loading}) => {
    return (<div className="overlay" style={{display: loading ? "none" : "block"}}>
            <Col md={12} lg={12} style={{margin: 0}}>
                <h3 style={{color: "white"}}>{movie.title}</h3>
            </Col>
            <Col md={12} lg={12} style={{margin: 0}}>
                <p style={{color: "white"}} className="truncate-overflow-5">{movie.overview}</p>
            </Col>
            <Col md={12} lg={12} style={{margin: 0}}>
                <LikeButton/>
                <button style={{marginLeft: "5px"}} className="button button-more"
                        onClick={() => {
                            setModalShow(true)
                        }}
                >
                    <span>More</span>
                </button>
            </Col>
        </div>
    )
};
export default Overlay
