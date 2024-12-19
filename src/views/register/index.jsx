const Register = () => {
    return (
        <div class="grid justify-center">
            <h1 class="text-[50px] font-bold text-center mb-5">Register</h1>
            <form>
                <div class="grid">
                    <label htmlFor="fistname" class="text-left font-medium">First Name</label>
                    <input 
                        type="text" 
                        name="fistname" 
                        required
                        placeholder="First Name" 
                        class="border berder-[#9F5FCE] rounded-[6px] w-[594px] h-[40px] p-[12px] border-[#9F5FCE] hover:bg-[#C28FFF]/20 transition-all duration-300 "
                    />
                    <p class="text-[#64748B] text-left">Enter your first name</p>
                </div>
                <div class="grid mt-[20px]">
                    <label htmlFor="lastname" class="text-left font-medium">Last Name</label>
                    <input 
                        required 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name"
                        class="border berder-[#9F5FCE] rounded-[6px] w-[594px] h-[40px] p-[12px] border-[#9F5FCE] hover:bg-[#C28FFF]/20 transition-all duration-300 "
                    />
                    <p class="text-[#64748B] text-left">Enter your Last Name</p>
                </div>
                <div class="grid mt-[20px]">
                    <label htmlFor="email" class="text-left font-medium">Email</label>
                    <input 
                        required 
                        type="email"
                        name="email" 
                        placeholder="Email" 
                        class="border berder-[#9F5FCE] rounded-[6px] w-[594px] h-[40px] p-[12px] border-[#9F5FCE] hover:bg-[#C28FFF]/20 transition-all duration-300 "
                    />
                    <p class="text-[#64748B] text-left ">Enter your email adress</p>
                </div>
                <div class="grid mt-[20px]">
                    <label htmlFor="password" class="text-left font-medium">Password</label>
                    <input 
                        required 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        class="border berder-[#9F5FCE] rounded-[6px] w-[594px] h-[40px] p-[12px] border-[#9F5FCE] hover:bg-[#C28FFF]/20 transition-all duration-300 "
                    />
                    <p class="text-[#64748B] text-left">Enter your password</p>
                </div>
                <div class="grid mt-[20px]">
                    <label htmlFor="confirmPassword" class="text-left font-medium">Confirm Password</label>
                    <input 
                        required 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        class="border berder-[#9F5FCE] rounded-[6px] w-[594px] h-[40px] p-[12px] border-[#9F5FCE] hover:bg-[#C28FFF]/20 transition-all duration-300 "
                    />
                    <p class="text-[#64748B] text-left">Enter same password</p>
                </div>
                <div class="mt-[20px]">
                    <div id="remember-me" class="flex">
                      <label class="custom-checkbox">
                        <input type="checkbox" required/>
                        <span class="checkmark"></span>
                      </label>
                      <label class="pl-[11px] font-bold text-black">Accept terms and condition</label>
                    </div>
                    <p class="ml-[25px] text-[#64748B]">You agree to our Terms of Service and Privacy Policy.</p>
                </div>
                <div class="flex items-center justify-center">
                    <input 
                      type="submit" 
                      value="Register" 
                      class="text-white text-xl mb-10 w-[118px] h-[42px] bg-[#C28FFF] border border-[#9F5FCE] rounded-[6px] mt-[76px]"
                    />
                </div>
            </form>
        </div>
    );
}

export default Register;