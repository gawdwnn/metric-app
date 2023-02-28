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
      {data?.map((d:any) => (
        <Timeline.Item>
          <Text>{d.name}</Text> <Text>{d.value}</Text> <Text>{(d.timestamp)}</Text>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default TimelineComp;
