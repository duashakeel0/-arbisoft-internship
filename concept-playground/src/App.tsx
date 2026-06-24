import { useState } from "react";

// TypeScript Interface
interface User {
  id: number;
  name: string;
}


function UserCard({ name }: { name: string }) {
  return <h3>{name}</h3>;
}

// Generic Function
function identity<T>(value: T): T {
  return value;
}

export default function App() {
  // React State Example
const [count, setCount] = useState(0);
    const [show, setShow] = useState(true);

  const users: User[] = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ahmed" },
  ];

  const callbackExample = () => {
    greet("Intern", () => {
      alert("Callback executed");
    });
  };

  function greet(name: string, callback: () => void) {
    alert(`Hello ${name}`);
    callback();
  }

  const promiseExample = () => {
    Promise.resolve("Promise completed")
      .then((message) => alert(message));
  };

  const asyncExample = async () => {
    const result = await Promise.resolve(
      "Async Await completed"
    );

    alert(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Concept Playground</h1>

      <h2>State Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      <h2>Conditional Rendering</h2>

      <button onClick={() => setShow(!show)}>
        Toggle Details
      </button>

      {show && <p>Details are visible.</p>}

      <hr />

      <h2>Props + List Rendering</h2>

      {users.map((user) => (
        <UserCard key={user.id} name={user.name} />
      ))}

      <hr />

      <h2>TypeScript Generic</h2>

      <p>{identity("Hello Generics")}</p>

      <hr />

      <h2>JavaScript Async Concepts</h2>

      <button onClick={callbackExample}>
        Callback
      </button>

      <button onClick={promiseExample}>
        Promise
      </button>

      <button onClick={asyncExample}>
        Async/Await
      </button>
    </div>
  );
}