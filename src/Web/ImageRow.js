import React from 'react';
import '../index.css';

class ImageRow extends React.Component{
    render(){
        return(
            <section id="one" className="wrapper style2">
				<div className="inner">
					<div className="grid-style">
                      <div id="root"></div>
						<div>
							<div className="box">
								<div className="image fit">
									<img src="images/pic02.jpg" alt="" />
								</div>
								<div className="content">
									<header className="align-center">
										<p>maecenas sapien feugiat ex purus</p>
										<h2>Lorem ipsum dolor</h2>
									</header>
									<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
									<footer className="align-center">
										<a href="#" className="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

						<div>
							<div className="box">
								<div className="image fit">
									<img src="images/pic03.jpg" alt="" />
								</div>
								<div className="content">
									<header className="align-center">
										<p>mattis elementum sapien pretium tellus</p>
										<h2>Vestibulum sit amet</h2>
									</header>
									<p> Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada.</p>
									<footer className="align-center">
										<a href="#" className="button alt">Learn More</a>
									</footer>
								</div>
							</div>
						</div>

					</div>
				</div>
                <script src="./js/jquery.min.js"></script>
			<script src="./js/jquery.scrollex.min.js"></script>
			<script src="./js/skel.min.js"></script>
			<script src="./js/util.js"></script>
			<script src="./js/main.js"></script>
			</section>
        );
    }
}

export default ImageRow