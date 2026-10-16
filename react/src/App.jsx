// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App


// task 1

// import React from "react";
// import Images from "./assets/index.jsx";
// import "./App.css";
// import Button from "./components/UI/button/index.jsx";

// function App() {
//   return (
//     <div className="App">
//       <h1>Welcome to My React App</h1>
//       <img src={Images.hero} alt="Hero" />
    
//       <Button name={"Hello All"} onClick={() => alert+++("Button clicked!")} /> 
//     </div>
//   );
// }
// export default App;



//task 2

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         'https://jsonplaceholder.typicode.com/users'
//       );
//       const users = await response.json();
//       setData(users);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Counter: {counter}</h2>

//       <button onClick={() => setCounter(counter + 1)}>
//         Increment
//       </button>

//       <button onClick={() => setCounter(counter - 1)}>
//         Decrement
//       </button>

//       <h2>User Details</h2>

//       <table border="" >
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Street</th>
//             <th>Suite</th>
//             <th>City</th>
//             <th>Zipcode</th>
//             <th>Latitude</th>
//             <th>Longitude</th>
//           </tr>
//         </thead>

//         <tbody>
//           {data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.name}</td>
//               <td>{user.email}</td>
//               <td>{user.phone}</td>
//               <td>{user.address.street}</td>
//               <td>{user.address.suite}</td>
//               <td>{user.address.city}</td>
//               <td>{user.address.zipcode}</td>
//               <td>{user.address.geo.lat}</td>
//               <td>{user.address.geo.lng}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default App;






//assignment



// import { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [status,setStatus] = useState(0)
//   useEffect(() => {
//     fetch("https://dummyjson.com/products/category/smartphones")
//       .then((res) => {
//         console.log(res,"response");
//         setStatus(res.status

//         )
//         res.json()})
//       .then((result) => {setData(result.products)})
//       .finally(() => setLoading(false));
//   }, []);

//   const result = data.filter((p) =>
//     p.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) return <h2>Loading...</h2>;

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>Mobile Store 📱</h1>

//       <input
//         type="text"
//         placeholder="Search mobiles"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {result.length === 0 ? (
//         <h2>No Data Found</h2>
//       ) : (
//         result.map((p) => (
//           <div key={p.id}>
//             <img src={p.thumbnail} width="150" alt={p.title} />
//             <h3>{p.title}</h3>
//             <p>Price: {p.price}</p>
//             <p>Rating: {p.rating}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default App;









//task1

// import { useState } from "react";
// import Title from "./Title.jsx";

// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <Title count={count} />
//       <button onClick={() => setCount(count + 1)}>Count is {count}</button>
//     </div>
//   );
// }

// export default App;



//task 2

// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   return (
//     <div>
//       <h1>Enter Your Name</h1>
      
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />


//       <h2>Your Name: {name}</h2>
      
//     </div>
//   );
// }

// export default App;


//task3

import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    age: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Enter Your Information</h1>

      <input type="text" placeholder="First Name"
        name="firstName" value={form.firstName}
        onChange={handleChange} />
      <br /><br />

      <input type="email" placeholder="Email"
        name="email" value={form.email}
        onChange={handleChange} />
      <br /><br />

      <input type="number" placeholder="Age"
        name="age" value={form.age}
        onChange={handleChange} />
      <br /><br />

      <button onClick={() => setSubmitted(true)}>
        Submit
      </button>

      {submitted && (
        <div>
          <h2>Submitted Details</h2>
          <p>First Name: {form.firstName}</p>
          <p>Email: {form.email}</p>
          <p>Age: {form.age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
