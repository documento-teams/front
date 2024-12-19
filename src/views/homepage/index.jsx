const Homepage = () => {
  return (
    <div class="grid justify-center">
      {/*Logo*/}
      <div class="flex justify-center mb-[50px]">
        <svg width="272" height="280" viewBox="0 0 61 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 9.78281C0.5 7.11558 2.66221 4.95337 5.32944 4.95337H36C49.8071 4.95337 61 16.1463 61 29.9534V32.9534C61 46.7605 49.8071 57.9534 36 57.9534H10.5C4.97715 57.9534 0.5 53.4762 0.5 47.9534V26.7093C0.5 24.1909 2.54156 22.1493 5.05995 22.1493V22.1493C7.57833 22.1493 9.61989 24.1909 9.61989 26.7093V47.0375C9.61989 48.1421 10.5153 49.0375 11.6199 49.0375H35.2391C36.9635 49.0375 38.6758 48.7508 40.3061 48.1892V48.1892C43.8223 46.9779 46.6125 44.2577 47.9127 40.7734L48.5574 39.0459C50.1382 34.8097 50.2237 30.1606 48.7997 25.8692L47.8093 22.8845C46.5871 19.2012 43.6448 16.3458 39.9264 15.2346V15.2346C38.5452 14.8219 37.1114 14.6122 35.6698 14.6122H5.32944C2.66221 14.6122 0.5 12.45 0.5 9.78281V9.78281Z" fill="black"/>
        </svg>
      </div>

      {/*Button*/}

      {/*Button Login*/}
      <div id="button-login-home" class="flex justify-center">
        <a href="/login">
          <button
            type="submit"
            class="w-[369px] h-[81px] bg-[#C28FFF]/50 border-2 border-[#9F5FCE] rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 border-dashed font-bold text-[40px] mb-[59px] active:scale-95"
          >
            Login
          </button>
        </a>  
      </div>
      {/*Button Register*/}
      <div id="button-register-home" class="flex justify-center">
        <a href="/register">
          <button
            type="submit"
            class="w-[369px] h-[81px] bg-[#C28FFF] border-2 border-[#9F5FCE] rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-300 border-dashed font-bold text-[40px] mb-[59px] active:scale-95"
          >
            Register
          </button>
        </a>
      </div>
    </div>
  );
};

export default Homepage;
