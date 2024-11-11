{
    // =======================================================================================================================
    // Problem 5:
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    // =========================================================================================================================

    function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
        return obj[key]
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}