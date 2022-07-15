import { useState } from "react";
import { isRequired, maxLength30, maxLength400, minLength3 } from ".";

export const useEditTaskForm = (editModalPost) => {
  const [inputsData, setInputsData] = useState({
    title: {
      value: editModalPost.title,
      error: undefined,
      validations: [isRequired, minLength3, maxLength30],
    },
    body: {
      value: editModalPost.body,
      error: undefined,
      validations: [isRequired, minLength3, maxLength400],
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    let error;
    const { validations } = inputsData[name];

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }

    setInputsData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  return [inputsData, handleChange];
};

export const useAddTaskForm = () => {
  const [inputsData, setInputsData] = useState({
    title: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength30],
    },
    body: {
      value: "",
      error: undefined,
      validations: [isRequired, minLength3, maxLength400],
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    const { validations } = inputsData[name];

    let error;

    for (let i = 0; i < validations.length; i++) {
      const validation = validations[i];
      const errorMessage = validation(value);

      if (errorMessage) {
        error = errorMessage;
        break;
      }
    }

    setInputsData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value,
          error,
        },
      };
    });
  };

  return [inputsData, handleChange];
};
