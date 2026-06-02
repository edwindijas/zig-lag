export interface BasicInputProps {
  label?: string;
  defaultValue?: string;
  type?: string;
  name?: string;
  onChange?: (v: string) => void;
}
