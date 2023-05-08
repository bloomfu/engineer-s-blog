import { useMemo } from 'react'
import Button from './Button'

export default {
  title: 'My Button',
}

interface ButtonProps {
  title: string
}

const useButtonCustom = (args: ButtonProps) => {
  return useMemo(() => {
    return <Button {...args} />
  }, [args])
}

export const ButtonCustom = () => {
  const args = { title: 'ホームへ戻る' }
  const button = useButtonCustom(args)
  return button
}
