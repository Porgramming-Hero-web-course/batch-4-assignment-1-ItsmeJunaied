{
  // =======================================================================================================================
  // Problem 5:
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
  // =========================================================================================================================

  interface profile {
    name: string;
    age: number;
    email: string;
  }

  type pertialProfileDetails = Partial<profile>;

  function updateProfile(
    obj: profile,
    updateObj: pertialProfileDetails
  ): profile {
    return { ...obj, ...updateObj };
  }
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));
}
