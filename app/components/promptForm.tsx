import { Button, Input, Space, message, Form } from "antd";
import { useEffect, FC } from "react";

const { TextArea } = Input;

interface PromptFormProps {
  prompt: string;
  setPrompt: (value: string) => void;
  onClear: () => void;
}

const PromptFormComponent: FC<PromptFormProps> = ({
  prompt,
  setPrompt,
  onClear,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ prompt });
  }, [prompt, form]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(prompt)
      .then(() => {
        message.success("プロンプトをクリップボードにコピーしました");
      })
      .catch(() => {
        message.error("コピーに失敗しました。");
      });
  };

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="プロンプト" name="prompt">
        <TextArea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="ここにプロンプトが表示されます"
          autoSize={{ minRows: 6 }}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" onClick={handleCopy}>
            クリップボードにコピー
          </Button>
          <Button onClick={onClear}>フォームをクリア</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default PromptFormComponent;
