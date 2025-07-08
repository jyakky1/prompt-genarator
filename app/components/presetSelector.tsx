import { FC } from "react";
import { Card, Button, Space, Typography, Tooltip, Tag } from "antd";
import {
  BookOutlined,
  UserOutlined,
  DesktopOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { PresetOption, PromptOption } from "../constants/types";
import { usePresets } from "../hooks/usePresets";

const { Title, Text } = Typography;

interface PresetSelectorProps {
  onApplyPreset: (prompts: PromptOption[]) => void;
  onSaveCurrentAsPreset?: () => void;
  currentPrompts?: PromptOption[];
}

const PresetSelector: FC<PresetSelectorProps> = ({
  onApplyPreset,
  onSaveCurrentAsPreset,
  currentPrompts = [],
}) => {
  const { allPresets, applyPreset } = usePresets();

  const handleApplyPreset = (preset: PresetOption) => {
    const prompts = applyPreset(preset);
    onApplyPreset(prompts);
  };

  const getPresetIcon = (category: "user" | "system") => {
    return category === "system" ? <DesktopOutlined /> : <UserOutlined />;
  };

  const getPresetTagColor = (category: "user" | "system") => {
    return category === "system" ? "blue" : "green";
  };

  // システムプリセットとユーザープリセットを分別
  const systemPresets = allPresets.filter(
    (preset) => preset.category === "system"
  );
  const userPresets = allPresets.filter((preset) => preset.category === "user");

  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}>
        <Title
          level={4}
          style={{ margin: 0, display: "flex", alignItems: "center" }}>
          <BookOutlined style={{ marginRight: 8 }} />
          プリセット
        </Title>
        {currentPrompts.length > 0 && onSaveCurrentAsPreset && (
          <Button
            type="dashed"
            icon={<SaveOutlined />}
            onClick={onSaveCurrentAsPreset}
            size="small">
            現在の選択を保存
          </Button>
        )}
      </div>

      {/* システムプリセット */}
      {systemPresets.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <Text strong style={{ marginBottom: 8, display: "block" }}>
            システムプリセット
          </Text>
          <Space wrap>
            {systemPresets.map((preset) => (
              <Card
                key={preset.id}
                size="small"
                hoverable
                style={{
                  width: 180,
                  cursor: "pointer",
                }}
                onClick={() => handleApplyPreset(preset)}
                bodyStyle={{ padding: 12 }}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    <Text strong style={{ fontSize: 12 }}>
                      {preset.name}
                    </Text>
                    <Tag
                      icon={getPresetIcon(preset.category)}
                      color={getPresetTagColor(preset.category)}>
                      {preset.category}
                    </Tag>
                  </div>
                  {preset.description && (
                    <Tooltip title={preset.description}>
                      <Text
                        type="secondary"
                        style={{
                          fontSize: 11,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>
                        {preset.description}
                      </Text>
                    </Tooltip>
                  )}
                  <Text style={{ fontSize: 10, color: "#999" }}>
                    {preset.prompts.length}個のプロンプト
                  </Text>
                </div>
              </Card>
            ))}
          </Space>
        </div>
      )}

      {/* ユーザープリセット */}
      {userPresets.length > 0 && (
        <div>
          <Text strong style={{ marginBottom: 8, display: "block" }}>
            マイプリセット
          </Text>
          <Space wrap>
            {userPresets.map((preset) => (
              <Card
                key={preset.id}
                size="small"
                hoverable
                style={{
                  width: 180,
                  cursor: "pointer",
                }}
                onClick={() => handleApplyPreset(preset)}
                bodyStyle={{ padding: 12 }}>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                    <Text strong style={{ fontSize: 12 }}>
                      {preset.name}
                    </Text>
                    <Tag
                      icon={getPresetIcon(preset.category)}
                      color={getPresetTagColor(preset.category)}>
                      {preset.category}
                    </Tag>
                  </div>
                  {preset.description && (
                    <Tooltip title={preset.description}>
                      <Text
                        type="secondary"
                        style={{
                          fontSize: 11,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}>
                        {preset.description}
                      </Text>
                    </Tooltip>
                  )}
                  <Text style={{ fontSize: 10, color: "#999" }}>
                    {preset.prompts.length}個のプロンプト
                  </Text>
                </div>
              </Card>
            ))}
          </Space>
        </div>
      )}

      {userPresets.length === 0 && (
        <div style={{ marginTop: 8 }}>
          <Text type="secondary" style={{ fontSize: 12 }}>
            マイプリセットはまだありません。
            {currentPrompts.length > 0 && onSaveCurrentAsPreset && (
              <span> 現在の選択を保存してマイプリセットを作成できます。</span>
            )}
          </Text>
        </div>
      )}
    </div>
  );
};

export default PresetSelector;
