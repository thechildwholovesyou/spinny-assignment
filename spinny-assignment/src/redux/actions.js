import { getValue } from "@testing-library/user-event/dist/utils";

export const updateAnimes = (v) => {
  return {
    type: "UPDATE",
    payload: v,
  };
};

