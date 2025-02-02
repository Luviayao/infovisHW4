function YAxis(props) {
    const { yScale, height, axisLable } = props;

    // Ensure yScale is defined and has ticks method
    if (!yScale || !yScale.ticks) {
        return <g></g>;
    }

    const ticks = yScale.ticks();
    console.log("yaxisticks:", ticks);

    return (
        <g>
            <line y2={height} stroke={"black"} />
            {ticks.map(tick => (
                <g key={tick} transform={`translate(-5, ${yScale(tick)})`}>
                    <line x2={5} stroke={'black'} />
                    <text style={{ textAnchor: 'end', fontSize: '10px' }} x={0}>
                        {tick}
                    </text>
                </g>
            ))}

            <text
                style={{ textAnchor: 'end', fontSize: '15px' }}
                transform={`translate(20, 0)rotate(-90)`}
            >
                {axisLable}
            </text>
        </g>
    );
}
export default YAxis