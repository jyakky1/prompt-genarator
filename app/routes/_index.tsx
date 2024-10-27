import type { MetaFunction } from "@remix-run/react";
import { useState } from "react";
import { Typography, Button, Space, Switch, Breadcrumb, Tag } from "antd";
import { ArrowLeftOutlined, CloseOutlined } from "@ant-design/icons";
import { prompts } from "../constants/index";
import PromptForm from "../components/PromptForm";
import { useCurrentPrompts } from "../hooks/useCurrentPrompts";
import { PromptCategory, PromptOption } from "../constants/types";

const { Title, Text } = Typography;

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
  const [nsfwEnabled, setNsfwEnabled] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  // 親も含め、選択されたcategory情報を格納している
  // この中にvalueを持つ末端ノードの情報は入らない
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory[]>(
    []
  );
  // 選択された末端ノードのプロンプト情報が格納される
  const [selectedPrompt, setSelectedPromptList] = useState<PromptOption[]>([]);

  const handleOptionClick = (option: PromptOption | PromptCategory) => {
    if ("id" in option) {
      setPrompt((prev) => {
        const newPrompt = prev ? `${prev}, ${option.value}` : option.value;
        return newPrompt;
      });
      setSelectedPromptList((prev) => [...prev, option]);
    } else {
      setSelectedCategory((prev) => [...prev, option]);
      setCurrentLevel((prev) => prev + 1);
    }
  };

  const handleBreadcrumbClick = (index: number) => {
    setCurrentLevel(index);
    setSelectedCategory((prev) => prev.slice(0, index));
  };

  const handleClear = () => {
    setPrompt("");
    setSelectedPromptList([]);
  };

  const handleNsfwToggle = (checked: boolean) => {
    setNsfwEnabled(checked);
  };

  const handleRemoveValue = (removePrompt: PromptOption) => {
    setPrompt((prev) => {
      const newPrompt = prev
        .split(", ")
        .filter((val) => val !== removePrompt.value)
        .join(", ");
      return newPrompt;
    });
    setSelectedPromptList((prev) =>
      prev.filter((prevPrompt) => prevPrompt.id !== removePrompt.id)
    );
  };

  const currentTags = useCurrentPrompts(prompts, selectedCategory);

  // Breadcrumb itemsを生成
  const breadcrumbItems = [
    { title: "top", onClick: () => handleBreadcrumbClick(0) },
    ...selectedCategory.map((option, index) => ({
      title: option.label,
      onClick: () => handleBreadcrumbClick(index + 1),
    })),
  ];

  return (
    <div
      style={{
        width: "800px",
        marginTop: "32px",
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
      <Breadcrumb
        style={{ marginBottom: "16px", cursor: "pointer" }}
        items={breadcrumbItems}
      />
      <div>
        <Text strong>プロンプトタグ</Text>
        <Button
          icon={<ArrowLeftOutlined />}
          onClick={() => handleBreadcrumbClick(currentLevel - 1)}
          disabled={currentLevel === 0}
          style={{ marginLeft: "8px" }}
        />
      </div>
      <div>
        <Space wrap style={{ marginTop: "16px" }}>
          {selectedPrompt.map((value) => (
            <Tag
              style={{
                height: "26px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              color="#1668dc"
              key={value.id}
              onClick={() => handleRemoveValue(value)}
              icon={<CloseOutlined />}>
              {value.label}
            </Tag>
          ))}
        </Space>
      </div>
      <div>
        <Space wrap style={{ marginBottom: "16px", marginTop: "16px" }}>
          {currentTags.map((option, index) => {
            const isSelected = selectedPrompt.some((prompt) => {
              return "id" in option ? prompt.id === option.id : false;
            });

            return isSelected && "id" in option ? (
              <Button
                key={index}
                type="primary"
                onClick={() => handleRemoveValue(option)}
                style={{ cursor: "pointer" }}>
                {option.label}
              </Button>
            ) : (
              <Button
                key={index}
                type="default"
                onClick={() => handleOptionClick(option)}
                disabled={false}
                style={{ cursor: "pointer" }}>
                {option.label}
              </Button>
            );
          })}
        </Space>
      </div>
      <PromptForm prompt={prompt} setPrompt={setPrompt} onClear={handleClear} />
    </div>
  );
}
