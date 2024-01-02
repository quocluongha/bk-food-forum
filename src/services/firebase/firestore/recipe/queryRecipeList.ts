import firestore, {
  FirebaseFirestoreTypes,
} from "@react-native-firebase/firestore";
import { queryRecipe } from "./queryRecipe";

export const queryRecipeList = async () => {
  const recipeListReference = (
    await firestore().doc("RootQuery/SepPCGBxypKDdBo4Xk9q").get()
  ).data()?.RecipeList;

  const recipeList = await Promise.all(
    recipeListReference.map(
      async (recipeReference: FirebaseFirestoreTypes.DocumentReference) => {
        return await queryRecipe(recipeReference.id);
      }
    )
  );

  return recipeList;
};
