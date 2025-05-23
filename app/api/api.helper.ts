export const getContentType = () => ({ "Content-Type": "application/json" });

export const errorCatch = (error: any): string => {
  if (error.response && error.response.data) {
    if (typeof error.response.data.message === "object") {
      return error.response.data.message[0];
    }

    return error.response.data.message;
  }

  return error.message;
};
