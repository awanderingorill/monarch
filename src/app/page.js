"use client"
import React, { useState } from 'react';

export default function Home() {

  var openSesame = false;

  const [input, setInput] = useState({
    password: '',
  });

  const [error, setError] = useState({
    password: '',
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }

  const validateInput = e => {
    let { value } = e.target;
      if (value == "opensesame") {
        alert('To book an appointment, email saint-warren@i-am-monarch.org')
      }
  }
  
  if (!openSesame){
    return (
      <main className="text-white bg-sunglasses bg-cover bg-center bg-white flex min-h-screen flex-col items-end justify-start p-24">
        <p className="w-90">
          <a href="https://www.instagram.com/i_am_monarch_777/" target="new" className="underline">Monarch</a> is the perfume maison of <a className="underline" href="http://saint-warren.com" target="new">Saint Warren</a>.
        </p>
        <p>
          To continue, enter the password:
          <p>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            className="bg-transparent border-white border-2 outline-none self-end"
          >
          </input>
          </p>
        </p>
      </main>
    )
  } else {
    return (
      "hello"
    )
  }

  
}
