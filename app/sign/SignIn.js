import React from 'react'

const SignIn = () => {
  return (
    <>
    <div id="wrapper" className="  flex justify-center items-center h-screen custom-background">
      <div id="content" className="w-full max-w-[370px]">
        <div className=" mx-auto">
            <div className="">
            <div id="recaptcha-container"></div>
              <div className="col-md-offset-4 text-center">
                <h1 className="text-uppercase text-3xl text-white  font-bold">Please login</h1>
              </div> 
              <div className="bg-white border rounded-lg  p-5 mt-5">
                <form action="" className="login-form" method="post" acceptCharset="utf-8">
                  <input type="hidden" name="csrf_token_name" value="b500b3b677900ca9b64059e319adffe9" />
                  <div className="">
                    <div className="panel-body">
                      <input type="hidden" name="language" value="English" />
                      <div className="form-group">
                        <label htmlFor="email" className="block text-gray-700">Email Address</label>
                        <input type="text" autoFocus className="form-control w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" name="email" id="email" />
                      </div>
                      <div className="form-group mt-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" className="form-control w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500" name="password" id="password" />
                      </div>
                      <div className="checkbox mt-3">
                        <input type="checkbox" name="remember" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-gray-700">Remember me</label>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-info btn-block my-3 bg-blue-500 text-white py-2 px-4 w-full rounded focus:outline-none focus:bg-blue-600">Login</button>
                      </div>
                      <a href="https://crm.futuretouch.in/authentication/forgot_password" className="text-blue-500 ">Forgot Password?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignIn
