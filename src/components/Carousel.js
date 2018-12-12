import React, { Component } from 'react';
import einstein from '../einstein2.jpg';
import iris from '../iris.jpg';
import sunlight from '../sunlight.jpg';
import '../App.css';
import Carousel from 'react-easy-carousel';

export default class Cycle extends Component {
	constructor() {
		super();
		this.state = {
			modalities: []
		};
	}



	render() {
		return (
			<Carousel className="carousel" animation = "slide" animationDuration = "1000" dots dotColor = "#F608DDFF" dotActiveColor = "black">
				<img className="carouselImages" src={einstein} alt="Yoga" /> 
				<img className="carouselImages" src={iris} alt="Reiki"/>
				<img className="carouselImages" src={sunlight} alt="Crunchi"/>
			</Carousel>
		); 
	}
}