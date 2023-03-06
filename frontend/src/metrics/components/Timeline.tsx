import React from "react";
import { Spin, Timeline, Typography } from "antd";
import { useFetchMetrics } from "../../api";

const { Text } = Typography;

interface Props {}

const TimelineComp: React.FC<Props> = () => {
  const { data, loading } = useFetchMetrics();

  if (loading) {
    return <Spin />;
  }

  return (
    <Timeline>
      {data?.map(({name, value, timestamp}) => {
        return (
          <Timeline.Item>
            <Text>{name}</Text> <Text>{value}</Text> <Text>{timestamp}</Text>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};

export default TimelineComp;
