import { useState } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-300">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-xs font-regular text-center text-primary mb-8">
                  Vite + React + Tailwind
                </h1>

                <div className="border-2 border-error">
                  <button onClick={() => setCount((count) => count + 1)} className="bg-primary">
                    Count rrrrr {count}
                  </button>
                </div>

                <p className="text-center text-sm text-gray-500 mt-8">
                  Click on the Vite and React logos to learn more
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
