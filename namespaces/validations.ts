namespace Validations {
  export const validaText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  const validateDate = (myDate: Date): boolean => {
    return isNaN(myDate.valueOf()) ? false : true;
  };
}

export {};
