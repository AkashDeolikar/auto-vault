import React, { useState, useRef } from "react";
import "./temp.css";

const Temp = () => {
    const totalImages = 35;
    const [currentIndex, setCurrentIndex] = useState(1);
    const isDragging = useRef(false);
    const startX = useRef(0);
    //For Desktop
    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX;
    };

    const handleMouseUp = () => {
        isDragging.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const delta = e.clientX - startX.current;

        if (Math.abs(delta) > 5) {
            setCurrentIndex((prev) => {
                let newIndex = prev + (delta > 0 ? -1 : 1);
                if (newIndex < 1) newIndex = totalImages;
                if (newIndex > totalImages) newIndex = 1;
                return newIndex;
            });
            startX.current = e.clientX;
        }
    };
    //For Mobile
    const handleTouchStart = (e) => {
        isDragging.current = true;
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const delta = e.touches[0].clientX - startX.current;

        if (Math.abs(delta) > 15) { //5
            setCurrentIndex((prev) => {
                let newIndex = prev + (delta > 0 ? -1 : 1);
                if (newIndex < 1) newIndex = totalImages;
                if (newIndex > totalImages) newIndex = 1;
                return newIndex;
            });
            startX.current = e.touches[0].clientX;
        }
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };


    return (
        <div className="cretabox">
            <div className="vr-360-exterior">
                <div className="section-inner">
                    <div className="titArea pvreTitArea">
                        <h3 className="subTitM alignC">360° Experience</h3>
                        <div className="conAreaM alignC">
                            Click and turn the vehicle image to the left or right.
                        </div>
                    </div>
                    <div className="experiencePanoramaBox exterior">
                        <div
                            className="panorama loadingEnd"
                            style={{
                                position: "relative",
                                margin: "0px auto",
                                padding: "0px",
                                height: "425px",
                                width: "1120px",
                                overflow: "hidden",
                                cursor: "grab",
                            }}
                            //for desktop
                            onMouseDown={handleMouseDown}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            //for mobile
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}

                        >
                            {[...Array(totalImages)].map((_, i) => {
                                const index = i + 1;
                                return (
                                    <img
                                        key={index}
                                        className={`panoVues vue${index}`}
                                        src={`/images/creta/abyss-black_${index}.png`} // ✅ Now correct
                                        // src={`/images/nexon/PureGrey-${index}-3.png`}
                                        style={{
                                            visibility: index === currentIndex ? "visible" : "hidden",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                        }}
                                        width="1120"
                                        height="425"
                                        // width="560"
                                        // height="212 "
                                        alt={`creta-view-${index}`}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Temp;
