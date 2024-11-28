import React from 'react';
import { Menu } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/router';

const demos = [
  { name: 'conaltura', path: '/conaltura' },
  { name: 'el viajero', path: '/el-viajero' },
  { name: 'takami', path: '/takami' },
  { name: 'geosystem', path: '/geosystem' },
];

const DemoDropdown = () => {
  const router = useRouter();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-all">
        <span>Access Demos</span>
        <Menu className="h-4 w-4" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[200px] bg-black/90 backdrop-blur-lg rounded-lg p-2 shadow-lg">
          {demos.map((demo) => (
            <DropdownMenu.Item
              key={demo.path}
              className="outline-none"
              onClick={() => router.push(demo.path)}
            >
              <button className="w-full text-left px-4 py-2 text-white rounded hover:bg-white/10 transition-colors capitalize">
                {demo.name}
              </button>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default DemoDropdown;