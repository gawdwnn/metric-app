import React, { useState } from "react";
import Timeline from "./components/Timeline";
import PostMetric from "./PostMetric";
import { Button, Card, Layout } from "antd";
import { contentStyle } from "./Metrics.style";

const { Content } = Layout;

interface Props {}

const Metrics: React.FC<Props> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const PostButton = () => (
    <Button type="primary" onClick={toggleModal}>
      Post Metric
    </Button>
  );
  return (
    <Content style={contentStyle}>
      <Card title="Metric Timeline" extra={PostButton()} style={{ width: 800 }}>
        <PostMetric toggleModal={toggleModal} isModalOpen={isModalOpen} />
        <Timeline />
      </Card>
    </Content>
  );
};

export default Metrics;
