import { i18n } from "locale";
import { ITodo } from "types";

export const todos: ITodo[] = [
  {
    id: "1",
    title: i18n.t("test:todoText1"),
  },
  {
    id: "2",
    title: i18n.t("test:todoText2"),
  },
  {
    id: "3",
    title: i18n.t("test:todoText3"),
  },
];
