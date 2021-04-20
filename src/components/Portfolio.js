import React from 'react'

export default function Portfolio(props) {
    return (
        <>
            <div className="row">
                <div className="side-content-sm">

                </div>
            </div>
            <div className="portfolioSection">
                <div className="portfolioRow">
                    <div className="portfolioImage">
                        <img src={props.image} />
                    </div>
                    <div className="portfolioDescription">
                        <h4>{props.title} </h4>
                        <p>{props.description}</p>
                        <a href={props.repo}> Link to GitHub </a>
                    </div>
                </div>
            </div>
        </>
    )
}
