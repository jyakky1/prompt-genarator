import type { MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { useMemo, useState } from "react";
import {
  Typography,
  Button,
  Space,
  Switch,
  Breadcrumb,
  Tag,
  Drawer,
} from "antd";
import {
  ArrowLeftOutlined,
  CloseOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import PromptForm from "../components/promptForm";
import PresetPanel from "../components/preset/PresetPanel";
import { useCurrentPrompts } from "../hooks/useCurrentPrompts";
import type { PromptCategory, PromptOption } from "~/types/prompt";
import type { TagPreset } from "~/types/preset";
import { loadPrompts } from "~/lib/prompt-loader.server";

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

export async function loader() {
  const prompts = await loadPrompts();
  return json({ prompts });
}

export default function Index() {
  const { prompts } = useLoaderData<typeof loader>();
  const [prompt, setPrompt] = useState("");
  const [nsfwEnabled, setNsfwEnabled] = useState(false);
  const [presetDrawerOpen, setPresetDrawerOpen] = useState(false);
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

  const handleApplyPreset = (preset: TagPreset) => {
    setSelectedPromptList(preset.options);
    setPrompt(preset.options.map((option) => option.value).join(", "));
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

  const currentTags = useCurrentPrompts(
    prompts as PromptCategory[],
    selectedCategory
  );

  // プロンプト欄のテキストを元にプリセット対象タグを生成する
  // 登録済みタグは元のidを引き継ぎ、未登録タグは負のidを付与して区別する
  const presetTags = useMemo<PromptOption[]>(() => {
    return prompt
      .split(", ")
      .map((value) => value.trim())
      .filter((value) => value.length > 0)
      .map((value, index) => {
        const matched = selectedPrompt.find(
          (option) => option.value === value
        );
        return matched ?? { id: -(index + 1), label: value, value };
      });
  }, [prompt, selectedPrompt]);

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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}>
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => handleBreadcrumbClick(currentLevel - 1)}
          disabled={currentLevel === 0}>
          戻る
        </Button>
        <Breadcrumb style={{ cursor: "pointer" }} items={breadcrumbItems} />
      </div>
      <div>
        <Text strong>プロンプトタグ</Text>
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
                color: "#1668dc",
                borderColor: "#1668dc",
                background: "transparent",
              }}
              bordered
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
                variant="dashed"
                color="primary"
                onClick={() => handleRemoveValue(option)}
                style={{ cursor: "pointer" }}>
                {option.label}
              </Button>
            ) : (
              <Button
                key={index}
                variant="filled"
                color="default"
                onClick={() => handleOptionClick(option)}
                disabled={false}
                style={{ cursor: "pointer" }}>
                {option.label}
              </Button>
            );
          })}
        </Space>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Button
          icon={<UnorderedListOutlined />}
          onClick={() => setPresetDrawerOpen(true)}>
          プリセットを開く
        </Button>
      </div>
      <PromptForm prompt={prompt} setPrompt={setPrompt} onClear={handleClear} />
      <Drawer
        title="プリセット"
        placement="left"
        open={presetDrawerOpen}
        onClose={() => setPresetDrawerOpen(false)}
        closable={false}
        maskClosable
        width={360}>
        <PresetPanel
          presetTags={presetTags}
          onApplyPreset={handleApplyPreset}
        />
      </Drawer>
    </div>
  );
}
