import React from "react"
import { Link } from "react-router-dom"


const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        textAlign: "center"
    }

    const headingStyle = {
        fontSize: "2.5rem",
        fontWeight: "bold",
        marginBottom: "30px",
        color: "#161616",
        maxWidth: "500px"
    }

    const buttonStyle = {
        display: "inline-block",
        backgroundColor: "#161616",
        color: "white",
        padding: "12px 24px",
        borderRadius: "6px",
        textDecoration: "none",
        fontWeight: "bold",
        textAlign: "center"
    }


export default function NotFound() {
    return (
        <>
            <div style={containerStyle} >
                <h1 style={headingStyle} >Sorry, the page you were looking for was not found.</h1>
                <Link to="/" style={buttonStyle} >Return to Home</Link>
            </div>
        </>

    )

}