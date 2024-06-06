import {IsTypeEqual, typeAssert} from '../type-assertions';
import {User, logPerson, users} from './index.solution';

typeAssert<IsTypeEqual<User, {name: string, age: number, occupation: string}>>();
typeAssert<IsTypeEqual<typeof users, {name: string, age: number, occupation: string}[]>>();
typeAssert<IsTypeEqual<typeof logPerson, (user: {name: string, age: number, occupation: string}) => void>>();
