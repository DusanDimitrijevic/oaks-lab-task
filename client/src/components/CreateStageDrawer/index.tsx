import Drawer from "react-modern-drawer";

import { Input } from "../Input";
import { Button } from "../Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const CreateStageDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="right"
      className="bg-gray-50 p-4 flex flex-col"
      size={300}
    >
      <div className="flex-1">
        <h1 className="text-xl text-black mb-4">Create stage</h1>
        <Input className="mb-6" name="title" label="Stage title" />
      </div>
      <div className="flex items-center">
        <Button className="mr-4" label="Create" icon="plus" />
        <Button label="Cancel" icon="prohibit" onClick={onClose} />
      </div>
    </Drawer>
  );
};
