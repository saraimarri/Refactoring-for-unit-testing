/// <reference types="jest" />

 import { arePasswordsEqual } from "./lib";

 test("passwordsAreEqual",() =>{
    const result = arePasswordsEqual("abc","123");
    expect(result).toBe(false);
 });

 test("passwordsAreEqual",() =>{
    const result = arePasswordsEqual("abc","abc");
    expect(result).toBe(true);
 });

