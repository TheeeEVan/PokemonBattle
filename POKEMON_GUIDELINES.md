# Pokemon Creation
## Creating Your Pokemon
***Ensure you have a plan for your pokemon first as this script is only meant to import the data into the program, not to design a pokemon!***
- Open a shell in the root directory of the project
- Run ```npm run pokemonMaker```
- Follow the instructions given to you

**Note:** *If any data is entered wrong you will have to exit the program (Ctrl+D or Ctrl+C) and restart*

## Publishing your pokemon
**All of the following requirements must be met for your pokemon to be put on the main branch**

>### Basic Requirments
>- Must be based off of a real pokemon
>- All stats must be considered reasonable (There will be feedback on your pull request)
>
>### Attack requirements
>- All attack names must make sense with the pokemon they are on *(e.g. don't make an attack named thunder bolt on a fairy pokemon)*
>- All descriptions must adhere to the following format:
>  - Must describe how the attack happens (e.g. Pikachu shocks the opponent)
>  - Must explain the effects of the attack in the following format:
>	 - **Damage:** "...dealing 50 damage."
>     - **Healing:** "...healing for 20hp." *or* "...healing theirself for 20hp."
>  - No more than one healing attack
>  - Attacks must be listed in the correct order:
>	  - Lower damage attacks before higher damage attacks
>      - Healing attacks always last

### Pushing to github
- Create a new branch named ```add-pokemon-(name)``` *(e.g. add-pokemon-charizard)*
- Submit a pull request to merge your branch with the main branch
- Your pull request must:
	- Have no changes other than to pokemon.json
	- Only add one pokemon (You must have seperate pull requests for each pokemon)

**Congratulations! You've submitted your pokemon for review and you will receive feedback when it has been reviewed.**