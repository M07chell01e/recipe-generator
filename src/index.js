function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings:  response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bf083fbbdo1ae8079064t0a6b1447e3f";
  let context ="You are a Food expert and love to write short recipes. You mission is to generate a 4 to 8 line recipe in basic HTML strucuture and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate a recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log('Prompt: ${prompt}');

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);