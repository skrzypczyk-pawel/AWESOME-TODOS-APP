import React, { FC } from "react";
import { Todo } from "src/components/Todo/Todo";
import { ITodo } from "src/types";
import { useTranslation } from "react-i18next";
import { StyledText } from "../StyledText";

interface Props {
  list: ITodo[];
}

export const TodoList: FC<Props> = ({ list }) => {
  const { t } = useTranslation("todo");

  return (
    <>
      {!list.length ? (
        <StyledText>{t("emptyArray")}</StyledText>
      ) : (
        list.map((todo: ITodo) => <Todo key={todo.id} todo={todo} />)
      )}
    </>
  );
};
