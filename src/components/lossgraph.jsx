import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "This month",
    color: "hsl(176, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 233,
      },
      {
        x: "feb",
        y: 39,
      },
      {
        x: "mar",
        y: 16,
      },
      {
        x: "apr",
        y: 47,
      },
      {
        x: "may",
        y: 109,
      },
      {
        x: "jun",
        y: 223,
      },
      {
        x: "jul",
        y: 65,
      },
      {
        x: "aug",
        y: 94,
      },
      {
        x: "sep",
        y: 151,
      },
      {
        x: "oct",
        y: 280,
      },
      {
        x: "nov",
        y: 15,
      },
      {
        x: "dec",
        y: 265,
      },
    ],
  },
  {
    id: "Last month",
    color: "hsl(266, 70%, 50%)",
    data: [
      {
        x: "jan",
        y: 58,
      },
      {
        x: "feb",
        y: 289,
      },
      {
        x: "mar",
        y: 207,
      },
      {
        x: "apr",
        y: 122,
      },
      {
        x: "may",
        y: 1,
      },
      {
        x: "jun",
        y: 292,
      },
      {
        x: "jul",
        y: 106,
      },
      {
        x: "aug",
        y: 249,
      },
      {
        x: "sep",
        y: 16,
      },
      {
        x: "oct",
        y: 201,
      },
      {
        x: "nov",
        y: 252,
      },
      {
        x: "dec",
        y: 224,
      },
    ],
  },
];
const Lossgraph = () => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 5, right: 40, bottom: 90, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={null}
      colors={{ scheme: "pastel1" }}
      enablePoints={false}
      pointColor={{ from: "color", modifiers: [] }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "color", modifiers: [] }}
      pointLabelYOffset={-12}
      enableArea={true}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 19,
          translateY: 46,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
export default Lossgraph;
