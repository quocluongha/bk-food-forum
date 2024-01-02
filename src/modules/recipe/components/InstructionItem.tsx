import { ListItem, Text, useTheme } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import { ListRenderItemInfo, View } from "react-native";
import { ScaledSheet, scale } from "react-native-size-matters";

export interface InstructionItemProps extends ListRenderItemInfo<any> {}

export const InstructionItem: React.FC<InstructionItemProps> = ({
  item,
  index,
}) => {
  const [expanded, setExpanded] = useState(index === 0 ? true : false);

  const toggleExpand = useCallback(() => {
    setExpanded((current) => !current);
  }, [setExpanded]);

  const {
    theme: {
      colors: { background, black },
    },
  } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: background, shadowColor: black },
      ]}
    >
      <ListItem.Accordion
        isExpanded={expanded}
        onPress={toggleExpand}
        content={
          <ListItem.Title style={{ flex: 1, fontWeight: "700" }}>
            {index + 1}. {item?.title}
          </ListItem.Title>
        }
      >
        <ListItem.Content style={{ paddingHorizontal: scale(16) }}>
          <Text variant="bodyMedium">{item?.content}</Text>
        </ListItem.Content>
      </ListItem.Accordion>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: "4@ms",
    paddingVertical: "8@s",
  },
});
