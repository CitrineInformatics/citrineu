import React , { Component } from 'react';

class Tutorials extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="banner" id="banner-tutorials">
                <div className="container">
                    <div className="module p50">
                        <h2 className="mbm">Browse Tutorials</h2>
                        <p className="large">The Tutorials section of CitrineU will feature easy-to-follow instructional guides that walk the user through specific tasks on the Citrine Platform. As CitrineU grows, this section will grow as well. Please check back soon.</p>
                    </div>
                </div>
            </section>

        )
    }
}

export default Tutorials;