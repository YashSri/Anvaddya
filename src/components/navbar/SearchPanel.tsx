"use client";

import { SearchDialog } from "../SearchDialog";

export function SearchPanel({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return <SearchDialog isOpen={isOpen} onClose={onClose} />;
}
