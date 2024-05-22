import React, { useEffect } from 'react';

class GoogleAdsense extends React.Component {
    constructor(props:any) {
      super(props);
    }

    componentDidMount(){

      // Push the ad when the script is loaded
    
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      
    }

    render(){
        return (
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-4549864067149386"
                data-ad-slot="2969075044"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        );
    }
}

export default GoogleAdsense;
