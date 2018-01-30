import React from 'react';
import '../index.css';

class Banner extends React.Component {
    render(){
        return(
            <div> 
                <section className="banner full">
				<article>
					<img src="images/slide01.jpg" alt="" />
					<div className="inner">
						<header>
							<p>A free responsive web site template by <a href="https://templated.co">TEMPLATED</a></p>
							<h2>Hielo</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide02.jpg" alt="" />
					<div className="inner">
						<header>
							<p>Lorem ipsum dolor sit amet nullam feugiat</p>
							<h2>Magna etiam</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide03.jpg"  alt="" />
					<div className="inner">
						<header>
							<p>Sed cursus aliuam veroeros lorem ipsum nullam</p>
							<h2>Tempus dolor</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide04.jpg"  alt="" />
					<div className="inner">
						<header>
							<p>Adipiscing lorem ipsum feugiat sed phasellus consequat</p>
							<h2>Etiam feugiat</h2>
						</header>
					</div>
				</article>
				<article>
					<img src="images/slide05.jpg"  alt="" />
					<div className="inner">
						<header>
							<p>Ipsum dolor sed magna veroeros lorem ipsum</p>
							<h2>Lorem adipiscing</h2>
						</header>
					</div>
				</article>
			</section>
			<script src="./js/jquery.min.js"></script>
			<script src="./js/jquery.scrollex.min.js"></script>
			<script src="./js/skel.min.js"></script>
			<script src="./js/util.js"></script>
			<script src="./js/main.js"></script>
            </div>
        );
    }
}

export default Banner