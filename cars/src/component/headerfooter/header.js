import React from "react";
import "./header.css"; // Optional: include your custom CSS if needed

const Header = () => {
    return (
        <div className="rs-storeroom" role="main">
            <div className="rs-storehome-app"></div>

            <div id="rotating-promo-banner">
                <div className="rc-ribbon ribbon ribbon-blue-to-default rs-storehome-banner">
                    <div className="ribbon-drop-wrapper">
                        <div className="ribbon-content-wrapper">
                            <div className="ribbon-content rc-ribbon-content-container row">
                                <div className="column large-12 small-12 large-centered">
                                    <div className="rc-ribbon-content">
                                        <div className="rc-inline-gallery rc-ribbon-content-autoscroll">
                                            <div
                                                className="rc-ribbon-content-gallery"
                                                data-core-gallery="true"
                                                data-core-gallery-fade="false"
                                            >
                                                <div
                                                    className="rc-ribbon-content-scroller"
                                                    data-core-gallery-scroller="true"
                                                    style={{
                                                        transform: "translateX(0px)",
                                                        width: "100%",
                                                        insetInlineStart: "0%",
                                                        transition: "none",
                                                    }}
                                                >
                                                    <div
                                                        className="rc-ribbon-gallery-item rc-inline-gallery-item"
                                                        aria-hidden="false"
                                                    >
                                                        <div className="rc-ribbon-content-item-base rc-ribbon-content-item-0">
                                                            <div className="ribbon dd-compact-small-2">
                                                                Get up to 12 months of No Cost EMI
                                                                <sup>
                                                                    <span className="visuallyhidden"> § </span>
                                                                </sup>
                                                                plus up to ₹8000.00 instant cashback
                                                                <sup>
                                                                    <span className="visuallyhidden"> §§ </span>
                                                                </sup>
                                                                on selected products with eligible cards.
                                                                <a href="/seeoffer" data-slot-name="generic-1" data-feature-name="Astro Link" data-display-name="AOS: overlay/store/in_affordability" role="button" data-ase-loader="buyflow-info-overlay-loader" data-ase-rerender="" data-ase-loader-action="load" class="as-buttonlink rs-financeoverlay-buttonlink icon icon-after icon-pluscircle"> See Offers </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> {/* Gallery End */}
                                        </div> {/* Autoscroll End */}
                                    </div> {/* Ribbon Content End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Banner End */}
            </div>
        </div>
    );
};

export default Header;
