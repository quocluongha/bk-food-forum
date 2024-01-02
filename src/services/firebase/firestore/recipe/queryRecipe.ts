import firestore from "@react-native-firebase/firestore";

export const queryRecipe = async (recipeId: string) => {
  const recipe = (await firestore().doc(`Recipe/${recipeId}`).get()).data();

  const ingredients = await Promise.all(
    recipe.ingredients.map(async (ingredientData) => {
      return {
        ...ingredientData,
        ingredient: (
          await firestore().doc(ingredientData.ingredient.path).get()
        ).data(),
      };
    })
  );

  return { ...recipe, ingredients } as any;
};
