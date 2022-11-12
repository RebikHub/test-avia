import React, { ChangeEvent, useRef, useState } from 'react';
import styles from './Input.module.css';

type Props = {
  placeholder: string,
  handleInput: (value: string) => void
};

type InputEvent = ChangeEvent<HTMLInputElement>;

export default function Input({placeholder, handleInput}: Props) {
  const [value, setValue] = useState<string>('');
  const input = useRef<HTMLInputElement>(null);

  function inputText(e: InputEvent): void {
    setValue(e.target.value);
    handleInput(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type='text'
      placeholder={placeholder}
      ref={input}
      value={value}
      onChange={inputText}
      />
  );
};
