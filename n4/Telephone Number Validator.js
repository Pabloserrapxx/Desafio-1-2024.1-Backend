function telephoneCheck(str) {
    const regexFormat = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    return regexFormat.test(str);
  }
  telephoneCheck("555-555-5555");