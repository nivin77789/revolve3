import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "Mon",
    "Reality sales": 51,
    "hot dogColor": "hsl(310, 70%, 50%)",
    "Target sales": 91,
    burgerColor: "hsl(265, 70%, 50%)",
  },
  {
    country: "Tue",
    "Reality sales": 199,
    "hot dogColor": "hsl(239, 70%, 50%)",
    "Target sales": 193,
    burgerColor: "hsl(213, 70%, 50%)",
  },
  {
    country: "Wed",
    "Reality sales": 43,
    "hot dogColor": "hsl(317, 70%, 50%)",
    "Target sales": 120,
    burgerColor: "hsl(26, 70%, 50%)",
  },
  {
    country: "Thu",
    "Reality sales": 167,
    "hot dogColor": "hsl(128, 70%, 50%)",
    "Target sales": 92,
    burgerColor: "hsl(331, 70%, 50%)",
  },
  {
    country: "Fri",
    "Reality sales": 192,
    "hot dogColor": "hsl(49, 70%, 50%)",
    "Target sales": 176,
    burgerColor: "hsl(118, 70%, 50%)",
  },
  {
    country: "Sat",
    "Reality sales": 61,
    "hot dogColor": "hsl(274, 70%, 50%)",
    "Target sales": 68,
    burgerColor: "hsl(94, 70%, 50%)",
  },
  {
    country: "Sun",
    "Reality sales": 161,
    "hot dogColor": "hsl(329, 70%, 50%)",
    "Target sales": 14,
    burgerColor: "hsl(133, 70%, 50%)",
  },
];
const Targetgraph = () => {
  return (
    <ResponsiveBar
      data={data}
      keys={["Reality sales", "Target sales"]}
      indexBy="country"
      margin={{ top: 5, right: 10, bottom: 90, left: 10 }}
      padding={0.25}
      innerPadding={4}
      maxValue={184}
      groupMode="grouped"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "purpleRed_green" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb6",
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
        modifiers: [["darker", "1.7"]],
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
      axisLeft={null}
      enableGridY={false}
      enableLabel={false}
      labelSkipWidth={36}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", "1.9"]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 45,
          translateY: 43,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
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
export default Targetgraph;
