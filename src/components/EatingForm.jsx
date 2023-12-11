import React, { useState } from 'react';

const EatingForm = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const questions = [
    {
        "question": "How much more or less do you feel you worry about your weight and body shape than other people your age?",
        "options": [
            "1. I WORRY A LOT LESS THAN OTHER PEOPLE",
            "2. I WORRY A LITTLE LESS THAN OTHER PEOPLE",
            "3. I WORRY ABOUT THE SAME AS OTHER PEOPLE",
            "4. I WORRY A LITTLE MORE THAN OTHER PEOPLE",
            "5. I WORRY A LOT MORE THAN OTHER PEOPLE"
        ],
        "disorders": ['a', 'b', 'c'],
    },
    {
        "question": "How afraid are you of gaining 2kgs?",
        "options": [
            "1. NOT AFRAID OF GAINING",
            "2. SLIGHTLY AFRAID OF GAINING",
            "3. MODERATELY AFRAID OF GAINING",
            "4. VERY AFRAID OF GAINING",
            "5. TERRIFIED OF GAINING"
        ],
        "disorders": ['a', 'b', 'c'],
    },
    {
        "question": "Did you eat until uncomfortably full in the past 3 months?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAYS"
        ],
        "disorders": ['b', 'c'],
    },
    {
        "question": "Did you eat large amounts of food when not feeling hungry in the past 3 months?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAYS"
        ],
        "disorders": ['b', 'c'],
    },
    {
        "question": "Do you consume a small amount of food (i.e., less than 1200 calories/day) on a regular basis to influence your shape or weight?",
        "options": ["Yes", "No"],
        "disorders": ['a'],
    },
    {
        "question": "Do you make yourself throw-up/use diuretics or laxatives/exercise excessively to control your weight and shape?",
        "options": ["Yes", "No"],
        "disorders": ['b'],
    },
    {
        "question": "Do you struggle with a lack of interest in eating or food?",
        "options": ["Yes", "No"],
        "disorders": ['d'],
    },
    {
        "question": "Do you avoid certain or many foods because of such features as texture, consistency, temperature, or smell, or have other people suggested this may be the case for you?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAY"
        ],
        "disorders": ['d'],
    },
    {
        "question": "Do you avoid certain or many foods because of fear of experiencing negative consequences like choking or vomiting, or have other people suggested this may be the case for you?",
        "options": [
            "1. NEVER",
            "2. RARELY",
            "3. SOMETIMES",
            "4. OFTEN",
            "5. ALWAYS"
        ],
        "disorders": ['d'],
    },
]

  const handleResponse = (response) => {
    const increment = parseInt(response)
    console.log(response)
    const currentQuestion = questions[questionIndex];
    currentQuestion.disorders.forEach((disorder) => {
      switch (disorder) {
        case 'a':
          setA((prevA) => prevA + increment);
          break;
        case 'b':
          setB((prevB) => prevB + increment);
          break;
        case 'c':
          setC((prevC) => prevC + increment);
          break;
        case 'd':
          setD((prevD) => prevD + increment);
          break;
        default:
          break;
      }
    });

    // Move to the next question
    setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const renderOptions = (options, questionIndex) => {
    return options.map((option, index) => {
      const val = options.length > 1 ? index  : (option.toLowerCase() === 'yes' ? 4 : 0);
  
      return (
        <div key={index}>
          <label>
            <input
              type="radio"
              name={questionIndex}
              value={val}
              onChange={(e) => handleResponse(e.target.value)}
            />
            {option}
          </label>
        </div>
      );
    });
  };
  

  const renderQuestion = () => {
    const currentQuestion = questions[questionIndex];

    return (
      <div>
        <p>{currentQuestion.question}</p>
        {renderOptions(currentQuestion.options,questionIndex)}
      </div>
    );
  };

  const renderResults = () => {
    // Calculate risk levels
    const risk_a = a <= 7 ? "no" : (a <= 13 ? "risk" : "yes");
    const risk_b = b <= 10 ? "no" : (b <= 15 ? "risk" : "yes");
    const risk_c = c <= 8 ? "no" : (c <= 12 ? "risk" : "yes");
    const risk_d = d <= 4 ? "no" : (d <= 7 ? "risk" : "yes");
  
    // Check if all risk levels are "no"
    const noEatingDisorder = risk_a === "no" && risk_b === "no" && risk_c === "no" && risk_d === "no";
  
    return (
      <div>
        <p>Your results:</p>
        <p>Disorder A (Anorexia Nervosa): {a}</p>
        <p>Disorder B (Bulimia Nervosa): {b}</p>
        <p>Disorder C (Binge Eating Disorder): {c}</p>
        <p>Disorder D (ARFID): {d}</p>
  
        {/* Display risk levels */}
        {risk_a === "risk" && <p>You are at risk of Anorexia Nervosa disorder.</p>}
        {risk_a === "yes" && <p>You have Anorexia Nervosa disorder.</p>}
  
        {risk_b === "risk" && <p>You are at risk of Bulimia Nervosa disorder.</p>}
        {risk_b === "yes" && <p>You have Bulimia Nervosa disorder.</p>}
  
        {risk_c === "risk" && <p>You are at risk of Binge Eating Disorder.</p>}
        {risk_c === "yes" && <p>You have Binge Eating Disorder.</p>}
  
        {risk_d === "risk" && <p>You are at risk of Avoidant Restrictive Food Intake Disorder (ARFID).</p>}
        {risk_d === "yes" && <p>You have Avoidant Restrictive Food Intake Disorder (ARFID).</p>}
  
        {/* Display message for no eating disorder */}
        {noEatingDisorder && <p>You don't have an eating disorder.</p>}
      </div>
    );
  };
  

  return (
    <div>
      {questionIndex < questions.length
        ? renderQuestion()
        : renderResults()}
    </div>
  );
};

export default EatingForm;
