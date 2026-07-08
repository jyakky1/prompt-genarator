import { FC, useState } from "react";
import {
  Button,
  Collapse,
  List,
  Space,
  Typography,
  Popconfirm,
  message,
  Tag,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { PromptOption } from "~/types/prompt";
import type { TagPreset } from "~/types/preset";
import { useTagPresets } from "~/hooks/useTagPresets";
import PresetFormModal from "./PresetFormModal";

const { Text } = Typography;

interface PresetPanelProps {
  presetTags: PromptOption[];
  onApplyPreset: (preset: TagPreset) => void;
}

type ModalMode = "create" | "edit";

const PresetPanel: FC<PresetPanelProps> = ({ presetTags, onApplyPreset }) => {
  const { presets, addPreset, updatePreset, deletePreset } = useTagPresets();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("create");
  const [editingPreset, setEditingPreset] = useState<TagPreset | null>(null);

  const handleOpenCreate = () => {
    if (presetTags.length === 0) {
      message.warning("保存するタグがありません");
      return;
    }
    setModalMode("create");
    setEditingPreset(null);
    setModalOpen(true);
  };

  const handleOpenEdit = (preset: TagPreset) => {
    if (presetTags.length === 0) {
      message.warning("上書き保存するタグがありません");
      return;
    }
    setModalMode("edit");
    setEditingPreset(preset);
    setModalOpen(true);
  };

  const handleSubmit = (name: string) => {
    if (modalMode === "edit" && editingPreset) {
      updatePreset(editingPreset.id, { name, options: presetTags });
      message.success("プリセットを更新しました");
    } else {
      addPreset(name, presetTags);
      message.success("プリセットを保存しました");
    }
    setModalOpen(false);
    setEditingPreset(null);
  };

  const handleDelete = (preset: TagPreset) => {
    deletePreset(preset.id);
    message.success("プリセットを削除しました");
  };

  return (
    <div>
      <Button
        block
        icon={<PlusOutlined />}
        onClick={handleOpenCreate}
        style={{ marginBottom: "16px" }}
      >
        現在の選択を保存
      </Button>
      <List
        size="small"
        bordered
        locale={{ emptyText: "プリセットがありません" }}
        dataSource={presets}
        renderItem={(preset) => (
          <List.Item>
            <Space direction="vertical" size={8} style={{ width: "100%" }}>
              <Text strong>{preset.name}</Text>
              <Collapse
                ghost
                size="small"
                items={[
                  {
                    key: "tags",
                    label: `タグ (${preset.options.length}件)`,
                    children: (
                      <Space wrap size={[4, 4]} style={{ width: "100%" }}>
                        {preset.options.map((option) => (
                          <Tag key={option.id}>
                            {option.id < 0 ? option.value : option.label}
                          </Tag>
                        ))}
                      </Space>
                    ),
                  },
                ]}
              />
              <Space size="small">
                <Button
                  type="link"
                  size="small"
                  onClick={() => onApplyPreset(preset)}
                >
                  呼び出し
                </Button>
                <Button
                  type="link"
                  size="small"
                  icon={<EditOutlined />}
                  onClick={() => handleOpenEdit(preset)}
                >
                  編集
                </Button>
                <Popconfirm
                  title="このプリセットを削除しますか?"
                  okText="削除"
                  cancelText="キャンセル"
                  onConfirm={() => handleDelete(preset)}
                >
                  <Button
                    type="link"
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
                  >
                    削除
                  </Button>
                </Popconfirm>
              </Space>
            </Space>
          </List.Item>
        )}
      />
      <PresetFormModal
        open={modalOpen}
        title={modalMode === "edit" ? "プリセットを編集" : "プリセットを保存"}
        initialName={modalMode === "edit" ? editingPreset?.name : ""}
        onSubmit={handleSubmit}
        onCancel={() => {
          setModalOpen(false);
          setEditingPreset(null);
        }}
      />
    </div>
  );
};

export default PresetPanel;
