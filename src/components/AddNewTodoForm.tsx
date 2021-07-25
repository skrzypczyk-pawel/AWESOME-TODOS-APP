import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { css, StyleSheet } from "aphrodite";
import { colors, getShadow, typography } from "src/styles";
import { i18n } from "src/locale";
import { Category, ITodo, Priority } from "src/types";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { addTodo } from "src/store/todo/actions";
import { v4 as uuidv4 } from "uuid";
import { useNotification } from "src/hooks/useNotification";
import { CircleIconButton } from "./CircleIconButton";
import { StyledInput } from "./StyledInput";
import { TextArea } from "./TextArea";
import { Categories } from "./Categories";
import { SelectMenu } from "./SelectMenu";
import { StyledOption } from "./StyledOption";
import { StyledText } from "./StyledText";

const AddNewTodoSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, i18n.t("validation:tooShort"))
    .max(30, i18n.t("validation:tooLong"))
    .required(i18n.t("validation:requied")),
  description: Yup.string()
    .min(5, i18n.t("validation:tooShort"))
    .max(60, i18n.t("validation:tooLong"))
    .required(i18n.t("validation:requied")),
});

interface Props {}

export const AddNewTodoForm: FC<Props> = () => {
  const { handleNotification } = useNotification();

  const selectedMenu = document.getElementById(
    "formSelectMenu"
  ) as HTMLSelectElement;
  const dispatch = useDispatch();
  const [category, setCategory] = useState<Category>("none");
  const [priority, setPriority] = useState<Priority>("low");

  const getPriority = () => {
    const getImportance = selectedMenu?.value;
    switch (getImportance) {
      case "high":
        return setPriority("high");
      case "medium":
        return setPriority("medium");
      case "low":
        return setPriority("low");
      default:
        return setPriority("low");
    }
  };

  const initialValues: ITodo = {
    id: "",
    title: "",
    status: "todo",
    priority,
    category,
    deadline: "01-01-2034",
    description: "",
    createdAt: new Date().toISOString(),
  };

  const additionalResetForm = () => {
    setCategory("none");
    selectedMenu.value = "low";
  };

  const handleOnSubmit = (values: ITodo, actions: FormikHelpers<ITodo>) => {
    values.category = category;
    values.priority = priority;
    values.id = uuidv4();

    dispatch(addTodo(values));
    handleNotification({
      text: i18n.t("notification:addText"),
      title: i18n.t("notification:addTitle"),
    });
    actions.setSubmitting(false);
    actions.resetForm({});
    additionalResetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={AddNewTodoSchema}
        onSubmit={handleOnSubmit}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className={css(styles.form)}>
              <CircleIconButton
                iconName="list-icon"
                onClick={getPriority}
                style={styles.listButton}
                title={i18n.t("addTodo:add")}
                type="submit"
              />
              <StyledInput
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder={i18n.t("addTodo:title")}
                style={styles.input}
                error={touched.title && errors.title}
              />
              <TextArea
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder={i18n.t("addTodo:description")}
                style={styles.input}
                error={touched.description && errors.description}
              />
              <div className={css(styles.text)}>
                <StyledText style={typography.altBody2}>
                  {i18n.t("addTodo:chooseCategory")}
                </StyledText>
              </div>
              <Categories>
                <CircleIconButton
                  iconName="education-icon"
                  onClick={() => setCategory("education")}
                  title={i18n.t("addTodo:educationCategory")}
                  style={styles.categoryButton}
                  isSelected={category === "education"}
                />
                <CircleIconButton
                  iconName="work-icon"
                  onClick={() => setCategory("homework")}
                  title={i18n.t("addTodo:workCategory")}
                  style={styles.categoryButton}
                  isSelected={category === "homework"}
                />
                <CircleIconButton
                  iconName="health-icon"
                  onClick={() => setCategory("health")}
                  title={i18n.t("addTodo:healthCategory")}
                  style={styles.categoryButton}
                  isSelected={category === "health"}
                />
              </Categories>
              <SelectMenu id="formSelectMenu">
                <StyledOption
                  value="low"
                  text={i18n.t("addTodo:howImportant")}
                />
                <StyledOption
                  value="high"
                  text={i18n.t("addTodo:veryImportant")}
                />
                <StyledOption
                  value="medium"
                  text={i18n.t("addTodo:mediumImportant")}
                />
                <StyledOption
                  value="low"
                  text={i18n.t("addTodo:lowImportant")}
                />
              </SelectMenu>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    zIndex: 102,
    position: "fixed",
    left: "35vw",
    top: "15vh",
    right: "35vw",
    bottom: "15vh",
    backgroundColor: colors.white,
    boxShadow: getShadow(colors.transparent, 0, 0, 30),
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  listButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.5s",
    position: "absolute",
    top: "5vh",
    width: 55,
    height: 55,
    cursor: "pointer",
    border: `3px solid ${colors.transparent}`,
    borderRadius: "100%",
    backgroundColor: colors.transparent,
    ":hover": {
      backgroundColor: colors.blue2,
    },
  },
  input: {
    transition: "0.5s",
    margin: 2,
    boxShadow: getShadow(colors.blue4),
    border: `1px solid ${colors.white}`,
    width: "20vw",
    height: "5vh",
    lineHeight: "5vh",
    fontSize: "3vh",
    outline: "none",
    borderRadius: 5,
    backgroundColor: colors.white,
  },
  text: {
    margin: 0,
  },
  categoryButton: {
    flexBasis: "100%",
    margin: "5px",
    padding: "10px",
    width: 55,
    height: 55,
    position: "relative",
    border: `3px solid ${colors.transparent}`,
    borderRadius: "10%",
    ":hover": {
      border: `3px solid ${colors.blue2}`,
    },
  },
});
