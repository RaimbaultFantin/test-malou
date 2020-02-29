import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import PieChart from 'react-minimal-pie-chart';

import 'bootstrap/dist/css/bootstrap.min.css';

let colors = require('../utils/colors');

export default function Chart({ topics }) {

    const [topicCounts, setTopicCounts] = useState([])

    useEffect(() => {
        var counts = {}
        // count duplicate topic in topics
        topics.forEach(tpc => { counts[tpc] = (counts[tpc] || 0) + 1; });
        let chart = []
        let i = 0
        for (let [key, value] of Object.entries(counts)) {
            let obj = {
                title: key,
                value: value,
                color: colors[i]
            }
            chart.push(obj)
            i++
        }
        setTopicCounts(chart)
    }, [topics])

    // Styles
    const half = {
        height: "50%"
    }

    const defaultLabelStyle = {
        fontSize: '4px',
        fontFamily: 'sans-serif',
        fill: '#ffffff',
    };

    return (
        <Row style={half} className="justify-content-center d-flex align-items-center">
            <PieChart
                label={true}
                labelStyle={defaultLabelStyle}
                labelPosition={80}
                data={topicCounts}
            />
        </Row>
    )
}