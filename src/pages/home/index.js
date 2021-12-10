import React from 'react';

import { Banner } from './banner';
import { BestService } from './best-service';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/* Home Banner */}
                <Banner />
                {/* Home Banner */}

                {/* Best Service */}
                <BestService />
                {/* Best Service */}
            </div>
        )
    }
}
export { Home };