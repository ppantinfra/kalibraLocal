import React from 'react';
import Box from '@mui/material/Box';
import { useAssessmentDetailsAccordionStyles } from './AssessmentDetailsAccordionStyles';
import { ProgressLine } from '../charts';
import { ColorHelper } from '../../core/helper/ColorHelper';


const GenerateGraph = ({ data, graphData }: { data: any, graphData: any }) => {
    const classes = useAssessmentDetailsAccordionStyles();

    return (
        <span className={classes.cols} key={data?.id}>
            <ProgressLine
                label={graphData?.label}
                visualParts={graphData?.visualParts}
                total={graphData?.total}
                point={graphData?.point}
                unit={graphData?.unit}
                graphCategory={data?.graphCategory}
                displayCategoryColor={data?.displayCategoryColor}
                categories={data?.categories}
                data={data}
                category={data?.category}
                showLabelLeftside={true}
                pointColor={ColorHelper.getBarColor(data?.displayCategoryColor, data?.category)}
                infoWhat={data.infoWhat}
                infoHow={data.infoHow}
                infoWhy={data.infoWhy}
            />
        </span>
    );
};



const AssessmentDetailsGraph = ({ data, graphChartDatas }: { data: any, graphChartDatas: any }) => {
    const classes = useAssessmentDetailsAccordionStyles();
    return (
        <React.Fragment>
            <Box>
                {data &&
                    data.map((sepData: any, index) => {
                        const firstIndex = index + 1;
                        const secondIndex = index + 2;
                        const thirdIndex = index + 3;
                        if (index % 4 === 0) {
                            return (
                                <div className={classes.col4} key={data[index]?.id + 'data'}>
                                    {/* first graph */}
                                    {data[index] && (
                                        <GenerateGraph data={data[index]} graphData={graphChartDatas[data[index]?.id]} />
                                    )}
                                    {/* second graph */}
                                    {data[firstIndex] && (
                                        <GenerateGraph data={data[firstIndex]} graphData={graphChartDatas[data[firstIndex]?.id]} />
                                    )}
                                    {/* Third graph */}
                                    {data[secondIndex] && (
                                        <GenerateGraph data={data[secondIndex]} graphData={graphChartDatas[data[secondIndex]?.id]} />
                                    )
                                    }
                                    {/* Fourth graph */}
                                    {data[thirdIndex] && (
                                        <GenerateGraph data={data[thirdIndex]} graphData={graphChartDatas[data[thirdIndex]?.id]} />
                                    )}
                                </div>
                            );
                        }
                    }
                    )}
            </Box>
        </React.Fragment>
    );
};


export default AssessmentDetailsGraph;