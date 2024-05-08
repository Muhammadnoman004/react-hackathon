import React from 'react'

export default function Loader({ show }) {
    return show && (
        <>
            <div style={{ marginTop: "25vh", width: "70px", height: "70px", fontSize: "20px", textAlign: "center" }} className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>
    )
}
