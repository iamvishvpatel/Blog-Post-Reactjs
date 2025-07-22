import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import { UpdatePostForm } from "../../features/updatePost/components";
interface updatePostProps {
  isOpen: boolean;
  onClose: () => void;
  postId: number;
  postData: any;
  onPostUpdated: () => void;
}


export const UpdatePostModal = ({ isOpen, onClose, postId, postData, onPostUpdated }: updatePostProps) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            <Dialog.Panel className="w-full max-w-xl rounded-xl bg-white p-6 shadow-xl relative">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-xl font-bold">Update Post</Dialog.Title>
                <button onClick={onClose}>
                  <X className="w-5 h-5 text-gray-500 hover:text-red-500" />
                </button>
              </div>
              <UpdatePostForm
                postId={postId}
                defaultValues={postData}
                onClose={onClose}
                onPostUpdated={onPostUpdated}
              />
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
