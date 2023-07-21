import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "Mon",
    "hot dog": 51,
    "hot dogColor": "hsl(310, 70%, 50%)",
    burger: 91,
    burgerColor: "hsl(265, 70%, 50%)",
  },
  {
    country: "Tue",
    "hot dog": 199,
    "hot dogColor": "hsl(239, 70%, 50%)",
    burger: 193,
    burgerColor: "hsl(213, 70%, 50%)",
  },
  {
    country: "Wed",
    "hot dog": 43,
    "hot dogColor": "hsl(317, 70%, 50%)",
    burger: 120,
    burgerColor: "hsl(26, 70%, 50%)",
  },
  {
    country: "Thu",
    "hot dog": 167,
    "hot dogColor": "hsl(128, 70%, 50%)",
    burger: 92,
    burgerColor: "hsl(331, 70%, 50%)",
  },
  {
    country: "Fri",
    "hot dog": 192,
    "hot dogColor": "hsl(49, 70%, 50%)",
    burger: 176,
    burgerColor: "hsl(118, 70%, 50%)",
  },
  {
    country: "Sat",
    "hot dog": 61,
    "hot dogColor": "hsl(274, 70%, 50%)",
    burger: 68,
    burgerColor: "hsl(94, 70%, 50%)",
  },
  {
    country: "Sun",
    "hot dog": 161,
    "hot dogColor": "hsl(329, 70%, 50%)",
    burger: 14,
    burgerColor: "hsl(133, 70%, 50%)",
  },
];
const Totalrevenuegraph = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["hot dog", "burger"]}
      indexBy="country"
      margin={{ top: 5, right: 40, bottom: 90, left: 60 }}
      padding={0.7}
      innerPadding={4}
      maxValue={214}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "paired" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: " ",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={14}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 33,
          translateY: 46,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          symbolShape: "circle",
          itemOpacity: 0.85,
          symbolSize: 13,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
};
export default Totalrevenuegraph;
