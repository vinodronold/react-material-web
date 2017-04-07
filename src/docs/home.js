import React from "react"
import {Link} from "react-router-dom"
const Home = () => {
    const styles = {
        padding: 10
    }
    return(
        <div style={styles}>
            <ul>
                <li><Link to="/button">Buttons</Link></li>
                <li><Link to="/fab">Fabs</Link></li>
                <li><Link to="/card">Cards</Link></li>
            </ul>
        </div>
    )
}

export default Home