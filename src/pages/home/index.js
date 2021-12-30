import React from 'react';

import { Banner } from './banner';
import { BestProduct } from './best-product';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/* Home Banner */}
                <Banner />
                {/* Home Banner */}

                {/* Best Service */}
                <BestProduct />
                {/* Best Service */}
            </div>
        )
    }
}
export { Home };