import React from 'react'

function Error() {
  return (
    <div>
      <section class="flex items-center p-16 bg-gray-50">
        <div class="container flex flex-col items-center ">
          <div class="flex flex-col max-w-md text-center">
            <h2 class="font-extrabold text-9xl text-gray-500 overflow-hidden">
                <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl md:text-3xl">Page is under construction.</p>
            <a href="./" class="px-8 py-2 text-xl font-semibold rounded bg-blue-600 text-gray-50 hover:text-gray-200 no-underline">Back to home</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Error
