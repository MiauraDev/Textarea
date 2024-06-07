# Vercel Textarea Component

Componente de React tsx para un Textarea flexible y personalizable, con soporte para diferentes estados como disabled y error.

## Props

```typescript
interface TextareaProps {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  error?: string;
  size?: 'xSmall' | 'small' | 'mediumSmall' | 'large';
  style?: React.CSSProperties;
}
