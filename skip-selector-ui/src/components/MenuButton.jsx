import { Menu } from 'lucide-react';

const MenuButton = ({ onClick, visible = true }) => {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className="text-gray-800 dark:text-white h-10 flex items-center justify-center"
      aria-label="Open settings menu"
    >
      <Menu size={28} />
    </button>
  );
  
};

export default MenuButton;
