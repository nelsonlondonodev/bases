var Validations;
(function (Validations) {
    Validations.validaText = (text) => {
        return text.length > 3 ? true : false;
    };
    const validateDate = (myDate) => {
        return isNaN(myDate.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
export {};
//# sourceMappingURL=validations.js.map