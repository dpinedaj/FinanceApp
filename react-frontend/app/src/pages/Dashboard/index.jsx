import React from 'react';

function Index(props) {
    console.log("Dashboard props", props);
    return (
        <div>
            <h2>I'm the dashboard.</h2>
            <p>You love me &lt;3 </p>
        </div>
    );
}

export default Index;
