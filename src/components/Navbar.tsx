import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const demos = [
    { name: 'conaltura', path: '/conaltura' },
    { name: 'el viajero', path: '/el-viajero' },
    { name: 'takami', path: '/takami' },
    { name: 'geosystem', path: '/geosystem' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-white text-xl font-bold hover:text-gray-300 transition-colors">
          Kyto
        </Link>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition-all"
          >
            Access Demos
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 py-2 bg-black/80 backdrop-blur-sm rounded-lg shadow-xl border border-white/10"
              >
                {demos.map((demo) => (
                  <Link
                    key={demo.path}
                    href={demo.path}
                    className="block px-4 py-2 text-white hover:bg-white/10 transition-all capitalize"
                  >
                    {demo.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}