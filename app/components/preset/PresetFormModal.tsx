import { FC, useEffect } from "react";
import { Modal, Form, Input } from "antd";

interface PresetFormValues {
  name: string;
}

interface PresetFormModalProps {
  open: boolean;
  title: string;
  initialName?: string;
  onSubmit: (name: string) => void;
  onCancel: () => void;
}

const PresetFormModal: FC<PresetFormModalProps> = ({
  open,
  title,
  initialName = "",
  onSubmit,
  onCancel,
}) => {
  const [form] = Form.useForm<PresetFormValues>();

  useEffect(() => {
    if (open) {
      form.setFieldsValue({ name: initialName });
    }
  }, [open, initialName, form]);

  const handleOk = async () => {
    const values = await form.validateFields();
    onSubmit(values.name.trim());
    form.resetFields();
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="保存"
      cancelText="キャンセル"
      destroyOnClose>
      <Form form={form} layout="vertical">
        <Form.Item
          label="プリセット名"
          name="name"
          rules={[
            { required: true, message: "プリセット名を入力してください" },
            {
              validator: (_, value) =>
                value && value.trim().length > 0
                  ? Promise.resolve()
                  : Promise.reject(new Error("プリセット名を入力してください")),
            },
          ]}>
          <Input placeholder="例: お気に入りの構図" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PresetFormModal;
