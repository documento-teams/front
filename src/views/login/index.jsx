import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/api/auth/login`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div class="grid justify-center">
        <div class="flex justify-center mb-[50px]">
            <svg width="272" height="280" viewBox="0 0 61 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 9.78281C0.5 7.11558 2.66221 4.95337 5.32944 4.95337H36C49.8071 4.95337 61 16.1463 61 29.9534V32.9534C61 46.7605 49.8071 57.9534 36 57.9534H10.5C4.97715 57.9534 0.5 53.4762 0.5 47.9534V26.7093C0.5 24.1909 2.54156 22.1493 5.05995 22.1493V22.1493C7.57833 22.1493 9.61989 24.1909 9.61989 26.7093V47.0375C9.61989 48.1421 10.5153 49.0375 11.6199 49.0375H35.2391C36.9635 49.0375 38.6758 48.7508 40.3061 48.1892V48.1892C43.8223 46.9779 46.6125 44.2577 47.9127 40.7734L48.5574 39.0459C50.1382 34.8097 50.2237 30.1606 48.7997 25.8692L47.8093 22.8845C46.5871 19.2012 43.6448 16.3458 39.9264 15.2346V15.2346C38.5452 14.8219 37.1114 14.6122 35.6698 14.6122H5.32944C2.66221 14.6122 0.5 12.45 0.5 9.78281V9.78281Z" fill="black"/>
            </svg>
        </div>
      <div>
        <form onSubmit={handleLogin}>
          <div class="grid mb-7 ">
            <label htmlFor="email" class="mb-[6px] text-left text-[#0F172A]">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="border border-solid w-[441px] h-[40px] rounded-md border-[#9F5FCE] pl-3 pr-3 hover:bg-[#C28FFF]/20 transition-all duration-300"
            />
            <p class="text-[#64748B] text-left">Enter your email address</p>
          </div>
          <div class="grid">
            <label htmlFor="password" class="mb-[6px] text-left text-[#0F172A]">Password</label>
            <input
              type="password"
              id="password"
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="border border-solid w-[441px] h-[40px] rounded-md border-[#9F5FCE] pl-3 pr-3 hover:bg-[#C28FFF]/20 transition-all duration-300"
            />
            <p class="text-[#64748B] text-left">Enter your password</p>
            <a href="" class="text-black/50 text-[12px] mt-2 underline">Forgot your password ?</a>
          </div>
            {/* Remember me */}
            <div id="remember-me" class="flex mt-7">
            {/* Button Remember me  */}
            <label class="custom-checkbox">
                <input type="checkbox" class="w-[14px] h-[14px]"/>
                <span class="checkmark"></span>
            </label>
            <label class="text-black ml-2 font-medium">Remeber me</label>
            </div>
            <div class="flex justify-center mt-[65px] mb-10">
                <button type="submit" class="w-[100px] h-[39px] border rounded-[6px] border-[#9F5FCE] bg-[#C28FFF] text-white hover:shadow-xl transition-all duration-300 active:bg-violet-700">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;