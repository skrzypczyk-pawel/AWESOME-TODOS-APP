import React, { FC, useState } from "react";
import { css, StyleSheet } from "aphrodite";
import { colors, getShadow, typography } from "src/styles";
import { i18n } from "src/locale";
import { Category, Priority } from "src/types";
import { Formik } from "formik";
import * as Yup from "yup";
import { CircleIconButton } from "./CircleIconButton";
import { StyledInput } from "./StyledInput";
import { TextArea } from "./TextArea";
import { Categories } from "./Categories";
import { SelectMenu } from "./SelectMenu";
import { StyledOption } from "./StyledOption";
import { StyledText } from "./StyledText";

const AddNewTodoSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(5, "Too Short!")
    .max(60, "Too Long!")
    .required("Required"),
});

interface Props {}

export const AddNewTodoForm: FC<Props> = () => {
  const selectedMenu = document.getElementById(
    "formSelectMenu"
  ) as HTMLSelectElement;
  const [category, setCategory] = useState<Category>("none");
  const [priority, setPriority] = useState<Priority>("low");
  const getPriority = () => {
    const getImportance = selectedMenu?.value;
    switch (getImportance) {
      case "1":
        return setPriority("high");
      case "2":
        return setPriority("medium");
      case "3":
        return setPriority("low");
      default:
        return setPriority("low");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          id: Math.floor(Math.random() * 1000) + 1,
          title: "",
          status: "todo",
          priority,
          category,
          deadline: "01-01-2034",
          description: "",
          createdAt: new Date().toISOString(),
        }}
        validationSchema={AddNewTodoSchema}
        onSubmit={(values, actions) => {
          values.category = category;
          values.priority = priority;
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ handleSubmit, handleChange, values, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className={css(styles.form)}>
              <CircleIconButton
                iconName="list-icon"
                onClick={getPriority}
                style={styles.listButton}
                title={i18n.t("modal:add")}
                type="submit"
              />
              <StyledInput
                name="title"
                value={values.title}
                onChange={handleChange}
                placeholder={i18n.t("modal:title")}
                style={styles.input}
                error={touched.title && errors.title}
              />
              <TextArea
                name="description"
                value={values.description}
                onChange={handleChange}
                placeholder={i18n.t("modal:description")}
                style={styles.input}
                error={touched.description && errors.description}
              />
              <div className={css(styles.text)}>
                <StyledText style={typography.altBody2}>
                  {i18n.t("modal:chooseCategory")}
                </StyledText>
              </div>
              <Categories>
                <CircleIconButton
                  iconName="education-icon"
                  onClick={() => setCategory("education")}
                  title={i18n.t("modal:educationCategory")}
                  style={styles.categoryButton}
                  isSelected={category === "education"}
                />
                <CircleIconButton
                  iconName="work-icon"
                  onClick={() => setCategory("homework")}
                  title={i18n.t("modal:workCategory")}
                  style={styles.categoryButton}
                  isSelected={category === "homework"}
                />
                <CircleIconButton
                  iconName="health-icon"
                  onClick={() => setCategory("health")}
                  title={i18n.t("modal:healthCategory")}
                  style={styles.categoryButton}
                  isSelected={category === "health"}
                />
              </Categories>
              <SelectMenu id="formSelectMenu">
                <StyledOption value={0} text={i18n.t("modal:howImportant")} />
                <StyledOption value={1} text={i18n.t("modal:veryImportant")} />
                <StyledOption
                  value={2}
                  text={i18n.t("modal:mediumImportant")}
                />
                <StyledOption value={3} text={i18n.t("modal:lowImportant")} />
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
