import React from 'react';
import "./style.scss";
const index = () => {
   return (
      <div className='wrap'>
         <div className="box-first mx-5 mt-5 py-5" id='first'>
         <h2>Optional Chaining</h2>
         <h4 className='mt-5'>The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.</h4>
         </div>


         <div className="box-first mx-5 mt-5 py-5" id='first'>
         <h2>Closure JavaScript </h2>
         <h4 className='mt-5'>Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.</h4>
         </div>



         <div className="box-first mx-5 mt-5 py-5" id='first'>
         <h2>Data Type JavaScript</h2>
         <h4 className='mt-5'>JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.

Primitive data type
Non-primitive (reference) data type
JavaScript is a dynamic type language, means you don't need to specify type of the variable because it is dynamically used by JavaScript engine. You need to use var here to specify the data type. It can hold any type of values such as numbers, strings etc.</h4>
         </div>



         <div className="box-first mx-5 mt-5 py-5" id='first'>
         <h2>Event Loop JavaScript</h2>
         <h4 className='mt-5'>The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. Let’s take a look at what happens on the back-end.</h4>
         <h4>The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.</h4>
         </div>

         <div className="box-first mx-5 mt-5 py-5" id='first'>
         <h2>Request, Response</h2>
         <h4 className='mt-5'>Request is most important during build part of backend programming mainly sometimes you can use frontend with work of API something like that.</h4>
         <h4>Response is shortly answer is Res you must know comback answer from backend</h4>
         </div>
      </div>
   );
};

export default index;