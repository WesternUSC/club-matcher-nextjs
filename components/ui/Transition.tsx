import { Transition } from "@headlessui/react";
import { ReactElement } from "react";

export const TabTransition = ({
  children,
  tabIndex,
  index,
}: {
  children: ReactElement;
  tabIndex: number;
  index: number;
}) => {
  return (
    <Transition
      appear
      show={tabIndex == index}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};

export const TextTransition = ({
  children,
  isShowing,
}: {
  children: ReactElement;
  isShowing: boolean;
}) => {
  return (
    <Transition
      show={isShowing}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition>
  );
};
