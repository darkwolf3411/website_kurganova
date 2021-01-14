import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div>
            <div className="all">
                <input defaultChecked type="radio" name="respond" id="desktop" />
                <article id="slider">
                    <input defaultChecked type="radio" name="slider" id="switch1" />
                    <input type="radio" name="slider" id="switch2" />
                    <input type="radio" name="slider" id="switch3" />
                    <input type="radio" name="slider" id="switch4" />
                    <input type="radio" name="slider" id="switch5" />
                    <div id="slides">
                        <div id="overflow">
                            <div className="image">
                                <article></article>
                                <article></article>
                                <article></article>
                                <article></article>
                                <article></article>
                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <label htmlFor="switch1" />
                        <label htmlFor="switch2" />
                        <label htmlFor="switch3" />
                        <label htmlFor="switch4" />
                        <label htmlFor="switch5" />
                    </div>
                    <div id="active">
                        <label htmlFor="switch1" />
                        <label htmlFor="switch2" />
                        <label htmlFor="switch3" />
                        <label htmlFor="switch4" />
                        <label htmlFor="switch5" />
                    </div>
                </article>
            </div>
        </div>
    )
}

export default Slider;