import React from 'react'
import styles from './styles.module.css'

interface TextareaProps {
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  error?: string
  size?: 'xSmall' | 'small' | 'mediumSmall' | 'large'
  style?: React.CSSProperties
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  defaultValue,
  disabled,
  error,
  size = 'xSmall',
  style,
}) => {
  let textareaClass = `${styles.Textarea} ${styles[size]}`
  const errorTextClass = `${styles.textError} ${styles[`${size}ErrorText`]}`

  if (error) {
    textareaClass = `${textareaClass} ${styles.TextareaError}`
  } else if (disabled) {
    textareaClass = `${textareaClass} ${styles.TextareaDisabled}`
  }

  return (
    <div className={styles.TextareaContainer} style={style}>
      <textarea
        className={textareaClass}
        placeholder={!error ? placeholder : ''}
        disabled={disabled}
        defaultValue={error ? defaultValue : ''}
      ></textarea>
      {error && (
        <div className={styles.textErrorContainer}>
          <img src="/src/assets/errorIcon.svg" alt="Error Icon" />
          <p className={errorTextClass}>{error}</p>
        </div>
      )}
    </div>
  )
}

export { Textarea }
