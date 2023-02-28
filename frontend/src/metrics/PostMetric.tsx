import dayjs from "dayjs";
import { DatePicker, Form, Input, Modal } from "antd";
import { usePostMetrics } from "../api";
import { FETCH_METRICS } from "../api/queries/fetchMetrics";

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

const PostMetric: React.FC<Props> = ({ isModalOpen, toggleModal }) => {
  const [form] = Form.useForm();

  const { postMetric, loading } = usePostMetrics();

  const handleOk = async () => {
    const response = await form.validateFields();
    if (response.errorFields) {
      return;
    }
    console.log(response);
    await postMetric({
      variables: {
        input: response,
      },
      refetchQueries: [{ query: FETCH_METRICS }],
    });
    form.resetFields();
    toggleModal();
  };

  return (
    <div style={{ display: "flex", alignItems: "" }}>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={toggleModal}
        title="Post Metric"
        okText="Post"
        cancelText="Cancel"
        confirmLoading={loading}
      >
        <Form
          form={form}
          style={{ marginTop: "40px" }}
          onFinishFailed={() => alert("Failed to submit")}
          onFinish={() => alert("Form Submitted")}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }, { type: "string" }]}
          >
            <Input placeholder="Name" type="text" />
          </Form.Item>
          <Form.Item
            label="Value"
            name="value"
            rules={[
              { required: true, message: "Please enter value" },
              { type: "string" },
            ]}
          >
            <Input placeholder="Value" type="text" />
          </Form.Item>
          <Form.Item
            label="Timestamp"
            name="timestamp"
            rules={[{ required: true, message: "Please select timestamp" }]}
          >
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Timestamp"
              showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PostMetric;
