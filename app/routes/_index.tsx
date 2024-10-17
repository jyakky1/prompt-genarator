import type { MetaFunction } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Form } from "@remix-run/react";
import {
  Typography,
  Button,
  Input,
  Space,
  message,
  Switch,
  Breadcrumb,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { hairPrompts } from "../../constant/hair";

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

export const meta: MetaFunction = () => {
  return [
    { title: "ANIME Prompt Generator" },
    {
      name: "description",
      content: "AI画像生成用のプロンプトを作成するツールです。",
    },
  ];
};

export default function Index() {
  const [prompt, setPrompt] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [nsfwEnabled, setNsfwEnabled] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleOptionClick = (option: any, isFinal: boolean) => {
    if (isFinal) {
      if (selectedValues.includes(option.value)) {
        // Remove value from prompt
        setPrompt((prev) => {
          const newPrompt = prev
            .split(", ")
            .filter((val) => val !== option.value)
            .join(", ");
          return newPrompt;
        });
        setSelectedValues((prev) => prev.filter((val) => val !== option.value));
      } else {
        // Add value to prompt
        setPrompt((prev) => {
          const newPrompt = prev ? `${prev}, ${option.value}` : option.value;
          return newPrompt;
        });
        setSelectedValues((prev) => [...prev, option.value]);
      }
    } else {
      setSelectedOptions((prev) => [...prev, option.label]);
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentLevel(index);
    setSelectedOptions((prev) => prev.slice(0, index));
  };

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

  const handleClear = () => {
    setPrompt("");
    setCurrentLevel(0);
    setSelectedOptions([]);
    setSelectedValues([]);
  };

  const handleNsfwToggle = (checked: boolean) => {
    setNsfwEnabled(checked);
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  const getCurrentOptions = () => {
    let options = hairPrompts;
    for (let i = 0; i < currentLevel; i++) {
      const selectedOption = options.find(
        (opt) => opt.label === selectedOptions[i]
      );
      if (selectedOption && selectedOption.tags) {
        options = selectedOption.tags;
      }
    }
    return options;
  };

  const currentOptions = getCurrentOptions();

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "32px auto 0px auto",
        position: "relative",
      }}>
      <Title level={2}>AI生成用コマンドプロンプト作成</Title>
      <div style={{ position: "absolute", top: "0px", right: "16px" }}>
        <Text>NSFW:</Text>
        <Switch
          checked={nsfwEnabled}
          onChange={handleNsfwToggle}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <Breadcrumb style={{ marginBottom: "16px" }}>
        <Breadcrumb.Item onClick={() => handleBreadcrumbClick(0)}>
          top
        </Breadcrumb.Item>
        {selectedOptions.map((option, index) => (
          <Breadcrumb.Item
            key={index}
            onClick={() => handleBreadcrumbClick(index + 1)}>
            {option}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Paragraph>
        <Text strong>プロンプトタグ</Text>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => handleBreadcrumbClick(currentLevel - 1)}
          disabled={currentLevel === 0}
          style={{ marginLeft: "8px" }}
        />
      </Paragraph>
      <Space wrap style={{ marginBottom: "16px" }}>
        {currentOptions.map((option, index) => (
          <Button
            key={index}
            type={selectedValues.includes(option.value) ? "primary" : "default"}
            onClick={() => handleOptionClick(option, !option.tags)}>
            {option.label}
          </Button>
        ))}
      </Space>
      <Form>
        <div>
          <label htmlFor="prompt">プロンプト</label>
          <TextArea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="ここにプロンプトが表示されます"
            autoSize={{ minRows: 6 }}
          />
        </div>
      </Form>
      <Space style={{ marginTop: "8px" }}>
        <Button type="primary" onClick={handleCopy}>
          クリップボードにコピー
        </Button>
        <Button onClick={handleClear}>フォームをクリア</Button>
      </Space>
    </div>
  );
}
