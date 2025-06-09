import { Menu } from 'lucide-react';

const MenuButton = ({ onClick, visible = true }) => {
  return (
    <div className={`fixed top-4 left-4 z-50 ${!visible ? 'invisible' : ''}`}>
      <button
        onClick={onClick}
        className="text-gray-800 dark:text-white"
        aria-label="Open settings menu"
      >
        <Menu size={28} />
      </button>
    </div>
  );
};

export default MenuButton;
