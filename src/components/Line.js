import { ResponsiveLine } from '@nivo/line'
import { useTheme } from '@mui/material/styles'
import { mockLineData as data } from '../data/mockdata'
import { tokens } from '../theme'


export default function Line({isDashboard=false}) {
  
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    
  
  
    return (


    <ResponsiveLine
        data={data}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:colors.gray[100],
                    },
                },
                legend:{
                    text:{
                        fill:colors.gray[100],
                    }
                },
                ticks:{
                    line:{
                        stroke:colors.gray[100],
                        strokeWidth:1,
                    },
                    text:{
                    fill:colors.gray[100]
                    }
                },
            },
            legends:{
                text:{
                    fill:colors.gray[100]
                }
            }
        }}
        colors={isDashboard ? {datum:"color"} : {scheme : "nivo"}}
        margin={isDashboard ? { top: 40, right: 80, bottom: 80, left: 50 } : { top: 50, right: 110, bottom: 50, left: 60 }}
        padding={isDashboard && {bottom:10}}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={isDashboard ? null : {
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? undefined : 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        pointSize={9}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        isInteractive={false}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
}
