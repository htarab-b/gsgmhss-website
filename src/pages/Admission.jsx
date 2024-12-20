import React from 'react'

function Admission() {
  return (
    <div>
        <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                <h2 class="font-semibold text-xl text-gray-600">Admission Form</h2>

                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                    <div class="text-gray-600">
                        <p class="font-medium text-lg">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <div class="lg:col-span-2">
                        <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5">
                            <label for="full_name">Full Name</label>
                            <input type="text" name="full_name" id="full_name" class="h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="father_name">Father's Name</label>
                            <input type="text" name="father_name" id="father_name" class="h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="mother_name">Mother's Name</label>
                            <input type="text" name="mother_name" id="mother_name" class="h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="email">Email Address</label>
                            <input type="text" name="email" id="email" class="h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>

                        <div class="md:col-span-3">
                            <label for="address">Address / Street</label>
                            <input type="text" name="address" id="address" class="h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>

                        <div class="md:col-span-2">
                            <label for="city">City</label>
                            <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>

                        <div class="md:col-span-2">
                            <label for="country">Country / region</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input name="country" id="country" placeholder="Country" class="px-3 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                            <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                            </button>
                            </div>
                        </div>

                        <div class="md:col-span-2">
                            <label for="state">State / province</label>
                            <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                            <input name="state" id="state" placeholder="State" class="px-3 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                            <button tabindex="-1" class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <button tabindex="-1" for="show_more" class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                <svg class="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                            </button>
                            </div>
                        </div>

                        <div class="md:col-span-1">
                            <label for="zipcode">Zipcode</label>
                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-3 w-full bg-gray-50" />
                        </div>
                
                        <div class="md:col-span-5 text-right">
                            <div class="inline-flex items-end">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Submit</button>
                            </div>
                        </div>

                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" class="md:absolute bottom-0 right-0 p-4 float-right">
                </a>
            </div>
        </div>
    </div>
  )
}

export default Admission
