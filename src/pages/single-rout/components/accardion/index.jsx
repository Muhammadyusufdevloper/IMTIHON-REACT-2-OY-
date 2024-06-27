import { useState } from 'react';
import './Accordion.scss';

const Accordion = () => {
    const [activeTab, setActiveTab] = useState('productInfo');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="accordion">
            <div className="accordion__tabs">
                <div
                    className={`accordion__tab ${activeTab === 'productInfo' ? 'active' : ''}`}
                    onClick={() => handleTabClick('productInfo')}
                >
                    Product Information
                </div>
                <div
                    className={`accordion__tab ${activeTab === 'reviews' ? 'active' : ''}`}
                    onClick={() => handleTabClick('reviews')}
                >
                    Reviews 0
                </div>
                <div
                    className={`accordion__tab ${activeTab === 'anotherTab' ? 'active' : ''}`}
                    onClick={() => handleTabClick('anotherTab')}
                >
                    Another Tab
                </div>
            </div>
            <div className="accordion__content">
                {activeTab === 'productInfo' && (
                    <div className="accordion__panel">
                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                    </div>
                )}
                {activeTab === 'reviews' && (
                    <div className="accordion__panel">
                        <div className="accordion__panel">
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    </div>
                )}
                {activeTab === 'anotherTab' && (
                    <div className="accordion__panel">
                        <div className="accordion__panel">
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                            <p>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Accordion;
