let buttons = document.getElementsByClassName("header__effects-button");
let blocks = document.getElementsByClassName("grid__block");

for (let index = 0; index < buttons.length; index++) {
  let button = buttons[index];
  let buttonEffect = button.dataset.effect;
  button.addEventListener("click", function() {
    for (let i = 0; i < blocks.length; i++) {
      let block = blocks[i];

        let oldEffects = block.classList;
        var newEffects = [];
        
        // STEP 2: DISABLE ALL THE OTHERS
        oldEffects.forEach(function(item) {
          if (item.includes("is")) {
          } else {
            newEffects.push(item);
          }
        });

        block.classList = newEffects;  
        block.classList.add(buttonEffect);
  
    }
  });
}
