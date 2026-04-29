import { FC, useState } from "react";
import {
  Button,
  Input,
  List,
  Modal,
  Space,
  Tag,
  Tooltip,
  Typography,
  message,
  Popconfirm,
} from "antd";
import {
  SaveOutlined,
  DeleteOutlined,
  CheckOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Preset, PromptOption } from "../constants/types";

const { Text } = Typography;

interface PresetManagerProps {
  presets: Preset[];
  currentPrompt: string;
  currentSelectedPrompts: PromptOption[];
  onSave: (name: string, prompt: string, selectedPrompts: PromptOption[]) => void;
  onApply: (preset: Preset) => void;
  onRemove: (id: string) => void;
}

const PresetManager: FC<PresetManagerProps> = ({
  presets,
  currentPrompt,
  currentSelectedPrompts,
  onSave,
  onApply,
  onRemove,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [presetName, setPresetName] = useState("");

  const handleSave = () => {
    if (!presetName.trim()) {
      message.warning("プリセット名を入力してください");
      return;
    }
    if (!currentPrompt.trim()) {
      message.warning("保存するプロンプトがありません");
      return;
    }
    onSave(presetName.trim(), currentPrompt, currentSelectedPrompts);
    message.success(`プリセット「${presetName.trim()}」を保存しました`);
    setPresetName("");
    setIsModalOpen(false);
  };

  const handleApply = (preset: Preset) => {
    onApply(preset);
    message.success(`プリセット「${preset.name}」を適用しました`);
  };

  const handleRemove = (preset: Preset) => {
    onRemove(preset.id);
    message.success(`プリセット「${preset.name}」を削除しました`);
  };

  return (
    <>
      <Space>
        <Tooltip title="現在のプロンプトをプリセットとして保存">
          <Button
            icon={<SaveOutlined />}
            onClick={() => setIsModalOpen(true)}
            disabled={!currentPrompt.trim()}
          >
            プリセットを保存
          </Button>
        </Tooltip>
        <Tooltip title="保存済みプリセットを管理">
          <Button
            icon={<BookOutlined />}
            onClick={() => setIsModalOpen(true)}
            disabled={presets.length === 0}
          >
            プリセット一覧 ({presets.length})
          </Button>
        </Tooltip>
      </Space>

      <Modal
        title="プリセット管理"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setPresetName("");
        }}
        footer={null}
        width={600}
      >
        <div style={{ marginBottom: "24px" }}>
          <Text strong style={{ display: "block", marginBottom: "8px" }}>
            現在のプロンプトを保存
          </Text>
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="プリセット名を入力"
              value={presetName}
              onChange={(e) => setPresetName(e.target.value)}
              onPressEnter={handleSave}
              disabled={!currentPrompt.trim()}
            />
            <Button
              type="primary"
              icon={<SaveOutlined />}
              onClick={handleSave}
              disabled={!currentPrompt.trim() || !presetName.trim()}
            >
              保存
            </Button>
          </Space.Compact>
          {!currentPrompt.trim() && (
            <Text type="secondary" style={{ fontSize: "12px", marginTop: "4px", display: "block" }}>
              プロンプトが空のため保存できません
            </Text>
          )}
        </div>

        <div>
          <Text strong style={{ display: "block", marginBottom: "8px" }}>
            保存済みプリセット
          </Text>
          {presets.length === 0 ? (
            <Text type="secondary">保存済みのプリセットはありません</Text>
          ) : (
            <List
              dataSource={presets}
              renderItem={(preset) => (
                <List.Item
                  key={preset.id}
                  style={{
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "8px",
                    padding: "12px",
                  }}
                  actions={[
                    <Button
                      key="apply"
                      type="primary"
                      size="small"
                      icon={<CheckOutlined />}
                      onClick={() => handleApply(preset)}
                    >
                      適用
                    </Button>,
                    <Popconfirm
                      key="delete"
                      title={`「${preset.name}」を削除しますか？`}
                      onConfirm={() => handleRemove(preset)}
                      okText="削除"
                      cancelText="キャンセル"
                      okButtonProps={{ danger: true }}
                    >
                      <Button
                        size="small"
                        danger
                        icon={<DeleteOutlined />}
                      >
                        削除
                      </Button>
                    </Popconfirm>,
                  ]}
                >
                  <List.Item.Meta
                    title={<Text strong>{preset.name}</Text>}
                    description={
                      <div>
                        <div style={{ marginBottom: "4px" }}>
                          <Space wrap size={4}>
                            {preset.selectedPrompts.slice(0, 5).map((p) => (
                              <Tag key={p.id} color="#1668dc" style={{ margin: 0 }}>
                                {p.label}
                              </Tag>
                            ))}
                            {preset.selectedPrompts.length > 5 && (
                              <Tag color="default" style={{ margin: 0 }}>
                                +{preset.selectedPrompts.length - 5}
                              </Tag>
                            )}
                          </Space>
                        </div>
                        <Text
                          type="secondary"
                          style={{
                            fontSize: "11px",
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            maxWidth: "360px",
                          }}
                        >
                          {preset.prompt}
                        </Text>
                        <Text type="secondary" style={{ fontSize: "11px" }}>
                          {new Date(preset.createdAt).toLocaleString("ja-JP")}
                        </Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default PresetManager;
