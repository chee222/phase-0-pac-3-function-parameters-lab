function introduction(Aki) {
    return(`Hi, my name is ${Aki}.`);
  }

function introductionWithLanguage(Samip, Ember, React) {
    return(`Hi, my name is ${Samip} and I am learning to program in ${Ember}.`);
    return(`Hi, my name is ${Samip} and I am learning to program in ${React}.`)
  }

  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  const result1 = introductionWithLanguageOptional("Gracie");
  console.log(result1); // Output: Hi, my name is Gracie and I am learning to program in JavaScript.
  
  const result2 = introductionWithLanguageOptional("Gracie", "Python");
  console.log(result2); // Output: Hi, my name is Gracie and I am learning to program in Python.