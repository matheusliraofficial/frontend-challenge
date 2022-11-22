import type { ChangeEventHandler } from "react";

export interface SearchProps {
  /**
   * Callback function that runs when Search's text changes.
   */
  onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;

  /**
   * Controls the search input value.
   */
  value: string;
}
