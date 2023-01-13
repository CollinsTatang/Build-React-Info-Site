import "./css/Main.css";

const Main = () => {
    return (
        <div className="main">
            <h2 className="main-title">Fun facts about React</h2>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>Was Originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

export default Main;