// Create your Body component heren
import {FaGithub, FaLinkedin} from "react-icons/fa";
import Avatar from '../assets/Software.png';

const Body = () => {
    return (
        <div id="body" className="body">
            <div className="body-container">
                <div className="body-profile">
                    <img className="body-img" alt='avatar' src={Avatar} />

                    <div className="body-content">
                        <div className="body-headline">Mogaka Segera Rooney</div>
                        <div className="body-text">Computer Scientist</div>
                    </div>

                    <div className="body-icons">
                        <a href="https://www.educative.io/" target="_blank" rel="noopener noreferrer" className="icon-link"><i><FaGithub/></i></a>
                        <a href="https://www.educative.io/" target="_blank" rel="noopener noreferrer" className="icon-link"><i><FaLinkedin/></i></a>
                    </div>
                </div>
                </div>
                </div>
    
    )
}

export default Body;