import React from 'react';
import '../index.css';


class Nav extends React.Component{
    render(){
        return(
            		// <!-- Nav -->
		<nav id="menu">
            <ul className="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="game.html">Game</a></li>
                
                {/* <!-- <li><a href="elements.html">Elements</a></li> --> */}
            </ul>
            <script src="./js/jquery.min.js"></script>
			<script src="./js/jquery.scrollex.min.js"></script>
			<script src="./js/skel.min.js"></script>
			<script src="./js/util.js"></script>
			<script src="./js/main.js"></script>
        </nav>
        );
    }
}

export default Nav